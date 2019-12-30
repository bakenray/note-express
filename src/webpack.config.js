var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode:'development',//development、production
    entry:path.join(__dirname,'js/app/index.js'),
    output:{
        path:path.join(__dirname,'../public/javascripts'),
        filename:'index.js'
    }
}
