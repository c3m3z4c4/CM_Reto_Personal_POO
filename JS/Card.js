class Card extends Payment {
    constructor(id, type, number, cvv, date){
        super(id, type)
        this.number = number;
        this.cvv = cvv;
        this.date = date;
    }
}