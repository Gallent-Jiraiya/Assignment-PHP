<?php
require_once("connectDB.php");
if(isset($_POST['category'])){
  $category=$_POST['category'];
}if(isset($_POST['title'])){
  $title=$_POST['title'];
}if(isset($_POST['author'])){
  $author=$_POST['author'];
  $authors = $_POST['color'];
  $authors = explode(",",$author);
}if(isset($_POST['year'])){
  $year= $_POST['year'];
}if(isset($_POST['price'])){
  $price= $_POST['price'];
}
$insertOneResult = $collection->insertOne([
  'title'=>$title,
  'category'=>$category,
  'author'=>$authors,
  'year'=>$year,
  'price'=>$price,
]);
?>