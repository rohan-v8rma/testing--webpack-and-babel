/* 
webpack.config.js file is a Node.js module that exports an object containing the configuration options for webpack. 

When webpack is run, it reads the configuration from this file, which is executed in a Node.js environment. 

This means that you can use Node.js functions and syntax, such as require() and module.exports, in the webpack.config.js file.
*/

// `path` is a functionality that comes with Nodejs
const path = require('path');

//! Read up on plugins from the Webpack&Babel README.md
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*
* This is a variable for deciding the build mode
? Refer Node README.md for more information on the `process.env` global Node object
*/
const mode = (process.env.NODE_ENV === 'production') ? 'production' : 'development';

module.exports = {
    /*
    * `mode` is a root-level property that specifies the level of detail the bundled code will have.
    
    ? 'production` mode minifies and mangles the code: no whitespaces, linebreaks, only one letter variable names
    
    ? `development` mode tries to give us a lot more information through the mode of comments, and source maps

    Instead of hardcoding a mode, we can use an environment variable
    
    */
    // mode: 'development',
    mode: mode,

    //! Read up on plugins from the Webpack&Babel README.md
    //? This plugin will run everytime `webpack` is called.
    plugins: [new BundleAnalyzerPlugin()],

    /*
    * Source maps are files that map the compiled code back to the original source code. 
    
    ? They help developers debug code that has been minified or transformed in some way, by allowing them to see the original source code and set breakpoints in the original source files inside of the browser dev tools. 

    ? Even the console logs are mapped back to the files they came from

    ? When webpack is configured to generate source maps (generally in development mode), it creates a separate file that contains the mapping information. This file is usually suffixed with `.map` and is loaded in the browser along with the compiled code. The browser uses this file to map the compiled code back to the original source code, making it possible for developers to debug the code.
    */
    devtool: 'inline-source-map',

    
    //* `entry` property specifies the starting point of the webpack build process. It tells webpack which module to use as the root of the dependency graph that it builds for the application. Unlike `output.pathname`, the path is relative to the location of `webpack.config.js` file. Might be because of disparities in read/write privileges.
    //? This is the default value without setup
    // entry: './src/index.js'
    entry: './public/index.js',

    //* The output property, on the other hand, tells webpack where to output the bundled code.    
    //? Default values
    // output: {   
    //     filename: 'main.js',
    //     path: path.resolve(__dirname, 'dist')
    // },
    output: {
        filename: 'bundle.js',
        /*
        We use the `path.resolve()` method in the path property of the output object in `webpack.config.js` to generate the absolute path of the output directory, in this case, `dist`.

        The reason we use `path.resolve()` instead of a string like in `entry` is to avoid any potential issues with the path; since we need the absolute path of the directory in this case.
        
        On different operating systems, paths are formatted differently, and using `path.resolve()` ensures that the path is resolved correctly no matter what the operating system is.

        The `__dirname` variable is a global variable in Node.js that refers to the directory of the current module. By passing `__dirname` as the first argument to path.resolve(), we create an absolute path starting from the root of the project. 
        
        This ensures that we always get the correct path regardless of the current working directory of the script or where it is executed from.

        So, in essence, we use path.resolve(__dirname, 'dist') to generate an absolute path for the dist directory that is consistent across different operating systems and project structures.
        */
        path: path.resolve(__dirname, 'bundling_output')
    },

    //*  devServer option allows you to run a development server that serves your application files, and it also provides some additional features like hot module replacement and automatic reloading of your web page when changes are detected
    devServer: {       
        // `static` option is used to specify the directory from which the static files should be served. It can be an absolute or relative path. By default, it is set to the directory where the webpack configuration file is located.
        static: './bundling_output',

        // `port` option is used to specify the port number on which the server should listen. The default port is 8080. This way it listens for HTTP requestss on this port of the hosting IP address.
        port: 1369

        /*
        Some other config options
        
        ? hot: This option is used to enable hot module replacement. When this option is enabled, changes to your code will be automatically applied without having to refresh the page.
        
        ? open: This option is used to open the default browser when the server starts.
        
        ? historyApiFallback: This option is used to serve a fallback page when a requested page does not exist.
        */
    },

    module: {
        rules: [
            // In summary, this rule is webpack saying whenever js files are encountered, (except for the ones in node_module) the loader named `babel-loader` will be used which knows to go and look at the presets in the .babelrc file, where it gets guidelines on how the code has to transpiled by the `@babel/core` module.
            {
                // Regex expression for getting all files ending with the .js extension
                test: /\.js$/,
                
                // We wouldn't want to run babel transpilation on the modules we imported
                // The `exclude` key is used to specify a regular expression that is used to exclude certain files or directories from being processed by the Webpack loader.
                // In this case, the regular expression `/node_modules/` is used to exclude all files and directories that contain the string "node_modules" in their PATH.
                exclude: /node_modules/,

                // This `use` object is effectively for telling what loader we want to use
                use: {
                    // If we don't provide any additional settings, this will reference the .babelrc file
                    loader: 'babel-loader'
                }
            }
        ]
    }
}