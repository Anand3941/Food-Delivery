import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Layout & Common Components
import Navbar from "./Components/Navber";
import Footer from "./Footer/Footer";
import Testimonial from "./Footer/Testimonial";
import Delivery from "./Footer/Delivery";
import "./App.css";

// Sections
import Crausal from "./Components/Crausal";
import Ourchef from "./Components/Ourchef";
import PopularDis from "./Components/PopularDis";

// Filter-Based Components
import Home from "./Page/Home";
import Card from "./Page/Card";
import { food_items } from "./Category/food";

// Toast Notifications
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Extra Pages
import Booktable from "./Contact/Booktable";
import Loginpage from "./Contact/Loginpage";
import Register from "./Contact/Register";
import ContactCarousel from "./Crausal/ContactCarousel";
import ContactPage from "./Page/ContactPage";

  // ✅ Make sure path is correct

// Dummy Profile Page for now (if not yet created)
const Profile = () => (
  <div className="text-center py-20 text-2xl font-semibold">Profile Page Coming Soon</div>
);

function App() {
  const [cate, setCate] = useState(food_items);

  return (
    <Router>
      <div className="w-full min-h-screen bg-[#FFF8EE]">
        <Navbar />

        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Crausal />
                <Ourchef />
                <PopularDis />
                <Home setCate={setCate} />
                <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8">
                  {cate.map((item) => (
                    <Card
                      key={item.id}
                      name={item.food_name}
                      image={item.food_image}
                      price={item.price}
                      id={item.id}
                      type={item.food_type}
                    />
                  ))}
                </div>
                <Delivery />
                <Testimonial />
               
              </>
            }
          />

          {/* About Page */}
          <Route
            path="/about"
            element={
              <>
                <Crausal />
                <Testimonial />
              </>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <>
            
              <ContactPage/>
             
               
              
              </>
            }
          />

          {/* Profile Page */}
          <Route path="/profile" element={<Profile />} />

          {/* Item Page */}
          <Route
            path="/item"
            element={
              <>
              
                <Home setCate={setCate} />
                <div className="w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8">
                  {cate.map((item) => (
                    <Card
                      key={item.id}
                      name={item.food_name}
                      image={item.food_image}
                      price={item.price}
                      id={item.id}
                      type={item.food_type}
                    />
                  ))}
                </div>
              </>
            }
          />

          {/* Book Table Page */}
          <Route path="/booktable" element={<Booktable />} />

          {/* Auth Pages */}
          <Route path="/Loginpage" element={<Loginpage />} />
          <Route path="/Register" element={<Register/>} />
        </Routes>

        <Footer />
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      </div>
    </Router>
  );
}

export default App;
