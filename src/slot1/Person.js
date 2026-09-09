class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        return `Hello, my name is ${this.name},${this.age} tuoi.`;
    }
}
export default Person;