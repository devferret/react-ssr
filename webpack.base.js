module.exports = {
    // Tell webpack to run bebel on every file it run through
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
                presets: [
                    'react','stage-0',
                    [ 'env', { target: { browser: ['last 2 versions'] } } ]
                ]
            }
        }]
    }
}