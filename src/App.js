import logo from './logo.svg';
import './App.css';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
function App() {
  return (
    <div className="App">
      <h1>welcome to my app</h1>
      <p> this ia a simple React app</p>
      <MyButton />
    </div>
  );
}


export default App;
