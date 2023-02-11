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

/*
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/film', \App\Http\Controllers\FilmController::class);

*/

/*
Route::post('/tokens/create', [\App\Http\Controllers\ApiTokenController::class, 'createToken']);

Route::group(['middleware' => 'auth:sanctum'], function () {
    Route::get('/user', function (Request $request) {
        return $request->user();
    });
    Route::apiResource('/film', \App\Http\Controllers\FilmController::class);
    Route::apiResource('/cinemaHall', \App\Http\Controllers\CinemaHallController::class);
});
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('/cinemaHall', \App\Http\Controllers\CinemaHallController::class);
Route::apiResource('/film', \App\Http\Controllers\FilmController::class);
Route::apiResource('/session', \App\Http\Controllers\SessionController::class);
Route::apiResource('/ticket', \App\Http\Controllers\TicketController::class);
Route::apiResource('/seat', \App\Http\Controllers\SeatController::class);

Route::get('/client/calendar', [\App\Http\Controllers\CommonController::class, 'calendar']);

Route::get('/client/seats/{session}', [\App\Http\Controllers\CommonController::class, 'seatSelect']);

