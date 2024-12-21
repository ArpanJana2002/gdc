/** @format */

import Header from "./Header";
import Sidebar from "./Sidebar";
import "./css/Header.css";
import "./css/Sidebar.css";
import Data from "./Data";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Sidebar />
        <Data/>
      </div>
    </>
  );
}

export default App;
