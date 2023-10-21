import { createContext, useState } from 'react' 

import AddButton from "./components/add_button";
import Board from "./components/board";
import Navbar from "./components/navbar";

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
      <boardContext.Provider>
        <AddButton></AddButton>
        <Board></Board>
        <Navbar></Navbar>
      </boardContext.Provider>
    </>
  );
}

export default App;
