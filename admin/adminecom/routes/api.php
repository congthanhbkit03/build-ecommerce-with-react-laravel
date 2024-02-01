<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\User\UserController;
use App\Http\Controllers\User\ForgetController;
use App\Http\Controllers\User\ResetController;
use App\Http\Controllers\Admin\ContactController;
use App\Http\Controllers\Admin\AboutController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\ProductDetailController;
use App\Http\Controllers\Admin\NotificationController;

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


 /////////////// User Login API Start ////////////////////////

 // Login Routes 
Route::post('/login',[AuthController::class, 'Login']);

 // Register Routes 
Route::post('/register',[AuthController::class, 'Register']);

 // Forget Password Routes 
Route::post('/forgetpassword',[ForgetController::class, 'ForgetPassword']);

 // Reset Password Routes 
Route::post('/resetpassword',[ResetController::class, 'ResetPassword']);

 // Current User Route 
Route::get('/user',[UserController::class, 'User'])->middleware('auth:api');

 /////////////// End User Login API Start ////////////////////////

Route::post('/postcontact', [ContactController::class, 'PostContact']);
Route::get('/siteinfo', [AboutController::class, 'getSiteInfo']);
Route::get('/allcats', [CategoryController::class, 'allCats']);
Route::get('/productlistbyremark/{remark}', [ProductController::class, 'ProductListByRemark']);
Route::get('/productlistbycategory/{category}', [ProductController::class, 'ProductListByCategory']);
Route::get('/productlistbysubcategory/{category}/{subcategory}', [ProductController::class, 'ProductListBySubcategory']);
Route::get('/allsliders', [SliderController::class, 'GetAllSliders']);
Route::get('/productdetails/{id}', [ProductDetailController::class, 'ProductDetail']);
//search
Route::get('/search/{key}', [ProductController::class, 'ProductListBySearch']);
//notification
Route::get('/notification', [NotificationController::class, 'NotificationHistory']);


