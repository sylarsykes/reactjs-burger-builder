module.exports = {
    env: {
        test: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        modules: 'commonjs',
                        debug: false
                    }
                ],
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                ["@babel/plugin-proposal-decorators", {
                    "legacy": true
                }],
                ["@babel/plugin-proposal-class-properties", {
                    "loose": true
                }],
            ]
        },
        production: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                ["@babel/plugin-proposal-decorators", {
                    "legacy": true
                }],
                ["@babel/plugin-proposal-class-properties", {
                    "loose": true
                }],
            ]
        },
        development: {
            presets: [
                ['@babel/preset-env', { modules: false }],
                '@babel/preset-react'
            ],
            plugins: [
                '@babel/plugin-syntax-dynamic-import',
                ["@babel/plugin-proposal-decorators", {
                    "legacy": true
                }],
                ["@babel/plugin-proposal-class-properties", {
                    "loose": true
                }],
                "lodash",
                ["transform-imports", {
                    "lodash": {
                        "transform": "lodash/${member}",
                        "preventFullImport": true
                    }
                }]
            ]
        }
    }
};