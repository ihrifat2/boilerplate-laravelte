const mix = require('laravel-mix');
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/js/app.js', 'public/js')
    .css('resources/css/app.css', 'public/css', [
    ])
    .webpackConfig({
        experiments: {
            topLevelAwait: true
        },
        output: { chunkFilename: 'js/[name].js?id=[chunkhash]' },
        resolve: {
            extensions: [".*",".wasm",".mjs",".js",".jsx",".json"],
            mainFields: ['svelte', 'browser', 'module', 'main'],
            alias: {
                '@': path.resolve('resources/js'),
            },
        },
        module: {
            rules: [
                {
                    test: /\.(svelte)$/,
                    use: {
                        loader: 'svelte-loader',
                        options: {
                            emitCss: true,
                            hotReload: true,
                        },
                    },
                },
            ],
        },
    })
    .sourceMaps();