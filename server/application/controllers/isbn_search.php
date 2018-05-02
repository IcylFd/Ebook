<?php
 
require_once 'curl.func.php';
 
$appkey = 'your_appkey_here';//你的appkey
$isbn = '9787212058937';
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