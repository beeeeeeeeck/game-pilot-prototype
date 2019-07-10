"use strict";
const path = require('path');
const webpack = require('webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
// const TerserPlugin = require('terser-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');

const GAME_DEV = {
	name: 'game-dev',
	mode: 'development',
	devtool: 'inline-source-map',
	entry: {
		"test": './src/test.js'
	},
	// resolve: {
	// 	extensions: [".js"]
	// },
	plugins: [
		new webpack.ProgressPlugin(),
		new CleanWebpackPlugin(),
		new HardSourceWebpackPlugin(),
		new StatsPlugin('webpackStats.dev.json', {
			all: false,
			assets: true,
			entrypoints: true,
			errors: true,
			maxModules: 0
		}),
		new ManifestPlugin({
			fileName: 'manifest.dev.json',
			publicPath:'../js/'
		})
	],
	output: {
		filename: '[name].js',
		// chunkFilename: '[name].[id].js',
		path: path.resolve(__dirname, 'public', 'js')
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			automaticNameDelimiter: '.'
		}
	},
	performance: {
		hints: false
	}
};

const GAME_PROD = Object.assign({}, GAME_DEV, {
	name: 'game-prod',
	mode: 'production',
	devtool: false,
	output: {
		filename: '[name].min.js',
		path: path.resolve(__dirname, 'public', 'js')
	},
	plugins: [
		new HardSourceWebpackPlugin(),
		new StatsPlugin('webpackStats.prod.json', {
			chunks: true,
			modules: false,
			reasons: false,
			source: false
		}),
		new ManifestPlugin({
			fileName: 'manifest.prod.json',
			publicPath:'../js/'
		})
	],
});

module.exports = [GAME_DEV, GAME_PROD];
