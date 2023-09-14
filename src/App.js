import React from "react";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./Pages/AboutPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AiVideoSolution from "./Pages/ProductsPages/AiVideoSolution";
import CloudManagement from "./Pages/ProductsPages/CloudManagement";
import CustomSolutions from "./Pages/ProductsPages/CustomSolutions";
import FaceRecognition from "./Pages/ProductsPages/FaceRecognition";
import RedLightVoilation from "./Pages/ProductsPages/RedLightVoilation";
import TrafficEnforcement from "./Pages/ProductsPages/TrafficEnforcement";
import TrafficManagement from "./Pages/ProductsPages/TrafficManagement";


function App() {
  return (
      <div className="App">
        <Navbar />

        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<AboutPage />} />
          <Route exact path="/services" element={<ServicesPage />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/aisolution" element={<AiVideoSolution />} />
          <Route exact path="/trafficenforcement" element={<TrafficEnforcement />} />
          <Route exact path="/trafficmanagement" element={<TrafficManagement />} />
          <Route exact path="/redlightvoilation" element={<RedLightVoilation />} />
          <Route exact path="/facerecognition" element={<FaceRecognition />} />
          <Route exact path="/cloudmanagement" element={<CloudManagement />} />
          <Route exact path="/customsolution" element={<CustomSolutions />} />

        </Routes>

        <Footer />
      </div>
    
  );
}

export default App;
