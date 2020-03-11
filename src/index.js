
import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";
import store from "./store";


// var webpack = require('webpack');
// var webpackConfig = require('./webpack.config');
// var compiler = webpack(webpackConfig);

// app.use(require("webpack-dev-middleware")(compiler, {
//     noInfo: true, publicPath: webpackConfig.output.publicPath
// }));
ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById("root"));