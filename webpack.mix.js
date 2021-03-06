const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/header.scss', 'public/css/additions/header.css')
    .sass('resources/sass/Rai_master.scss', 'public/css/Rai_master.css')
    .sass('resources/sass/footer.scss', 'public/css/additions/footer.css')
    .sass('resources/sass/coffee_box/index.scss', 'public/css/coffee_box/index.css')
    .sass('resources/sass/coffee_box/final.scss', 'public/css/coffee_box/final.css')
    .sass('resources/sass/detail/detail.scss', 'public/css/detail/detail.css')
    .sass('resources/sass/login/main.scss', 'public/css/login/main.css')
    .sass('resources/sass/partials/cup-selector.scss', 'public/css/additions/cup-selector.css');
