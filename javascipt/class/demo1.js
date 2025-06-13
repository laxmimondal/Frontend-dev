class Human {
    //properties
    age = 13;//public
    #wt = 80; //private--using "#"
    ht = 180;//public

    //functionality
    walking() {
        console.log("i am walking", this.#wt);  // using-- "this.  "-- for accssing private properties

    }
    running() {
        console.log("i can run");
    }
    get fetchwt() {
        return this.#wt;
    }

    //constructor
    constructor(newage, newht, newwt) {
        this.age = newage;
        this.ht = newht;
        this.#wt = newwt;
    }
}
let obj = new Human(80, 170, 45);
console.log(obj.fetchwt);
obj.walking();