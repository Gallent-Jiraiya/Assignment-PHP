<?php
 require_once __DIR__.'/vendor/autoload.php';
use MongoDB\Driver\Manager;
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
if(extension_loaded("mongodb")){
  try{
    //create Client
    $client=new MongoDB\Client('mongodb+srv://'.$_ENV['MDB_USER'].':'.$_ENV['MDB_PASS'].'@'.$_ENV['ATLAS_CLUSTER_SRV'].'/');
    //$client=new MongoDB\Driver\Manager("mongodb://localhost:27017");
    //echo "Connection to database success";
    $collection=$client->bookStore->books;
    //drop database function
    function dropDB($collection){
      $collection->drop();
     // echo "db deleted";
    }
    dropDB($collection);
    //createDB
    $databaseName="bookStore";
    $db=$client->$databaseName;
    $collection=$db->createCollection("books");
    $collection=$client->bookStore->books;
    //echo "bookstore created";
    

    
    //Read MongoDb function
    function readAll($collection){
      $cursor = $collection->find();
      foreach ($cursor as $restaurant) {
        echo $restaurant['_id'] ."\r\n";
        echo $restaurant['title'] .'\n';
          foreach( $restaurant['author'] as $author){
            echo $author;
          }
    }; 
    }
    //readAll($collection);
    

    /*$insertOneRecord=$collection->insertOne([
      //[
        'title'=>'XQuery Kick Start',
        'category'=>'web',
        'author'=>'James McGovern',
        'year'=>2005,
        'price'=>49.99,
    //]
      // ],
      // [
      //   'title'=>'Learning XML',
      //   'category'=>'web',
      //   'author'=>'James McGovern',
      //   'year'=>2003,
      //   'price'=>39.99,

      // ]
      ]);
      //printf("Inserted %d document(s)\n", $insertOneRecord->getInsertedCount());*/
      
    //$deleteResult = $collection->deleteMany();

    //printf("Deleted %d document(s)\n", $deleteResult->getDeletedCount());      
    //insertManyResult=$collection->insertMany([])

  
  }
  catch(Exception $e){
    echo $e;
  }
}
else{
  echo "Connection to database not success";
}
?>