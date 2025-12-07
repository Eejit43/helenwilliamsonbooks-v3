// @ts-check

import sharedConfig from '@eejit/eslint-config-typescript';
import eslintNextVitals from 'eslint-config-next/core-web-vitals';
import eslintNextTypescript from 'eslint-config-next/typescript';
import { defineConfig } from 'eslint/config';

const sharedRuleOverrides = sharedConfig.find((config) => !config.name && config.plugins && config.rules);

let namingConventionRule;
if (sharedRuleOverrides) {
    // @ts-ignore .rules is always defined based on the selector from sharedConfig
    namingConventionRule = sharedRuleOverrides.rules['@typescript-eslint/naming-convention'];

    // @ts-ignore warning is invalid, we know @typescript-eslint/naming-convention is an array and can thus index into it
    if (namingConventionRule && Array.isArray(namingConventionRule)) namingConventionRule[1].format.push('StrictPascalCase');
}

const filteredSharedConfig = sharedConfig.filter((config) => config.name !== 'typescript-eslint/base');

export default defineConfig([...eslintNextVitals, ...eslintNextTypescript], filteredSharedConfig, {
    languageOptions: { parserOptions: { project: ['./tsconfig.json'] } },
    rules: {
        'jsdoc/require-jsdoc': 'off',
        ...(namingConventionRule ? { '@typescript-eslint/naming-convention': namingConventionRule } : {}),
        'react/jsx-pascal-case': 'warn',
        'react/jsx-sort-props': ['warn', { callbacksLast: true, shorthandLast: true, reservedFirst: true }],
        'react/self-closing-comp': 'warn',
    },
});
