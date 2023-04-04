<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Frontend/Welcome');
});

Route::get('/login', function () {
    return Inertia::render('Auth/Signin');
});

Route::get('/registration', function () {
    return Inertia::render('Auth/Signup');
});

Route::get('/admin', function () {
    return Inertia::render('Backend/Dashboard');
});
require __DIR__.'/auth.php';