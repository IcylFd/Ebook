<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Book_model extends CI_Model{
	
	

	public function add_exbook($bookName,$bookAuthor,$bookClass,$bookSummary,$bookIsbn,$bookImage,$bookImageName)
	{
		$sql = "
		    INSERT INTO book (book_id,name,author,type,summary,isbn,image_destination,image_name) VALUES (NULL,'".$bookName."','".$bookAuthor."','".$bookClass."','".$bookSummary."','".$bookIsbn."','".$bookImage."','".$bookImageName."') 
		";
		$result = $this->db->query($sql);
		return $result;

		// if($result === FALSE)
		// {
		// 	$result = "上架失败";
		// 	return $result;
		// }
		// else
		// {
		// 	$sql = "
		//         SELECT * FROM book WHERE isbn='".$bookIsbn."'
		//     ";
		//     $result = $this->db->query($sql);
		//     $result = $result->result_array();

		//     return $result;
		// }

		
	}

	public function get_exbook($bookIsbn)
	{
		$sql = "
	        SELECT name,author,summary FROM book WHERE isbn='".$bookIsbn."'
	    ";
	    $result = $this->db->query($sql);
	    $result = $result->result_array();

	    return $result;
	}


	

}