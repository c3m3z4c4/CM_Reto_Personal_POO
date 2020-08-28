<?php 
    require_once 'Car.php';
    require_once 'Account.php';

    $car = new Car("CM982763", new Account("Cesar Octavio","MCCO97862"));

    print_r($car);
    print_r($car->driver);

?>