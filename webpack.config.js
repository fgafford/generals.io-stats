module.exports = {
    entry: './src/tsx/UserQuery',
    output: {
        path: __dirname,  
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { 
                test: /\.tsx?$/, 
                exclude: '/node_modules/',
                loader: 'ts-loader' 
            }
        ]
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js']
    },
}