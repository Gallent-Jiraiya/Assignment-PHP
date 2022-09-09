//form controls
  const formFields=document.querySelector('.fields');
  const authors=document.querySelector('.author');
  const add_Author=document.querySelector('#add_Author');
  const btn_submit=document.querySelector('#btn-submit');
  const fieldTitle=document.getElementById('title');
  const fieldCategory=document.getElementById('category');
  const fieldYear=document.getElementById('year');
  const fieldaPrice=document.getElementById('price');
  //const fieldAuthor=document.getElementById('author_01');
  const btn_dropDB=document.getElementById('dropDB');
  const btn_refreshDB=document.getElementById('refreshDB');
  const btn_uploadToDB=document.getElementById('addXML');

loadEventListeners();
function loadEventListeners(){
  //document.addEventListener('DOMContentLoaded',addXmlToMongo);
  document.addEventListener('DOMContentLoaded',readMongo(""));
  add_Author.addEventListener('click',addAuthorfield);
  btn_submit.addEventListener('click',validateSubmit);
  btn_dropDB.addEventListener('click',dropDB);
  //btn_refreshDB.addEventListener('click',readMongo(""));
  btn_uploadToDB.addEventListener('click',addXmlToMongo);
}

//drop available DB
function dropDB() {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert(this.responseText);
        readMongo("");
      }
  };
  xhttp.open("GET", "dropDB.php", true);
  xhttp.send();
}
  //lOAD XML DOCUMENT

function addXmlToMongo(){
var xhttp;
var xml="xml/new.xml";
xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      alert("Database Updated with XML File")
      readMongo('');
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
//add SIngle entry to DB
function addEntry(entryArr) {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        alert('new entry has made')
      }
  };
  xhttp.open("GET", "addEntry.php?entry="+entryArr, true);
  xhttp.send();
}
  
  //FORM FUNCTIONS
  //add new auhtor input fields
  
  function addAuthorfield(){
    var x=(formFields.childElementCount-1).toString();
    var id="author_"+x;
    const input=document.createElement("div");
    input.className='row';
    input.innerHTML='<div class="input-field col s12">       <input id="'+id+'" type="text" class="validate author" required>     <label for="'+id+'">Author</label>    </div>'
    formFields.appendChild(input);
  }
  
  //add new book to the table
  function validateSubmit(e){
    e.preventDefault(); 
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
    
  }
  function submitForm(){
    var authors=document.querySelectorAll('.author');
    var authorArr=[];
    authors.forEach(element => {
      authorArr.push(element.value);
    });
    var title=fieldTitle.value;
    var category=fieldCategory.value;
    var year=fieldYear.value;
    var price=fieldaPrice.value;
    const book={
      title: title,
      category:category,
      author:authorArr,
      year:year,
      price:price
    }
    console.log(authorArr,title,category,year,price);
    addEntry(book);
  }