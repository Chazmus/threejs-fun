/*
 * webpack.config.js
 * Copyright (C) 2017 chaz <chaz@Nigel>
 *
 * Distributed under terms of the MIT license.
 */
module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
