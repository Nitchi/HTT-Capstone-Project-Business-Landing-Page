import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-yellow-50 mx-auto  w-full">
        <NavBar />

        <main>
          <div className="w-full px-5">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
