const path = require('path');

module.exports = {
	entry: {
		index: './src/scripts/index.js',
		about: './src/scripts/about.js',
		article: './src/scripts/article.js',
		cart: './src/scripts/cart.js',
		categories: './src/scripts/categories.js',
		comparison: './src/scripts/comparison.js',
		contact: './src/scripts/contact.js',
		delivery: './src/scripts/delivery.js',
		checkout: './src/scripts/checkout.js',
		confa: './src/scripts/confa.js',
		location: './src/scripts/location.js',
		news: './src/scripts/news.js',
		package: './src/scripts/package.js',
		product: './src/scripts/product.js',
		search: './src/scripts/search.js',
		support: './src/scripts/support.js',
		productlist: './src/scripts/productlist.js',
		sign_in: './src/scripts/sign_in.js',
		signup: './src/scripts/signup.js',
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'build'),
	},
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: path.join(__dirname, 'build'),
		},
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|webp|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.js$/i,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
		],
	},
};
