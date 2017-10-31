const path = require('path')
const marge = require('webpack-merge')
const baseConfig = require('./webpack.base')

const config = {
    // Tell webpack the root file of our
    // server application
    entry: './src/client/client.js',

    // Tell webpack where to put the output file
    // that  is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = marge(baseConfig, config)