import React from 'react';
import './App.css';
import Board from './components/Board';
import useHelloStore from './store/data';


function App() {
  const {world, addWorld} = useHelloStore();
  console.log("HI");
  return (
    <div className="App">
      <label htmlFor="board-size">Board-size</label>
      <input name="board-size" id="board-size"/>
      <button>START</button>
      <Board size={3}/>
    </div>
  )
}

export default App
