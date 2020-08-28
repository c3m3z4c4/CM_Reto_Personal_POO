<?php 
    require_once("Car.php");
    require_once("UberX.php");
    require_once("UberPool.php");
    require_once("Account.php");
    require_once("payment.php");
    require_once("cash.php");
    require_once("paypal.php");
    require_once("card.php");

    $uberX = new UberX("CM982763", new Account("Cesar Octavio", "MCCO97862"), "Chevrolet", "Spark");
    $uberX->printDataCar();

    $uberPool = new UberPool("CM982763", new Account("JEsus Rdz", "MCCO2"), "Dodge", "Durango");
    $uberPool->printDataCar();
   
   
    $payment = new Payment("Pay ID");
    $payment->printDataPayment();

    $cash = new Cash("Cash");
    $cash->printDataPayment();




?>