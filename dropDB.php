<?php
require_once("connectDB.php");
//drop database 
$deleteResult=$collection->deleteMany([]);
echo $deleteResult->getDeletedCount();
?>