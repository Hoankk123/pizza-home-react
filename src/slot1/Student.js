import Person from "./Person";

class Student extends Person{
    constructor(name, age, scores =[]){
        super(name, age);
        this.scores = scores;
    }

    calculateAverage(){
        if(this.scores.length === 0) return 0;
        const total = this.scores.reduce((sum, score) => sum + score, 0);
        return total / this.scores.length;
    }

    displayFullInfo(){
        return `${this.introduce()} Average score: ${this.calculateAverage().toFixed(2)}`;
    }
}

export default Student;