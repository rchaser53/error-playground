
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
	entry: './src/index.ts',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
    symlinks: false,
		extensions: ['.ts', '.vue', '.js', '.css'],
		alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '~components': path.resolve('src/components')
		}
	},
	module: {
		rules: [
    {
      test: /\.ts$/,
      exclude: /node_modules|vue\/src/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      }
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: 'vue-style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            modules: true,
            localIdentName: '[local]_[hash:base64:8]'
          }
        }
      ]
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          ts: 'ts-loader',
        },
      }
    }]
	},
	devServer: {
		historyApiFallback: {
			rewrites: [{ from: /vee\$/, to: '/vee' }, { from: /element\$/, to: '/element' }]
		},
		// open: true,
		port: 3000,
		host: "localhost",
	},
  devtool: 'inline-source-map',
  plugins: [
    new VueLoaderPlugin()
  ],
};