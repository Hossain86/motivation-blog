import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import blogData from "./assets/components/BlogData";
import LandingPage from "./assets/components/LandingPage/LandingPage";
import Block from "./assets/components/fastpractice/Block";
import NavbarPage from "./assets/components/Navbar/NavbarPage";
import BlogDetails from "./assets/components/fastpractice/BlogDetails";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // 🔍 Filter blogData based on selected category
  const filteredArticles = selectedCategory
    ? blogData.filter((article) => article.category === selectedCategory)
    : blogData;

  return (
    <Router>
      <div className="app-container">
        <NavbarPage setCategory={setSelectedCategory} />
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Blogs Page with Filtering */}
          <Route path="/blogs" element={<Block articles={filteredArticles} />} />

          {/* Blog Details Page */}
          <Route path="/blog/:id" element={<BlogDetails blog={blogData} />} />
        </Routes>
      </div>
      <Analytics />
    </Router>
  );
}

export default App;
