import AddButton from "./components/add_button";
import Board from "./components/board";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <boardContext.Provider>
        <Navbar></Navbar>
        <AddButton></AddButton>
        <Board></Board>
      </boardContext.Provider>
    </>
  );
}

export default App;
