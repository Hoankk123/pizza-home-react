


import { useState } from "react";

function TestName() {
  const [user, setUser] = useState({
    name : "Hoan",
    age : 21,
  });
  const changeAge = () => {
    setUser({
      ...user,
      age: user.age + 2,
    })
  }
  return (
    
    <div>
          <p>Ten: {user.name}</p>
          <p>Tuoi : {user.age}</p>
          <button onClick={changeAge}>ChangeAge</button>
    </div>
  )
}

export default TestName



// function TestName() {
//   const [name, setName] = useState("");
//   const [value, setValue] = useState("");
//   return (
//     <div>
//       <h1>Nhap du lieu: {value}</h1>

//       <input
//       type = "text"
//       onChange={(e) => setName(e.target.value)} 
//       />

//       <button onClick={ () => setValue(name)}> Show</button>
//     </div>
//   )
// }

// export default TestName

// function Counter() {
//     const [count, setCount] = useState(0);

//   return (
//     <div>
//     <h2>Number {count}</h2>  
//     <button onClick={() => setCount(count + 5)}> Increase</button>
//       <button onClick={() => setCount(count - 2)}> Decrease</button>

//     </div>
//   )
// }

// export default Counter



// function Toggle() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <h3>Hello State</h3>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen? "Open" : "Close"}
//         </button>
//     </div>
//   )
// }

// export default Toggle




