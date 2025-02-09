import "./App.css";
import Card from "./component/card";
import Data from "./data.json"

function App() {
  return <div className="App">
    <Card Data = {Data}/>
  </div>;
}

export default App;
