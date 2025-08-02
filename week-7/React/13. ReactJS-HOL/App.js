import React, { useState } from "react";
import CourseDetails from "./Components/CourseDetails";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";


function App() {
  const [showCourses, setShowCourses] = useState(true);
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);

  const sectionStyle = {
    border: "1px solid green",
    margin: "10px 0",
    padding: "10px"
  };

  return (
    <div style={{ width: "60%", margin: "auto" }}>
      <h1>React App</h1>
      <div>
        <button onClick={() => setShowCourses(!showCourses)}>Toggle Courses</button>
        <button onClick={() => setShowBooks(!showBooks)}>Toggle Books</button>
        <button onClick={() => setShowBlogs(!showBlogs)}>Toggle Blogs</button>
      </div>

      <hr />

      {showCourses && (
        <div style={sectionStyle}>
          <CourseDetails />
        </div>
      )}

      {showBooks && (
        <div style={sectionStyle}>
          <BookDetails />
        </div>
      )}

      {showBlogs && (
        <div style={sectionStyle}>
          <BlogDetails />
        </div>
      )}
    </div>
  );
}

export default App;
