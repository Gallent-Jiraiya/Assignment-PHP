 
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
  document.addEventListener('DOMContentLoaded',addXmlToMongo);
  document.addEventListener('DOMContentLoaded',readMongo(""));
  add_Author.addEventListener('click',addAuthorfield);
  btn_submit.addEventListener('click',validateSubmit);
  }
  
  //lOAD XML DOCUMENT

function addXmlToMongo(){
var xhttp;
var xml="xml/new.xml";
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("Database Updated with XML File")
    }
};
xhttp.open("GET", "insertXmlToDB.php?path="+xml, true);
xhttp.send();
}

//DISPLAY XML FILE ON TABLE
function readMongo(title) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.querySelector('tbody').innerHTML=this.responseText;
      }
  };
  xhttp.open("GET", "readMongo.php?title="+title, true);
  xhttp.send();
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