import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: '@storybook/nextjs',
        options: {},
    },
    webpackFinal: async (config) => {
        if (config.module) {
            const rules = config.module?.rules;
            if (rules && typeof rules === 'object') {
                const scssIndex = rules?.findIndex((rule) => {
                    return (
                        rule &&
                        typeof rule === 'object' &&
                        rule.test?.toString().includes('scss')
                    );
                });

                if (
                    scssIndex > 0 &&
                    typeof rules[scssIndex] === 'object' &&
                    Array.isArray(rules[scssIndex]?.use)
                ) {
                    const rule = rules[scssIndex].use.pop();
                    if (
                        rule &&
                        typeof rule === 'object' &&
                        typeof rule.options === 'object' &&
                        rule.options?.sassOptions
                    ) {
                        rule.options.sassOptions.includePaths = [
                            path.join(__dirname, '../src/styles'),
                            'node_modules',
                        ];
                    }
                    rules[scssIndex].use.push(rule);
                }

                config.module.rules = rules;
            }
        }
        return config;
    },
    core: {
        disableTelemetry: true,
    },
    staticDirs: ['..\\public'],
};
export default config;
