import { Routes,Route  } from "react-router-dom";
import { DetailsOfMentor } from "./components/DetailsMentor";
import { Home } from "./components/Home";
import { Topic } from "./components/Topic";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/posts/:id" element={<DetailsOfMentor />} />
        <Route path="/topic" element={<Topic/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
