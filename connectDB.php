<?php
 require_once __DIR__.'/vendor/autoload.php';
use MongoDB\Driver\Manager;
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();
if(extension_loaded("mongodb")){
  try{
    //create Client
    $client=new MongoDB\Client('mongodb+srv://'.$_ENV['MDB_USER'].':'.$_ENV['MDB_PASS'].'@'.$_ENV['ATLAS_CLUSTER_SRV'].'/');
    
    $collection=$client->bookStore->books;
  }
  catch(Exception $e){
    echo $e;
  }
}
else{
  echo "Connection to database not success";
}
?>