const path = require('path');

module.exports = {
    name: 'word-relay-dev',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    entry: {
        app: ['./client'],
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: [' > 1% in KR'], // browserslist
                        },
                        debug: true
                    }]
                    , '@babel/preset-react'
                ],
                plugins: [
                    'react-hot-loader/babel',
                    '@babel/plugin-proposal-class-properties'],
            }
        }],
    },
    plugins: [],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist',
    },
};