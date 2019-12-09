import React from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  const blogPosts = [
    { title: "Visiting Finland", id: "1" },
    { title: "Morocco on a budget", id: "2" }
  ];
  return (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
  );
};

export default BlogContext;
