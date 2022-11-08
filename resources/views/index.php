<!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">   
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content=<?php $token = csrf_token(); echo $token; ?>>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
 
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="/../js/script.js" type="module"></script>
<link rel="stylesheet" href="/../css/stylePublic.css">
    <title>Public Molnár Szabrina</title>
</head>
<body>
  <header class="w3-panel w3-center w3-opacity" style="padding:128px 16px">
    <h1 class="w3-xlarge">Könyv Áruház</h1>
    
    <nav>
      <ul class="w3-bar">
        <li id="public"><a href="#" class="w3-bar-item w3-button">Könyvek</a></li>
        <li id="admin"><a href="#" class="w3-bar-item w3-button">Admin</a></li>
        <li class="kosarButton"><a href="#" class="w3-bar-item w3-button">Kosár</a></li>
      </ul>
    </nav>
  </header>
  <main>
      <div class="konyvekPublicLista"></div>
      <div class="konyvekAdminLista"></div>
      <div class="kosaram"></div>
  </main>
</body>
</html>