<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AttendanceDeviceController;
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

Route::get('attendanceDetails',[AttendanceDeviceController::class, 'index']);

Route::post('addDevice',[AttendanceDeviceController::class, 'store']);

Route::get('getDevices',[AttendanceDeviceController::class, 'getDevices']);

Route::post('websiteDetails',[AttendanceDeviceController::class, 'websiteDetails']);

Route::get('setting',[AttendanceDeviceController::class, 'settings']);

Route::get('getUsers',[AttendanceDeviceController::class, 'getUsers']);

// Route::apiResource('addDevice',[DeviceController::class]);


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
