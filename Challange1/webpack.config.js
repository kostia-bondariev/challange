const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");

// the path(s) that should be cleaned
let pathsToClean = [
    'js',
    'css',
    'images'
];

// the clean options to use
let cleanOptions = {
    root: path.join(__dirname, 'wwwroot/'),
    verbose: true,
    dry: false
}

module.exports = env => {

    env = env || {};
    console.log("NODE_ENV: " + env.NODE_ENV);
    const isLocal = env.NODE_ENV === 'local';
    const config = {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all'
                    },
                }
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true // set to true if you want JS source maps
                }),
                new OptimizeCSSAssetsPlugin({})
            ]
        },
        context: path.join(__dirname, 'Content'),
        entry: {
            bundle: './index',
        },
        output: {
            path: path.join(__dirname, 'wwwroot/js'),
            filename: isLocal ? '[name].js' : '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: 'style-loader',
                        },
                        {
                            loader: 'css-loader', // translates CSS into CommonJS
                        },
                        {
                            loader: 'less-loader', // compiles Less to CSS
                        }],
                },
                {
                    test: /\.(js|jsx)?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                        }
                    ],
                },
                {
                    test: /\.tsx?$/,
                    use: 'awesome-typescript-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ]
                },
                {
                    test: /\.(woff(2)?|ttf|eot|otf)(\?v=\d+\.\d+\.\d+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: '../fonts/'
                        }
                    }],
                    exclude: /images/
                },
                {
                    test: /\.ico$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../'
                    }
                },
                {
                    test: /\.(gif|png|jp(e*)g)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '../images'
                    }
                },
                {
                    test: /\.svg$/,
                    loader: 'raw-loader'
                }
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.json']
        },
        externals: {
        },
        plugins: [
            new webpack.ProvidePlugin({
            }),
            new MiniCssExtractPlugin({
                filename: isLocal ? "../css/[name].css" : "../css/[name].css"
            }),
            new CleanWebpackPlugin(pathsToClean, cleanOptions),
        ]
    };

    if(env.NODE_ENV == "local") { 
        config.devtool = 'inline-source-map';
    }

    return config;
}
