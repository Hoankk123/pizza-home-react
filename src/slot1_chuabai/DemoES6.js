import React from 'react';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    introduce() {
        return `Hello, my name is ${this.name}, ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, scores = []) {
        super(name, age);
        this.scores = scores;
    }

    calculateAverage() {
        if (this.scores.length === 0) return 0;
        const total = this.scores.reduce((sum, score) => sum + score, 0);
        return total / this.scores.length;
    }
}

const createScores = (...scores) => {
    return scores;
};


function DemoES6() {
    const initialScores = createScores(8, 7.5, 9);
    const student1 = new Student("Do Sy Hoan", 21, initialScores);

    // Destructuring
    const { name, age } = student1;
    console.log(`Name: ${name}, Age: ${age}`);

    // Spread Operator
    const newScoresToAdd = [10, 8.5];
    const newScores = [...student1.scores, ...newScoresToAdd];
    student1.scores = newScores;
    console.log(`New scores: ${newScores.join(", ")}`);

    // array methods: passed >=8
    // filter method
    const passedScores = student1.scores.filter((score) => score >= 8);
    console.log(`Passed scores: ${passedScores.join(", ")}`);

    // map() add 0.5 to each score
    const updatedScores = student1.scores.map((score) => score + 0.5);
    console.log(`Updated scores: ${updatedScores.join(", ")}`);

    // promise: average score > 8 - Excellent Student
    function evaluateStudent(av) {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (av >= 8) {
                    resolve("Excellent Student");
                } else {
                    resolve("Need Improvement");
                }
            }, 1500);
        });
    }

    
    const averageScore = student1.calculateAverage();
    evaluateStudent(averageScore).then(result => {
        console.log(`Evaluation: ${result}`);
    });

    return (
        <div>
            <h2>DEMO ES6</h2>
        </div>
    );
}

export default DemoES6;