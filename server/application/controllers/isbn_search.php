<?php
defined('BASEPATH') OR exit('No direct script access allowed');
//error_reporting(0);

require_once 'Curlfunc.php';

class Isbn_search extends CI_Controller {

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
    
     


     
 
 public function get_isbn()
 {
   $appkey = '53d812ec8fd6184c';//你的appkey
//$isbn = '9787212058937';
$isbn = $_POST['isbn'];
$url = "http://api.jisuapi.com/isbn/query?appkey=$appkey&isbn=$isbn";
$result = curlOpen($url);
$jsonarr = json_decode($result, true);
 
//var_dump($jsonarr);
if($jsonarr['status'] != 0)
{
    echo $jsonarr['msg'];
    exit();
}
$result = $jsonarr['result'];
echo $result['title'].' '.$result['subtitle'].' '.$result['pic'].' '.$result['author'].' '.$result['summary'].'<br>';
echo $result['publisher'].' '.$result['pubplace'].' '.$result['pubdate'].' '.$result['page'].' '.$result['price'].'<br>';
echo $result['binding'].' '.$result['isbn'].' '.$result['isbn10'].' '.$result['keyword'].' '.$result['edition'].'<br>';
echo $result['impression'].' '.$result['language'].' '.$result['format'].' '.$result['class'];
 }
    




}


 
