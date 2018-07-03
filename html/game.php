<?php
include('demo-navbar.php');
?>

<!DOCTYPE html>
<html>
<head>
	<title>Guessing Game</title>
	<script type="text/javascript" src="game.js"></script>
</head>
<body>

<div class="container">
	<h1>Guessing Game!</h1>
	<h2>Rules</h2>
	<p>Try to guess the secret number in as few attempts as possible!</p>
	<p>To give up at any time, simply type "uncle" as your guess.</p>

	<ul>
		<li><b>Easy Mode</b></li>
			<ul>
				<li>Guess a number between 1 and 10</li>
				<li>Unlimited Attempts!</li>
			</ul>
		<li><b>Medium Mode</b></li>
			<ul>
				<li>Guess a number between 1 and 100</li>
				<li>Unlimited Attempts!</li>
			</ul>
		<li><b>Hard Mode</b></li>
			<ul>
				<li>Guess a number between 1 and 10,000</li>
				<li>25 Attempt limit!</li>
			</ul>
		<li><b>Insane Mode</b></li>
			<ul>
				<li>Guess a number betwee 1 and 100 trillion!</li>
				<li>50 Attempt limit!</li>
				<li>Hints disabled!</li>
			</ul>
	</ul>

	<button onclick="game()">Start Game!</button>
</div>

</body>
</html>
