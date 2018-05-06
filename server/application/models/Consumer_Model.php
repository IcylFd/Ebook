<?php
defined('BASEPATH') OR exit('No direct script access allowed');
error_reporting(E_ALL || ~E_NOTICE);
class Consumer_model extends CI_Model{
	
	// var $link;
  // $link=mysql_connect("https://2tmftt32.qcloud.la","root","wff19981124");

        // public function __construct()
        // {
        //     parent::__construct();
        //     $this->load->database();
        // }


	//注册账号
	public function add_regsiter($username,$password,$sno,$wechat,$major)
	{
		$sql = "
		    SELECT * FROM user WHERE username='".$username."'
		";
		$result = $this->db->query($sql);
		$result = $result->result_array();
		if($result['username'] == $username)
		{
			$result = "用户名已存在";
      return $result;
		}
		else
		{
			$sql = "
			    INSERT INTO user (user_id,username,password,sno,wechat,major) VALUES ('NULL','".$username."','".$password."','".$sno."','".$wechat."','".$major."')
			";
			$result = $this->db->query($sql);
			return $result;
		}
	}


	//验证账号密码
	public function get_login($username,$password)
	{
		$sql = "
		    SELECT username,password FROM user WHERE username='".$username."' AND password='".$password."'
		";
		$result = $this->db->query($sql);
		$result = $result->result_array();
		if($result == NULL)
		{
			return FALSE;
		}
		else
		{
			$sql = "
		        UPDATE user SET password = '".$password."' WHERE username = '".$username."'
		    ";
		    $result = $this->db->query($sql);
		    return $result;
		}
		
	}

}