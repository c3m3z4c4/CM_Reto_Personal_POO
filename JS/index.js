  
var car = new Car("AW456", new Account("Stephen Sauza", "QWE234"))
car.passenger = 4;
car.printDataCar();

var uberX = new UberX("WIP234", new Account("Terance Felps", "QWE3462"), "Chevrolet", "Acadia")
uberX.passenger = 7;
uberX.printDataCar();

var payment = new Payment("p1", "Metodos de pago");
payment.printPayment();

var cash = new Cash("p1", "Efectivo");
cash.printPayment();

var paypal = new Paypal("p1", "Paypal", "tucuenta@hotmail.com");
paypal.printPayment();

var card = new Card("p1", "TDC", "4152xxxxxxxxxxxx", "356", "11/24");
cash.printPayment();


