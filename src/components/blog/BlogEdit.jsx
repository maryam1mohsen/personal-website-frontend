import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as blogService from "../../services/blogService";

const BlogEdit = () => {
  const { blogId } = useParams(); // Get the blog ID from the URL
  const navigate = useNavigate(); // Initialize navigation
  const [blog, setBlog] = useState({
    title: "",
    body: "",
    image: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await blogService.show(blogId);
        setBlog(blogData); // Populate form with existing blog data
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    fetchBlog();
  }, [blogId]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update the blog
      await blogService.update(blogId, blog);
      // Redirect to the blog detail page after successful update
      navigate(`/blogs/${blogId}`);
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="container">
      <h1>Edit Blog</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            name="body"
            value={blog.body}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={blog.image}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-3">Save Changes</button>
      </form>
    </div>
  );
};

export default BlogEdit;
