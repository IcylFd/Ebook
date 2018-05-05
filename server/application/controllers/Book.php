<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Book extends CI_Controller {
    

    public function bookapiReturn($data = array(), $correct = true)
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


    //交换书
	public function exbook()
	{
		//上传各种信息
		$bookName = $this->input->post('bookName');
		$bookAuthor = $this->input->post('bookAuthor');
		$bookClass = $this->input->post('bookClass');
		$bookSummary = $this->input->post('bookSummary');
    $bookIsbn = $this->input->post('bookIsbn');
 // $onMyCollection = $this->input->post('onMyCollection');

		$wantbook = $this->input->post('wantbook');

        //上传图片
		$imgname = $_FILES['myimage']['name'];
		$tmp_name = $_FILES['myimage']['tmp_name'];
		$ext = pathinfo($_FILES['myimage']['name'],PATHINFO_EXTENSION);
		$allowExt = array('jpeg','jpg','png','gif');
		//检测上传文件的类型
		 print_r($_FILES);
		if(!in_array($ext, $allowExt))
			{
				echo '非法文件类型';
			}

		$uploadPath = 'upload';
		if(!file_exists($uploadPath))
		{
			mkdir($uploadPath,0777,TRUE);
			chmod($uploadPath,0777);
		}

		$uniName = md5(uniqid(microtime(TRUE),TRUE)).'.'.$ext;
		$destination = $uploadPath.'/'.$uniName;
		if(!@move_uploaded_file($tmp_name, $destination))
		{
			exit('文件上传失败');
		}
		//$error = $_FILES['myimage']['error'];
		move_uploaded_file($tmp_name, $destination);
        //图片地址
		$bookImage = $destination;
		$bookImageName = $uniName;

        
        $this->load->model('Book_Model');
		$result = $this->Book_Model->add_exbook($bookName,$bookAuthor,$bookClass,$bookSummary,$bookIsbn,$onMyCollection,$wantbook,$bookImage,$bookImageName);

		
		if($result === FALSE)
		{
			$data = "上传失败";
			$this->bookapiReturn($data,$result);
		}
		else
		{
			$this->load->model('Book_Model');
		    $result = $this->Book_Model->get_exbook($bookIsbn);
		    $data = $result;
		    $this->bookapiReturn($data,$result);
		}

       //书名，图片，作者，摘要，isbn
		// $data = array(
		// 	'book_name' => $result[],
		// 	'book_author' => '1',
		// 	'type' => '1',
		// 	'wantbook' => '1',
		// 	'book_press' => '1',
		// 	'book_introduction' => '1',
		// 	'sjtime' => '',
		// 	'xjtime' => ''
		// );


		// $flag = TRUE;  //判断对错
		// $err = array(); 
		// if($name == "")
		// {
		// 	$err['name'] = '请输入书名';
		// 	$flag = FALSE;
		// }

		// if($author == "")
		// {
		// 	$err['author'] = '请输入作者';
		// 	$flag = FALSE;
		// }

		// if($wantbook == "")
		// {
		// 	$err['wantbook'] = '请输入你想换的书';
		// 	$flag = FALSE;
		// }

		// if(!move_uploaded_file($tmp_name, $destination))
		// {
		// 	$err['error'] = '上传图片失败';
		// 	$flag = FALSE;
		// }


		// if($flag)
		// {
		// 	$this->load->model('Book_Model');
		//     $result = $this->Book_Model->add_sjbook($name,$author,$type,$wantbook,$img,$press);
		//     $data = $result;
		// 	apiReturn($data , $flag);
		// }
		// else
		// {
		// 	apiReturn($err , $flag);
		// }
	}
	
}