 
/*const express =require("express");
//Add data to mongoose
//reate data schema
const booksSchema ={
  title:String,
  category:String,
  year:String,
  price:Number
}
const Book= mongoose.model("Book",booksSchema);
let newBook=new Book({
  title:"A",
  category:"dpm",
  year:"2022-08-15",
  price:1000
});
try {
  newBook.save();
} catch (error) {
  console.log(error);
}*/


//form controls
  const fields=document.querySelector('.fields');
  const add_Author=document.querySelector('#add_Author');
  const btn_submit=document.querySelector('#btn-submit');
  const fieldTitle=document.getElementById('title');
  const fieldCategory=document.getElementById('category');
  const fieldYear=document.getElementById('year');
  const fieldaPrice=document.getElementById('price');
  const fieldAuthor=document.getElementById('author_01');
  
  loadEventListeners();
  
  function loadEventListeners(){
    document.addEventListener('DOMContentLoaded',readXML);
    add_Author.addEventListener('click',addAuthorfield);
    btn_submit.addEventListener('click',validateSubmit);
  }
  
  //lOAD XML DOCUMENT
var xmlDoc;
function readXML(){
var xhttp;
var xml="xml/new.xml";
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      //addToDB(this);
      loadTable(this);
    }
};
xhttp.open("GET", "insertXmlToDB.php?path="+xml, true);
xhttp.send();
}
//Add xml to DB
function addToDB(xml) {
  var x, i,y; 
  xmlDoc = xml.responseXML;
  x = xmlDoc.getElementsByTagName("book");

  for (i = 0; i < x.length; i++) { 
    y=x[i].getElementsByTagName('author');
    var z;
    const authorArr=[];
    for(z=0;z<y.length;z++){
      authorArr.push(y[z].childNodes[0].nodeValue);
      
    }
    var title=x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var category=x[i].getAttribute("category");
    var price=x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue;
    var year=x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue;
   
    //echo $title;
    
    /*$book=[
      'title'=> ""
    ];*/
    // $insertOneRecord=$collection->insertOne([
    //     'title'=>'XQuery Kick Start',
    //     'category'=>'web',
    //     'author'=>'James McGovern',
    //     'year'=>2005,
    //     'price'=>49.99,
    
    //   ]);
  
         
  }
}
//DISPLAY XML FILE ON TABLE
function loadTable(xml) {
    document.querySelector('tbody').innerHTML=xml.responseText;      
  
}
  
  //FORM FUNCTIONS
  //add new auhtor input fields
  
  function addAuthorfield(){
    var x=(fields.childElementCount-1).toString();
    var id="author_"+x;
    const input=document.createElement("div");
    input.className='row';
    input.innerHTML='<div class="input-field col s12">       <input id="'+id+'" type="text" class="validate" required>     <label for="'+id+'">Author</label>    </div>'
    fields.appendChild(input);
  }
  
  //add new book to the table
  function validateSubmit(e){
    var fieldelements=document.querySelectorAll('.validate');
    var errors=0;
    for(i=fieldelements.length-1;i>=0;i--){
      if(!fieldelements[i].reportValidity()){
        errors++;
      }
    }
    if(errors==0){
      submitForm();
    }
    e.preventDefault();  
  }
  
  function submitForm(){
    
  
    alert("form submited")
  }