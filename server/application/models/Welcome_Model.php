<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome_model extends CI_Model{
	
	


	//注册账号
	public function add_regsiter($username,$password,$sno,$weixin,$major)
	{
		$sql = "
		    SELECT username FROM User WHERE username='".$username."'
		";
		$result = $this->db->query($sql);
		$result = $result->result_array();
		if($result['username'] == $username)
		{
			echo '用户名已存在';
		}
		else
		{
			$sql = "
			    INSERT INTO User (user_id,username,password,sno,weixin,major) VALUES ('NULL','".$username."','".$password."','".$sno."','".$weixin."','".$major."')
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
		        UPDATE User SET password = '".$password."' WHERE username = '".$username."'
		    ";
		    $result = $this->db->query($sql);
		    return $result;
		}
		
	}

}