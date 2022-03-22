<?php
require 'users.php';
$user = new User();
$user->afficherTableau();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript</title>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" type="text/css" href="/runtrack3/jour04/job04/style.css " />
</head>

<body>
    <button type="submit" id="button">Update</button>
    <div id="list"></div>
</body>

</html>