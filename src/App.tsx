import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/MasterLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}    
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;