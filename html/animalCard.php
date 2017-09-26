<?php
/**
 * Created by PhpStorm.
 * User: gtanaka
 * Date: 9/25/17
 * Time: 10:30 PM
 */

class AnimalCard
{

    public function __construct($name, $image, $fact, $scientificName, $sizeType, $size, $lifeSpan, $habitat, $details)
    {

    ?>
        <div class="card">
		<h3><?php echo $name ?></h3>
		<img src="<?php echo $image ?>" alt="<?php echo $name ?>">
		<div class="card-info">
			<p class="fact"><?php echo $fact ?></p>
			<ul>
				<li><span>Scientific Name</span>: <?php echo $scientificName ?></li>
				<li><span>Average <?php echo $sizeType ?></span>: <?php echo $size ?></li>
				<li><span>Average Lifespan</span>: <?php echo $lifeSpan ?></li>
				<li><span>Habitat</span>: <?php echo $habitat ?></li>
			</ul>
			<p><?php echo $details ?> </p>
		</div>
	</div>
<?php
    }
}