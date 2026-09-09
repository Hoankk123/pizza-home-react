import React, {useState, useEffect} from 'react';
import Student from './Student';
import {createScores, evaluatePerformance} from './utils'

function ExES6(){
  const initialScores = createScores(8, 7.5, 9);
  const student1 = new Student("Do Sy Hoan", 21, initialScores);
  const {name, age } = student1;
  
  const newScoresToAdd = [10, 8.5];
  const mergedScores = [...student1.scores, ...newScoresToAdd];
  student1.scores = mergedScores;

  const passingScores = student1.scores.filter(score => score >= 8);
  const bonusScores = student1.scores.map(score => score + 1);
  const averageScore = student1.calculateAverage();

  const [evaluation, setEvaluation] = useState("");

  useEffect(() => {
    evaluatePerformance(averageScore).then(result => {
      setEvaluation(result)
    });
  }, [averageScore]);

  return (
        <div>
            <h2>Assignment (Modularization)</h2>
            <hr />

            <div>
                <h3>1 & 2. Class & Extend</h3>
                <p><strong>Information:</strong> {student1.displayFullInfo()}</p>
            </div>

            <div>
                <h3>3. Rest Parameter</h3>
                <p><strong>Initial scores:</strong> {initialScores.join(', ')}</p>
            </div>

            <div>
                <h3>4. Destructuring</h3>
                <p><strong>Extracted data:</strong> Name is {name}, Age is {age}</p>
            </div>

            <div>
                <h3>5. Spread Operator</h3>
                <p><strong>Merged scores:</strong> {mergedScores.join(', ')}</p>
            </div>

            <div>
                <h3>6. Array Methods</h3>
                <ul>
                    <li><strong>[filter]</strong> Passing scores (≥ 8): {passingScores.join(', ')}</li>
                    <li><strong>[map]</strong> Bonus scores: {bonusScores.join(', ')}</li>
                    <li><strong>[reduce]</strong> Average score: {averageScore.toFixed(2)}</li>
                </ul>
            </div>

            <div>
                <h3>7. Promise (Asynchronous)</h3>
                <p>
                    <strong>Evaluation result: </strong> 
                    <span>
                        {evaluation}
                    </span>
                </p>
            </div>
        </div>
    );
}
export default ExES6;
