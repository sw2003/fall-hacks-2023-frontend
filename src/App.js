import { createContext, useState } from 'react' 

import './App.css';

import AddButton from "./components/add_button";
import Board from "./components/board";
import Navbar from "./components/navbar";
import AddForm from './components/addForm';

export const boardContext = createContext(null);


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

  const [createWindow, setCreateWindow] = useState(false); 

  return (
    <div className="background">
      <boardContext.Provider value={[boardData, createWindow, setCreateWindow]}>
        <AddForm></AddForm>
        <Navbar></Navbar>
        <Board></Board>
      </boardContext.Provider>
    </div>
  );
}

export default App;
