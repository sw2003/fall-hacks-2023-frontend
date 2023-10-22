import { createContext, useState } from 'react' 

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
    <>
      <boardContext.Provider value={[boardData, createWindow, setCreateWindow]}>
        <AddForm></AddForm>
        <Navbar></Navbar>
        <Board></Board>
      </boardContext.Provider>
    </>
  );
}

export default App;
