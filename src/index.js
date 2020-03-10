
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";


// var webpack = require('webpack');
// var webpackConfig = require('./webpack.config');
// var compiler = webpack(webpackConfig);

// app.use(require("webpack-dev-middleware")(compiler, {
//     noInfo: true, publicPath: webpackConfig.output.publicPath
// }));
ReactDOM.render(<App />, document.getElementById("root"));