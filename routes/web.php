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

Route::get('/koffie/{id}', 'CoffeeController@detail')->name('coffee_detail');

Route::get('/koffie-box', 'CoffeeBoxController@index')->name('coffeebox_index');
Route::get('/koffie-box/final', 'CoffeeBoxController@final')->name('coffeebox_final');

Route::get('/', 'HomeController@index')->name('home_index');

Route::get('/login', 'HomeController@login')->name('home_login');

Route::redirect('/', '/koffie-box');


