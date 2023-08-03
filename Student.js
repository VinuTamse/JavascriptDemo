const { Employee } = require("./Employee");

class Student extends Employee {

    #studentname;

    constructor(name, city, salary, studentname){
        super(name, city, salary);
        this.#studentname = studentname;

    }

    getStudentName(){
        return this.#studentname;
    }

    setStudentName(studentname){
        this.#studentname = studentname;
    }

    DisplayData(){

        console.log(this.getName());
        console.log(this.getCity());
        console.log(this.getSalary());
        console.log(this.getStudentName());

    }

}

module.exports = {Student};