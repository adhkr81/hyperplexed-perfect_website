import Navbar from "./components/organisms/navbar/Navbar"
import Main from "./components/organisms/main/Main"
import "./styles/global.css"

function App() {
  return (
    <div className="App">
      <div className="container">
      <Navbar/>
      <Main />
      </div>
    </div>
  );
}

export default App;
