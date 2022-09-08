<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>XML application</title>
  <!--Import Google Icon Font-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
     
   <!-- Compiled and minified CSS -->
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

   <!-- Compiled and minified JavaScript -->
   <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>

   
</head>
<body>
  <div class="container">
    <h1 class="center">XML Book-Store</h1>
    <div class="divider"></div>
    <div class="section">
      <h5>Add new Book</h5>
      <div class="row">
        <form class="col s12">
          <div class="fields">
          <div class="row">
            <div class="input-field col s6">
              <input id="title" type="text" class="validate" required>
              <label for="title">Book Title</label>
            </div>
            <div class="input-field col s6">
              <input id="category" type="text" class="validate" required>
              <label for="category">Category</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="year" type="date" class="validate" required>
              <label for="year">Year</label>
            </div>
            <div class="input-field col s6">
              <input id="price" type="number" step="0.01" required class="validate">
              <label for="price">Price</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field col s12">
              <input id="author_01" type="text" class="validate" required>
              <label for="author_01">Author</label>
            </div>
          </div>
        </div >
        <div class="row">
          <a id="add_Author" class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">add</i></a>
        </div>
        <button id="btn-submit"  class="btn waves-effect waves-light" type="submit" name="submit">Submit
          <i class="material-icons right">send</i>
        </button>
        </form>
        
      </div>
    </div>
    <div class="divider"></div>
    <div class="section">
      <h4> Book catalogue</h4>
      <div id="table">
        <table class='highlight responsive-table'>
          <thead>
            <tr>
              <th>Title</th><th>Category</th><th>Author</th><th>Year</th><th>price</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>

  </div>
  <script>
     
     
  </script>
  <script src="js/document.js"></script>
</body>
</html>