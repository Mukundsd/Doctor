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
import Result from "./components/Result";

// Importing all Forms
import HeartForm from "./components/HeartForm";
import DiabetesForm from "./components/DiabetesForm";
import LiverForm from "./components/LiverForm";
import ParkinsonsForm from "./components/ParkinsonsForm";
import BreastCancerForm from "./components/BreastCancerForm";

const App = () => {
  const [prediction, setPrediction] = useState(""); // For old method, but now we navigate with state

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

        {/* Routes for each Disease Prediction Form */}
        <Route path="/predict-heart-disease" element={<HeartForm />} />
        <Route path="/predict-diabetes" element={<DiabetesForm />} />
        <Route path="/predict-liver" element={<LiverForm />} />
        <Route path="/predict-parkinsons" element={<ParkinsonsForm />} />
        <Route path="/predict-breast-cancer" element={<BreastCancerForm />} />

        {/* Prediction Result Page */}
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
