
let config=require('../config')

new webpack.DefinePlugin({
    'process.env':config.build.env
})