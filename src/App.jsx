import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/services";
import Testimonial from "./components/testimonial";
import Footer from "./components/footer";
import Login from "./components/login";
import AboutUS from "./components/aboutUs";
import Signup from "./components/signup";
import GetStarted from "./components/vaccinationPage";
import ContactUs from "./components/contactUs";
import DoctorDashboard from "./components/DoctorDashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import ChildPage from "./components/ChildPage";
import VaccineEducation from "./components/VaccineEducation";
import ImmunizationTracking from "./components/ImmunizationTrackingPage";
import AffordableImmunization from "./components/Affordable";
import MissionIndradhanush from "./components/schemes/MissionIndradhanush";
import UniversalImmunization from "./components/schemes/UniversalImmunization";
import PMJAYScheme from "./components/schemes/PMJAYScheme";
import useLenis from "./components/useLenis";// Custom hook for smooth scrolling

const App = () => {

  const [user, loading] = useAuthState(auth);
  console.log(user)

  useLenis(); // Initialize Lenis for smooth scrolling

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/child/:id" element={<ChildPage />} />
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <Testimonial />
              </>
            }
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/vaccination" element={<GetStarted />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/vaccine-education" element={<VaccineEducation />} />
          <Route path="/Immunization-Tracking-Page" element={<ImmunizationTracking />} />
          <Route path="/affordable" element={<AffordableImmunization />} />
          <Route path="/schemes/mission-indradhanush" element={<MissionIndradhanush />} />
          <Route path="/schemes/universal-immunization" element={<UniversalImmunization />} />
          <Route path="/schemes/pmjay" element={<PMJAYScheme />} />

          <Route
            path="/login"
            element={loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl">Loading...</p>
              </div>
            ) : user ? <Navigate to="/doctor-dashboard" replace /> : <Login />}
          />
          <Route path="/doctor-dashboard"
            element={loading ? (
              <div className="flex justify-center items-center min-h-screen">
                <p className="text-xl">Loading...</p>
              </div>
            ) : user ? <DoctorDashboard /> : <Navigate to="/login" replace />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
