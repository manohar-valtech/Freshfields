const { defineConfig } = require('cypress');

module.exports = defineConfig({
    port: 9000,
    chromeWebSecurity: false,
    video: false,
    viewportWidth: 1366,
    viewportHeight: 768,
    screenshotOnRunFailure: false,
    trashAssetsBeforeRuns: true,
    watchForFileChanges: true,
    env: {
        NEXT_PUBLIC_WEBSITE_URL: 'http://localhost:8080',
    },
    e2e: {
        baseUrl: 'http://localhost:8080',
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser, launchOptions) => {
                if (browser.name === 'chrome' && browser.isHeadless) {
                    launchOptions.args.push('--window-size=1366,768');
                    launchOptions.args.push('--force-device-scale-factor=1');
                }

                if (browser.name === 'electron' && browser.isHeadless) {
                    launchOptions.preferences.width = 1366;
                    launchOptions.preferences.height = 768;
                }

                if (browser.name === 'firefox' && browser.isHeadless) {
                    launchOptions.args.push('--width=1366');
                    launchOptions.args.push('--height=768');
                }

                return launchOptions;
            });
        },
    },
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack',
        },
        specPattern: 'src/**/*.test.{js,ts,jsx,tsx}',
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser, launchOptions) => {
                if (browser.name === 'chrome' && browser.isHeadless) {
                    launchOptions.args.push('--window-size=1366,768');
                    launchOptions.args.push('--force-device-scale-factor=1');
                }

                if (browser.name === 'electron' && browser.isHeadless) {
                    launchOptions.preferences.width = 1366;
                    launchOptions.preferences.height = 768;
                }

                if (browser.name === 'firefox' && browser.isHeadless) {
                    launchOptions.args.push('--width=1366');
                    launchOptions.args.push('--height=768');
                }

                return launchOptions;
            });
        },
    },
});
