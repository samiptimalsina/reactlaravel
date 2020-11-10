<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});
Route::get('/details{reactRoutes}','ContactController@index');
Route::post('/contacts-create','ContactController@create');
Route::get('/contacts-edit/{id}','ContactController@edit');
Route::post('/contacts-update/{id}','ContactController@update');
Route::get('/contacts-delete/{id}','ContactController@destroy');
