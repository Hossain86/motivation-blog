import blogData from "./assets/components/BlogData";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./assets/components/LandingPage/LandingPage";
import Block from "./assets/components/fastpractice/Block";
import "./App.css";
import NavbarPage from "./assets/components/Navbar/NavbarPage";
import BlogDetails from "./assets/components/fastpractice/BlogDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app-container">
              <NavbarPage />
              <LandingPage />
            </div>
          }
        />

        <Route
          path="/blogs"
          element={
            <div className="app-container">
              <NavbarPage />
              <Block articles={blogData} />
            </div>
          }
        />
        {/* Add more routes here */}
        <Route
          path="/blog/:id"
          element={
            <div className="app-container">
              <NavbarPage />
              <BlogDetails blog={blogData} />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
