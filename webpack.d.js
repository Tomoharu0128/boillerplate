const path = require('path')
const html = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [
        new html({
            template: path.resolve(__dirname, 'src/index.html'),
            title: 'test',
        })
    ],
    devServer: {
        historyApiFallback: true,
        open: true,
        stats: 'errors-only',
        inline: true,
        hot: true,
        port: 8080,
        // host: '0.0.0.0',
        // disableHostCheck: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modlues/,
                use: 'babel-loader',
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: 'file-loader'
            }
        ]
    }
}