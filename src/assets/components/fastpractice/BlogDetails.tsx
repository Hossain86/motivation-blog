import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import "./BlogDetails.css"; // Optional: create this file for styling

interface Blog {
  id: number;
  heading: string;
  imgsrc: string;
  details: string;
  category: string;
  date_created: string;
  author: string;
}

interface Props {
  blog: Blog[];
}

function BlogDetails({ blog }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the selected game using the id from the URL
  const game = blog.find((g) => g.id === Number(id));

  // Rating state (0 to 5)
  const [rating, setRating] = useState<number>(0);
  // 🆕 Scroll to top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!game) return <h2>Blog not found!</h2>;

  return (
    <div className="blog-container">
      <button onClick={() => navigate(-1)} className="back-button">
        ⬅ Back
      </button>

      <img src={game.imgsrc} alt={game.heading} className="blog-img" />
      <h2 className="blog-header">{game.heading}</h2>

      <p className="blog-details">{game.details}</p>

      {/* Extended Blog Information */}
      <div className="extended-info">
        <p>
          <strong>Category:</strong> {game.category}
        </p>
        <p>
          <strong>Date:</strong> {game.date_created}
        </p>
        <p>
          <strong>Author:</strong> {game.author}
        </p>
      </div>

      {/* Rating System */}
      <div className="rating-section">
        <h3>Rate this Blog:</h3>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          >
            {rating >= star ? (
              <FaStar color="gold" />
            ) : (
              <FaRegStar color="gold" />
            )}
          </span>
        ))}
        {rating > 0 && <p>Your rating: {rating} / 5</p>}
      </div>
    </div>
  );
}

export default BlogDetails;
