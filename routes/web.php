<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/koffie-box', 'CoffeeBoxController@index')->name('coffeebox_index');
Route::get('/koffie-box/final', 'CoffeeBoxController@final')->name('coffeebox_final');
Route::get('/login', 'LoginController@index')->name('login_index');

Route::get('/', 'HomeController@index')->name('home_index');

Route::redirect('/', '/koffie-box');


