import React from "react";
import Block from "./Block";

interface BlogsProps {
  filteredArticles: any[];  // or you can use ArticleData[] if you define the type properly
}

const Blogs: React.FC<BlogsProps> = ({ filteredArticles }) => {
  return (
    <div>
      {/* Display only filtered articles */}
      <h1>Blogs</h1>
      <Block articles={filteredArticles} />
    </div>
  );
};

export default Blogs;
