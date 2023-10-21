import { createContext, useState } from 'react' 

import AddButton from "./components/add_button";
import Board from "./components/board";
import Navbar from "./components/navbar";
import AddForm from './components/addForm';

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
    <>
      <boardContext.Provider value={boardData}>
        <AddButton></AddButton>
        <Board></Board>
        <Navbar></Navbar>
        <AddForm></AddForm>
      </boardContext.Provider>
    </>
  );
}

export default App;
