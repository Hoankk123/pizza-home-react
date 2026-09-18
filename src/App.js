import logo from "./logo.svg";
import "./App.css";
import TypesExample from "./slot3/DomoReact-bootstrap";
import Hello from "./slot3/DemoPros";
import Counter from "./slot3/DemoClass";
import TestName from "./slot3/DemoState";
import img1  from "./image/u1.png";
import img2  from "./image/u2.png";
import img3  from "./image/u3.jpg";
import { Col, Container, Row } from "react-bootstrap";
import StudentCard from "./slot4/StudentCard";

function MyButton() {
  return <button>I'm a button</button>;
}
function App() {
  const student = [
    {
      id: 1,
      name: "Loan",
      age: 21,
      image:img1,
    },
    {
      id: 2,
      name: "Hoan Sy",
      age: 31,
      image: img2,
    },
    {
      id: 3,
      name: "mai",
      age: 41,
      image:img3
    },
  ];
  return (
    <>
    <h3>Danh sach sinh vien</h3>
    <Container>
      <Row>
        {student.map((student) => (
        <Col md={4} key={student.id}>
          <p>
            <StudentCard student={student}/>
          </p>
        </Col>
      ))}
      </Row>
    </Container>
      

      {/* <TestName /> */}
      {/* <Counter/> */}
      {/* <Hello name="Loan" age={20}/>
      <TypesExample />
      <MyButton /> */}
    </>
  );
}

export default App;
