import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import Appointment from "./pages/Appointment";
import MyAppointment from "./pages/MyAppointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Disease from "./components/Disease";
import Form from './components/Form';  
import Result from './components/Result';  

const App = () => {
  const [prediction, setPrediction] = useState("");  // State for prediction result

  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/disease" element={<Disease />} />

        {/* Heart Disease Prediction Form */}
        <Route
          path="/predict-heart-disease"
          element={<Form setPrediction={setPrediction} />}
        />

        {/* Prediction Result Page */}
        <Route
          path="/prediction-result"
          element={<Result predictionText={prediction} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
