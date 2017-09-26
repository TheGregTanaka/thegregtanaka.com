<?php
include('demo-navbar.php');

?>

<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Udacity</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="site.css">
</head>
<body>
	
	<div class="container">
		<h1>Projects from the Udacity Front-End Course</h1>

		<div>
			<?php
			use('animalCard.php');
			$elephant = new AnimalCard("African Elephant", "https://www.naturalworldsafaris.com/~/media/images/wildlife/african-elephant/nws-st-african-elephant.ashxg", "The gestation period of the elephant is 22 months.", "Loxodonta africana", "Weight", 3000, 70, "Savannah", "African elephants are the largest land animals on Earth. They are slightly larger than their Asian cousins and can be identified by their larger ears that look somewhat like the continent of Africa.");
			?>
		</div>
	</div>
</body>