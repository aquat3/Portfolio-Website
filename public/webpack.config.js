// webpack.config.js
const path = require( 'path' );
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const webpack=require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        bundle: './src/index.js',
        
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',
   },
   devServer: {
    historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|j?g|svg|gif)?$/,
                use: 'file-loader',
                include: path.resolve(__dirname, 'src')
             }
        ]
    },
    plugins: [
        
        new HtmlWebPackPlugin({
           template: path.resolve( __dirname, 'public/index.html' ),
           filename: 'index.html'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
          })
       
     ],
    
    resolve: {
      modules: ['.', 'node_modules']
    }
};

