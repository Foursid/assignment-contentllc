import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{js,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser
        },
        plugins: {
            'react': react,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            '@stylistic': stylistic
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/no-extra-semi': 'error',
            '@stylistic/indent': ['error', 4],
            '@stylistic/jsx-tag-spacing': ['error', { 'beforeSelfClosing': 'always' }],
            '@stylistic/object-curly-spacing': ['error', 'always'],
            '@stylistic/key-spacing': ['error', { 'beforeColon': false }],
            '@stylistic/function-call-spacing': ['error', 'never'],
            '@stylistic/space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
            '@stylistic/comma-dangle': ['error', { 'generics': 'always' }],
            '@stylistic/member-delimiter-style': 'error',
            '@stylistic/no-extra-parens': 'error',
            '@stylistic/quotes': ['error', 'single'],
            '@stylistic/type-annotation-spacing': 'error',
            '@typescript-eslint/triple-slash-reference': 'off',
            '@typescript-eslint/strict-boolean-expressions': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-confusing-void-expression': 'off',
            '@typescript-eslint/consistent-type-imports': 'error',
            'react-hooks/exhaustive-deps': 'off',
            'react/display-name': 'off',
            'react/no-children-prop': 'off',
            'react/react-in-jsx-scope': 'off',
            'import/prefer-default-export': 'off'
        }
    }
);
