// @ts-check

import eslintNextVitals from 'eslint-config-next/core-web-vitals';
import eslintNextTypescript from 'eslint-config-next/typescript';
import { defineConfig } from 'eslint/config';

const eslintConfig = defineConfig([...eslintNextVitals, ...eslintNextTypescript]);

export default eslintConfig;
