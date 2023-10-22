import { createContext, useState } from 'react' 

import AddButton from "./components/add_button";
import Board from "./components/board";
import Navbar from "./components/navbar";
import AddForm from './components/addForm';

import './App.css';

const boardContext = createContext(null);

function App() {
  const [ boardData, setBoardData ] = useState([
    [
      {},
      {},
      {}
    ],
    [
      {},
      {},
      {}
    ],
    [
      {},
      {}
    ]
  ])

  return (
    <div className="background">
      <boardContext.Provider value={boardData}>
          <Navbar></Navbar>
          <Board></Board>
          <AddForm></AddForm>
      </boardContext.Provider>
    </div>
  );
}

export default App;
