<?php
defined('BASEPATH') OR exit('No direct script access allowed');
//error_reporting(0);

class Consumer extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
    

    //接口
   


	    public function apiReturn($data = array(), $correct = true)
	    {
		    $result = array(
			    'code'    => 0,
			    'data'    => $data
		    );
		    if( ! $correct)
		    {
			    $result = array(
				    'code'    => 1,
				    'message' => $data
			    );
		    }
		    $result = html_escape($result);
		    echo json_encode($result);
	    }
    
	

    //上架书
	// public function sjbook()
	// {

	// 	$data = array(
	// 		'book_name' => '',
	// 		'book_author' => '1',
	// 		'type' => '1',
	// 		'wantbook' => '1',
	// 		'book_press' => '1',
	// 		'book_introduction' => '1',
	// 		'sjtime' => '',
	// 		'xjtime' => ''
	// 	);
	// 	$this->apiReturn($data);
	// }


    //注册
	public function register()
	{
		$username = $this->input->post('username');
		$pwd = $this->input->post('pwd');
		$repwd = $this->input->post('repwd');
		$password = strtoupper(md5($pwd));

		$sno = $this->input->post('sno');
		$wechat = $this->input->post('wechat');
		$major = $this->input->post('major');

		$flag = TRUE;
        $data = array();
        if($username == NULL)
        {
        	$data['err_name'] = '请输入用户名';
        	$flag = FALSE;
        }
        if($pwd != $repwd)
        {
        	$data['err_pwd'] = '两次密码不一致';
        	$flag = FALSE;
        }
        if($sno == NULL)
        {
        	$data['err_sno'] = '请输入学号';
        	$flag = FALSE;
        }
        if($wechat == NULL)
        {
        	$data['err_wechat'] = '请输入微信号';
        	$flag = FALSE;
        }
        if($major== NULL)
        {
        	$data['err_major'] = '请输入专业';
        	$flag = FALSE;
        }


        if($flag === FALSE)
        {
        	$this->apiReturn($data,$flag);
        }
        else
        {
        	$this->load->model('Consumer_model');
		    $result = $this->Consumer_model->add_regsiter($username,$password,$sno,$weixin,$major);
		    $this->apiReturn($result,$flag);
        }



		


	}



    
    //登录
	public function login()
	{
		//unset($_SESSION['username']);
        if(!isset($_SESSION['username']))
        {
        	echo "请先登录";
        }
        else
        {
        	echo "111";
        }


		$username = $this->input->post('username');
		$pwd = $this->input->post('pwd');
		$password = strtoupper(md5($pwd));
		//$password = $this->input->get('password');

		$this->load->model('Consumer_model');
		$result = $this->Consumer_model->get_login($username,$password);
        
        //unset($_SESSION['username']);
        // if(!isset($_SESSION['username']))
        // {
        // 	echo "请先登录";
        // }
        // else
        // {
        // 	echo "111";
        // }


        if($result === FALSE)
	    {
	    	unset($_SESSION['username']);
	    	$data = '账号不存在或密码错误';
		    $this->apiReturn($data,$result);
	    }
	    else
	    {	
		    $data = '登录成功';
		    $this->apiReturn($data,$result);
		    $_SESSION['username'] = $username;
	    }




	}


}