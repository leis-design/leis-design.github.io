import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SchedulePage from "./pages/SchedulePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<SchedulePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
