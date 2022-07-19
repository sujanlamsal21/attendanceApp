<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Rats\Zkteco\Lib\ZKTeco;
use Carbon\Carbon;

class DeviceController extends Controller
{
    // public function index(){
    //     $zk = new ZKTeco('192.168.123.33');
    //     $zk->connect();
    //     $allAttendancDetails = collect($zk->getAttendance());
    //     $allUsers = collect($zk->getUser());
    //     $date = Carbon::now()->format('Y-m-d');
    //     $b = $allAttendancDetails->where('timestamp', $date);
    // dd($date,$allAttendancDetails, $b);

    // }

    public function store(Request $request){
        dd($request->all());
    }
}
