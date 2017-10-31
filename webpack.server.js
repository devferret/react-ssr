const path = require('path')
const marge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
    // Inform webpack that we're building a bundle
    // for nodeJS, rather than for the browser
    target: 'node',

    // Tell webpack the root file of our
    // server application
    entry: './src/index.js',

    // Tell webpack where to put the output file
    // that  is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
}

module.exports = marge(baseConfig, config)