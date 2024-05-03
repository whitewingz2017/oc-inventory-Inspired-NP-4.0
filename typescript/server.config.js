const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
    entry: './src/server/server.ts',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({ 'global.GENTLY': false }),
        new RemovePlugin({
            before: {
              include: [
                path.resolve(__dirname, '../server')
              ]
            },
            watch: {
              include: [
                path.resolve(__dirname, '../server')
              ]
            }
          }),
        new CopyPlugin([
            { from: 'src/_fxmanifest.lua', to: '../fxmanifest.lua'}
        ]),
    ],
    optimization: {
        minimize: false,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'sv_main.js',
        path: path.resolve(__dirname, '../server/'),
    },
    target: 'node',
};
