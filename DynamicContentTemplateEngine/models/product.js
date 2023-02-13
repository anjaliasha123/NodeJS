const products = [];
module.exports = class Product {
    constructor(title){
        this.title = title;
    }
    save(){
        products.push(this)
    }
    //static keywork helps to call the function without the need for the instance of the class
    static fetchAll(){
        return products;
    }
}