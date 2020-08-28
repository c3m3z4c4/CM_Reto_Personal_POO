class Paypal extends Payment {
    constructor(id, type, email){
        super(id, type)
        this.email = email;
    }
}