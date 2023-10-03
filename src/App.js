
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Routes } from "react-router-dom"; // Import Link

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/property/:property" element={<Cards />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
