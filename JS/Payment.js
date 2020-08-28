class Payment {
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }

    printPayment(){
        console.log(`Id: ${this.id} with payment method: ${this.type}`);
    }
    
}