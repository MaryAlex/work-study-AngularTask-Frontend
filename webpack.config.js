console.log(__dirname);
const config = {
    context: __dirname,
    entry: './index',
    output: {
        path: __dirname + '/app',
        publicPath: '/app',
        filename: 'bundle.js'
    },

    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ["", ".js"]
    },
    
    module: {
        loaders: [{
            test: /\.js$/,
            // include: __dirname + '/app/directives',
            loader: 'babel?presets[]=es2015'
        }],

        noParse: /angular\/angular.js/
    },
    
    devServer: {
        host: 'localhost',
        port: 3000,
        contentBase: __dirname,
        proxy: {
            '/hello' : 'http://localhost:8080',
            '/bookmark' : 'http://localhost:8080'
        }
    }
};

module.exports = config;
