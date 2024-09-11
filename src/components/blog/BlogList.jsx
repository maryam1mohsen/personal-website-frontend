import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as blogService from "../../services/blogService";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogData = await blogService.index();
        console.log("Fetched Blogs: ", blogData);  // Check if blogs have the 'title' field
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-list container">
      <h2>All Blogs</h2>
      <Link to="/blogs/create" className="btn btn-primary">Create New Blog</Link>

      <div className="row">
        {blogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog._id}>
            <div style={{ border: "1px solid black", padding: "10px" }}>
              {/* Check if the image exists */}
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              <div style={{ padding: "10px" }}>
                {/* Render the blog title */}
                <h5>
                  <Link to={`/blogs/${blog._id}`} style={{ color: "blue", textDecoration: "underline" }}>
                    {/* Ensure title is displayed even if it's missing */}
                    {blog.title || "Untitled Blog"}
                  </Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
