import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Block.css";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface ArticleData {
  id: number;
  heading: string;
  imgsrc: string;
  details: string;
  category: string;
  date_created: string;
  author: string;
}

// Define props interface
interface Props {
  articles: ArticleData[];
}

function Block({ articles }: Props) {
  const navigate = useNavigate();

  // Manage likes in a state object
  const [likedArticles, setLikedArticles] = useState<{ [key: number]: boolean }>(() => {
    const storedLikes: { [key: number]: boolean } = {};
    articles.forEach((article) => {
      storedLikes[article.id] = localStorage.getItem(`liked-${article.id}`) === "true";
    });
    return storedLikes;
  });

  const toggleLike = (id: number) => {
    setLikedArticles((prev) => {
      const newLiked = { ...prev, [id]: !prev[id] };
      localStorage.setItem(`liked-${id}`, newLiked[id].toString());
      return newLiked;
    });
  };

  return (
    <div className="block">
      {articles.map((article) => (
        <div key={article.id} className="block-container">
          <div className="block-image">
            <img src={article.imgsrc} alt={article.heading} className="block-img" />
          </div>
          <div className="block-texts">
            <h2 className="block-header" onClick={() => navigate(`/blog/${article.id}`)}>{article.heading}</h2>
            <p className="block-details">{article.details.substring(0, 200) + "..."}</p>
            <p><strong>Category:</strong> {article.category}</p>
            <p><strong>Date:</strong> {article.date_created}</p>
            <p><strong>Author:</strong> {article.author}</p>

            {/* Navigate to Blog Details page */}
            <button className="block-button" onClick={() => navigate(`/blog/${article.id}`)}>
              Show More
            </button>

            <div className="block-lower">
              <span onClick={() => toggleLike(article.id)} style={{ cursor: "pointer" }}>
                {likedArticles[article.id] ? <AiFillHeart color="red" size={22} /> : <AiOutlineHeart size={22} />}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default Block;
