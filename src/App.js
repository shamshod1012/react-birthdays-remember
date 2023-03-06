import List from "./component/List";
import { data } from "./data";
import "./App.css";
import { useState } from "react";

function App() {
  let [people, setPeople] = useState(data);
  return (
    <div className="App">
      <List data={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
