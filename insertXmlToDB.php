<?php
require_once("connectDB.php");
//drop database 
$collection->drop();
//createDB
$databaseName="bookStore";
$db=$client->$databaseName;
$collection=$db->createCollection("books");
$collection=$client->bookStore->books;


$path=$_GET["path"];
$xmlDoc = new DOMDocument();
$xmlDoc->load($path);

$xmlbooks=$xmlDoc->getElementsByTagName('book');
for($i=0;$i<$xmlbooks->length;$i++){
  if($xmlbooks->item($i)->nodeType==1){
    $authorArray=array();
    $xmlAuthors=$xmlbooks->item($i)->getElementsByTagName('author');
    for($z=0;$z<$xmlAuthors->length;$z++){
      array_push($authorArray , ($xmlAuthors->item($z)->childNodes->item(0)->nodeValue));
    }
    $xmlTitle=($xmlbooks->item($i)->getElementsByTagName('title')->item(0)->childNodes->item(0)->nodeValue);
    $xmlPrice=($xmlbooks->item($i)->getElementsByTagName('price')->item(0)->childNodes->item(0)->nodeValue);
    $xmlYear=($xmlbooks->item($i)->getElementsByTagName('year')->item(0)->childNodes->item(0)->nodeValue);
    $xmlCategory=($xmlbooks->item($i)->getAttribute('category'));
    $xmlAuthorsString="";
    /*foreach($xmlAuthors as $author){
      //$xmlAuthorsString += $author."br";
      echo "$xmlTitle";
    }*/
    // echo("<tr>
    //     <td>".$xmlTitle."</td>".
    //     //"<td>".implode("<br>",$authorArray)."</td>".
    //     "<td>".implode("<br>",$authorArray)."</td>".
    //     "<td>".$xmlYear."</td>".
    //     "<td>".$xmlPrice."</td>".
    //     "</tr>");
    $insertOneRecord=$collection->insertOne([
        'title'=>$xmlTitle,
        'category'=>$xmlCategory,
        'author'=>$authorArray,
        'year'=>$xmlYear,
        'price'=>$xmlPrice,
      ]);
      //printf("Inserted %d document(s)\n", $insertOneRecord->getInsertedCount());
      //echo $insertOneRecord->getInsertedId();
  }
}
?>