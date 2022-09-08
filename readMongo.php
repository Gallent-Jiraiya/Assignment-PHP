<?php
require_once("connectDB.php");

$title=$_GET["title"];

if($title==""){
  $cursor = $collection->find();
}
else{
  $cursor = $collection->find($title);
}
$cursor = $collection->find();
foreach ($cursor as $book) {
  $authorArray=array();
  foreach( $book['author'] as $author){
    array_push($authorArray ,$author);
  } 
  echo ("<tr>
        <td>".$book['title']."</td>".
        "<td>".$book['category']."</td>".
        "<td>".implode("<br>",$authorArray)."</td>".
        "<td>".$book['year']."</td>".
        "<td>".$book['price']."</td>".
        "</tr>");
}
    
?>