const path = require('path');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = {
    entry: './src/client/client.ts',
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
        new RemovePlugin({
          before: {
            include: [
              path.resolve(__dirname, '../client')
            ]
          },
          watch: {
            include: [
              path.resolve(__dirname, '../client')
            ]
          }
        })
      ],
    optimization: {
        minimize: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'cl_main.js',
        path: path.resolve(__dirname, '../client'),
    },
};
