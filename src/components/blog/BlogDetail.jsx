import { useParams, useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import * as blogService from "../../services/blogService";
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        const blogData = await blogService.show(id);
        setBlog(blogData);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    fetchBlogDetail();
  }, [id]);

  const handleDelete = async () => {
    try {
      await blogService.remove(id);
      navigate("/blogs");
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (!blog) {
    return <p>Loading blog details...</p>;
  }

  return (
    <div className="container my-5">
      <h1>{blog.title}</h1>
      {blog.image && (
        <div className="mb-4">
          <img src={blog.image} alt={blog.title} className="img-fluid" />
        </div>
      )}
      <p>{blog.body}</p>

      <div className="d-flex">
        <Link to={`/blogs/${id}/edit`} className="btn btn-warning me-2">
          Edit Blog
        </Link>
        <button onClick={handleDelete} className="btn btn-danger">
          Delete Blog
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
