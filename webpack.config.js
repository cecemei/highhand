module.exports = {
    entry: './public/javascripts/index.jsx',
    output: {
        filename: './public/bundle.js',
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    devtool: 'source-maps',
    resolve: {
        extensions: ['.js', '.jsx', '*']
    }

};
