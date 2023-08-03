let m = 10;
class Employee {


    #name;
    #city;
    #salary;

    x = 20;
    static y = 30;

    constructor(name, city, salary)
    {
        this.#name = name;
        this.#city = city;
        this.#salary = salary;
    }

    getName(){
        return this.#name;
    }

    setName(name){
        this.#name = name;
    }

    setCity(city){
        this.#city = city;
    }

    getCity(){
        return this.#city;
    }

    setSalary(sal){
        this.#salary = sal;
    }

    getSalary(){
        return this.#salary;
    }

    displayData(){
        let m = 20;
        console.log(m)
    }
    static Method2(){
        console.log(Employee.y)
        console.log(this.y);
        
    }

}

module.exports = {Employee};