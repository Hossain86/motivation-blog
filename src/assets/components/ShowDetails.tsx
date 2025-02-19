import React from 'react';

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

const ShowDetails: React.FC<Props> = ({ articles }) => {
  return (
    <div className="block">
      {articles.map((article) => (
        <div key={article.id}  className="block-container">
          <img src={article.imgsrc} alt={article.heading} className="block-img" />
          <h2 className="block-header">{article.heading}</h2>
      <p className="block-details">{article.details.substring(0, 100) + "..."}</p>
          <p><strong>Category:</strong> {article.category}</p>
          <p><strong>Date:</strong> {article.date_created}</p>
          <p><strong>Author:</strong> {article.author}</p>
          {/* Navigate to Game Details page */}
                <button className="block-button" onClick={() => navigate(`/blog/${article.id}`)}>
                  Show More
                </button>
          
                <div className="block-lower">
                  <span onClick={() => setLiked(!liked)} style={{ cursor: "pointer" }}>
                    {liked ? <AiFillHeart color="red" size={22} /> : <AiOutlineHeart size={22} />}
                  </span>
                </div>
        </div>
      ))}
    </div>
  );
};

export default ShowDetails;
