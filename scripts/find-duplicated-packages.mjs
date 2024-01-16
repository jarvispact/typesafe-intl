import { exec } from 'node:child_process';
import { valid } from 'semver';

// ==============
// ==============
// ==============
// config

const tool = 'npm'; // 'yarn' | 'npm'
const filter = '@typesafe-intl';

// ==============
// ==============
// ==============
// utils

const bash = async (cmd) =>
    new Promise((resolve) => {
        exec(cmd, (_, stdout) => {
            resolve(stdout);
        });
    });

const findDuplicates = (groupedDependencies) => {
    const duplicates = {};

    Object.entries(groupedDependencies).forEach(([key, value]) => {
        if (value.size > 1) duplicates[key] = [...value];
    });

    return duplicates;
};

// ==============
// ==============
// ==============
// npm

const walkAndGroupNpmDependencies = (accumulator, dependencies) => {
    Object.entries(dependencies).forEach(([key, value]) => {
        if (!key.includes(filter)) return;
        if (!accumulator[key]) accumulator[key] = new Set();
        accumulator[key].add(value.version);
        if (value.dependencies) walkAndGroupNpmDependencies(accumulator, value.dependencies);
    });

    return accumulator;
};

const getDuplicatesViaNpm = async () => {
    const npmLsJsonString = await bash('npm ls --all --json');
    const npmLsJson = JSON.parse(npmLsJsonString);

    const grouped = walkAndGroupNpmDependencies({}, npmLsJson.dependencies);
    return findDuplicates(grouped);
};

const printNpmDetails = async (duplicates) =>
    Promise.all(Object.keys(duplicates).map((pkg) => bash(`npm ls ${pkg}`))).then((result) =>
        result.join('\n\n'),
    );

// ==============
// ==============
// ==============
// yarn

const walkAndGroupYarnDependencies = (accumulator, trees) => {
    trees.forEach((item) => {
        if (!item.name.includes(filter)) return;
        const [pkg, version] = item.name.split(/@(?=[^@]+$)/);
        if (valid(version) === null) return; // could also be a version range
        if (!accumulator[pkg]) accumulator[pkg] = new Set();
        accumulator[pkg].add(version);
        if (item.children) walkAndGroupYarnDependencies(accumulator, item.children);
    });

    return accumulator;
};

const getDuplicatesViaYarn = async () => {
    const yarnLsJsonString = await bash('npx yarn list --json | grep "\\{\\"type\\":\\"tree\\""');
    const yarnLsJson = JSON.parse(yarnLsJsonString);

    const grouped = walkAndGroupYarnDependencies({}, yarnLsJson.data.trees);
    return findDuplicates(grouped);
};

const printYarnDetails = async (duplicates) =>
    Promise.all(Object.keys(duplicates).map((pkg) => bash(`npx yarn why ${pkg}`))).then((result) =>
        result.join('\n\n'),
    );

// ==============
// ==============
// ==============
// main

(async () => {
    process.stdout.write(`Using package manager: ${tool}\n\n`);

    const duplicates = await (tool === 'npm' ? getDuplicatesViaNpm() : getDuplicatesViaYarn());

    const hasNoDuplicates = Object.keys(duplicates).length < 1;
    if (hasNoDuplicates) {
        process.stdout.write('Yay! No duplicates found\n');
        process.exit(0);
    }

    process.stdout.write('Duplicates:\n\n');
    process.stdout.write(JSON.stringify(duplicates, null, 2));
    process.stdout.write('\n\nDetails:\n\n');

    const details = await (tool === 'npm'
        ? printNpmDetails(duplicates)
        : printYarnDetails(duplicates));

    process.stdout.write(details);
})();
