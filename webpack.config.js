var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
	entry: __dirname + '/app/main.js',
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.template.html'
		})
	],
	devServer: {
		contentBase: __dirname + '/public'
	}
}

module.exports = config