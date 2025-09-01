import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrototypeE from "./PrototypeE";
import "./PrototypeE.css"; // make sure CSS is imported

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
                <PrototypeE />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
