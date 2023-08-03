class App {

   

    #a;
    #b;
    #c;
    
    constructor(a,b,c)
    {
        this.#a = a;
        this.#b = b;
        this.#c = c;
    }

    

    DisplayNames()
    {
        console.log('value of a is ', this.#a);
        console.log('value of b is ', this.#b);
        console.log('value of b is ', this.#c);
        

    }

    



}

module.exports = {App};