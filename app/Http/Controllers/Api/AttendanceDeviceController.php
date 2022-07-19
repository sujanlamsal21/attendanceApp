<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Rats\Zkteco\Lib\ZKTeco;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use App\Models\Devices;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use App\Http\Controllers\Api\ZkTechoController;

class AttendanceDeviceController extends Controller
{
    public function index(){
        $zk = new ZKTeco('192.168.123.33');
        $zk->connect();
        $allAttendancDetails = collect($zk->getAttendance());
        $allUsers = collect($zk->getUser());
        $date = Carbon::now()->format('Y-m-d');
        $b = $allAttendancDetails->where('timestamp', $date);
    dd($date,$allAttendancDetails, $b);

    }

    public function store(Request $request){
        try{
            $data = $request->all();
            $attributes=[
                'name'=>$data['device_name'],
                'ip'=>$data['device_ip'],
            ];
            $rules = [
                'name' => 'required',
                'ip' => 'required|unique:devices,ip',
                'port'=>'nullable',
            ];
            Validator::make($attributes, $rules)->validate();
            DB::beginTransaction();
            $da = Devices::create($attributes);
            DB::commit();
            return response()->json(["message"=>"Device Added Successfully !"],200);
        }catch (ValidationException $validationException) {  return response()->json([
                'status' => 'error',
                'msg'    => 'Error',
                'errors' => $validationException->errors(),
            ], 422);
        }catch(\Exception $e){
            DB::rollback();
            return response()->json(['message'=>"Error !", $e->getMessage()],500);
        }
    }

    public function getDevices(){
        $devices = Devices::all();
        $list = $devices->map(function($device){
            $ip = $device->ip;
            $zk = new ZkTechoController($ip);
            $status =  $zk->connect();  
            return [
                'id'=>$device->id,
                'device_name'=>$device->name,
                'device_ip'=>$device->ip,
                'status'=>$status
            ];
        });
        return response()->json(["data"=>$list],200);
    }

    public function websiteDetails(Request $request){
       try{
        $attributes =$request->all();
        $key = array_keys($attributes)[0];
        $value = array_values($attributes)[0];
        DB::beginTransaction();
        DB::table('settings')->where('key', 'website_name')->delete();
        DB::table('settings')->insert(
            [
              'key'=>$key,
              'value'=>$value
            ]
        );
        DB::commit();
        return response()->json(["message"=>"Setting Added Successfully !"],200);

       }catch(\Exception $e){
            DB::rollback();
            return response()->json(['message'=>"Error !", $e->getMessage()],500);
        }
    }

    public function settings(){
        $data = DB::table('settings')->where('key','website_name')->first();
        return response()->json(["data"=>$data],200);
    }

    public function getUsers(){
        $data = [];
        $devices = Devices::pluck('ip')->toArray();
         foreach($devices as $deviceIp){
            $user = [];
            $zk = new ZkTechoController($deviceIp);
            $status =  $zk->connect(); 
            if($status){
                $user =  $zk->getUser(); 
            }
            $data[] = $user;
         }
         $details = collect($data);
         return response()->json(["data"=>$details->flatten(1)],200);
    }
}
