<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Rats\Zkteco\Lib\ZKTeco;

class ZkTechoController extends ZKTeco
{
    public $_ip;
    public $_port;
    public $_zkclient;
  
    public $_data_recv = '';
    public $_session_id = 0;
    public $_section = '';
  
    /**
     * ZKLib constructor.
     * @param string $ip Device IP
     * @param integer $port Default: 4370
     */
    public function __construct($ip, $port = 4370)
    {
      $this->_ip = $ip;
      $this->_port = $port;
  
      $this->_zkclient = socket_create(AF_INET, SOCK_DGRAM, SOL_UDP);
  
      $timeout = array('sec' => 1, 'usec' => 500000);
      socket_set_option($this->_zkclient, SOL_SOCKET, SO_RCVTIMEO, $timeout);
  
    }
}
