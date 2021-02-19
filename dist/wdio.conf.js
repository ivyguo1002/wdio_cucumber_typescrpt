exports.config = {
    runner: 'local',
    specs: ['./src/**/*.feature'],
    suites: {
        account: ['./src/features/**/account.feature'],
        login: ['./src/features/**/login.feature'],
    },
    exclude: [],
    maxInstances: 10,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
        },
    ],
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://demo.guru99.com/v4',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 0,
    services: ['chromedriver', 'geckodriver'],
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        backtrace: false,
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: true,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: [
            './dist/**/steps/**/**.js',
            './dist/**/support/hooks.js',
        ],
        snippetSyntax: undefined,
        strict: true,
        tagExpression: 'not @Pending',
        tagsInTitle: false,
        timeout: 20000,
    },
    before: function () {
        browser.maximizeWindow();
    },
    beforeScenario: function () {
        browser.reloadSession();
    },
};
//# sourceMappingURL=wdio.conf.js.map