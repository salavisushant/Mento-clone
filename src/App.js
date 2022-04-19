import { Routes,Route  } from "react-router-dom";
import { DetailsOfMentor } from "./components/DetailsMentor";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/posts/:id" element={<DetailsOfMentor/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
