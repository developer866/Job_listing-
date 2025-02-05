import "./App.css";
import Card from "./component/card";
import Data from "./data";  // Ensure correct path

function App() {
  return (
    <div className="App">
      {Data.map((item, index) => (
        <div key={index} className={`box box-${index + 1}`}>
          <Card data={item} /> {/* Pass a single object */}
        </div>
      ))}
    </div>
  );
}

export default App;
