module.exports = {
    entry: './app/index.jsx',
    output: {
        filename: './app/bundle.js',
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
