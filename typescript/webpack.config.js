const path = require('path')
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const WebpackObfuscator = require('webpack-obfuscator');

const buildPath = path.join(__dirname, '../');

const server = () => ({
    entry: ['./src/server/server.ts'],
    output: {
        path: path.resolve(buildPath, 'server'),
        filename: 'server.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackObfuscator({ 
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            debugProtectionInterval: false,
            disableConsoleOutput: false,
            domainLock: [],
            domainLockRedirectUrl: 'about:blank',
            forceTransformStrings: [],
            identifierNamesCache: null,
            identifierNamesGenerator: 'hexadecimal',
            identifiersDictionary: [],
            identifiersPrefix: '',
            ignoreRequireImports: false,
            inputFileName: '',
            log: false,
            numbersToExpressions: true,
            optionsPreset: 'default',
            renameGlobals: false,
            renameProperties: false,
            renamePropertiesMode: 'safe',
            reservedNames: [],
            reservedStrings: [],
            seed: 0,
            selfDefending: false,
            simplify: true,
            sourceMap: false,
            sourceMapBaseUrl: '',
            sourceMapFileName: '',
            sourceMapMode: 'separate',
            sourceMapSourcesMode: 'sources-content',
            splitStrings: true,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayCallsTransformThreshold: 0.5,
            stringArrayEncoding: ['rc4'],
            stringArrayIndexesType: [
                'hexadecimal-number'
            ],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 1,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 2,
            stringArrayWrappersType: 'variable',
            stringArrayThreshold: 0.75,
            target: 'browser',
            transformObjectKeys: false,
            unicodeEscapeSequence: false
        })
    ],
    optimization: {
        minimize: true
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
})

const client = () => ({
    entry: ['./src/client/client.ts'],
    output: {
        path: path.resolve(buildPath, 'client'),
        filename: 'client.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: ['ts-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackObfuscator({ 
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            debugProtectionInterval: false,
            disableConsoleOutput: false,
            domainLock: [],
            domainLockRedirectUrl: 'about:blank',
            forceTransformStrings: [],
            identifierNamesCache: null,
            identifierNamesGenerator: 'hexadecimal',
            identifiersDictionary: [],
            identifiersPrefix: '',
            ignoreRequireImports: false,
            inputFileName: '',
            log: false,
            numbersToExpressions: true,
            optionsPreset: 'default',
            renameGlobals: false,
            renameProperties: false,
            renamePropertiesMode: 'safe',
            reservedNames: [],
            reservedStrings: [],
            seed: 0,
            selfDefending: false,
            simplify: true,
            sourceMap: false,
            sourceMapBaseUrl: '',
            sourceMapFileName: '',
            sourceMapMode: 'separate',
            sourceMapSourcesMode: 'sources-content',
            splitStrings: true,
            splitStringsChunkLength: 10,
            stringArray: true,
            stringArrayCallsTransform: true,
            stringArrayCallsTransformThreshold: 0.5,
            stringArrayEncoding: ['rc4'],
            stringArrayIndexesType: [
                'hexadecimal-number'
            ],
            stringArrayIndexShift: true,
            stringArrayRotate: true,
            stringArrayShuffle: true,
            stringArrayWrappersCount: 1,
            stringArrayWrappersChainedCalls: true,
            stringArrayWrappersParametersMaxCount: 2,
            stringArrayWrappersType: 'variable',
            stringArrayThreshold: 0.75,
            target: 'browser',
            transformObjectKeys: false,
            unicodeEscapeSequence: false
        })
    ],
    optimization: {
        minimize: false
    },
    resolve: {
        extensions: ['.ts', '.js'],
    }
})

module.exports = [server, client]

/*
        new WebpackObfuscator({ 
            compact: true,
            unicodeEscapeSequence: true
        })
*/