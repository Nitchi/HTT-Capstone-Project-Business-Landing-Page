import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import ReviewGrid from "./components/ReviewGrid";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-amber-100 mx-auto  w-full">
        <NavBar />

        <main>
          <div className="w-full px-5">
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>

          </div>

          <ReviewGrid />
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
