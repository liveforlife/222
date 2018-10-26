module.exports={
	entry:'./component/1.js',
	output:{
		path:__dirname+'/dist',
		filename:'bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				loader:'style-loader!css-loader'
			}
		]
	}
}
