import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as blogService from '../../services/blogService';

const BlogEdit = () => {
  const { id } = useParams(); // Get the ID from URL params
  const [blogEditing, setBlogEditing] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await blogService.show(id);
        setBlogEditing(blogData);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      }
    };
    fetchBlog();
  }, [id]);

  const handleChange = (evt) => {
    setBlogEditing({ ...blogEditing, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await blogService.update(id, blogEditing); // Pass ID and data to update function
      navigate(`/blogs/${id}`); // Redirect to blog detail page
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <main className="container my-5">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <h2 className="mb-4">Edit Blog</h2>
        <div className="mb-3">
          <label htmlFor="title-input" className="form-label">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title-input"
            className="form-control"
            value={blogEditing.title || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body-input" className="form-label">Body</label>
          <textarea
            required
            name="body"
            id="body-input"
            className="form-control"
            rows="4"
            value={blogEditing.body || ''}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image-input" className="form-label">Image URL</label>
          <input
            type="text"
            name="image"
            id="image-input"
            className="form-control"
            value={blogEditing.image || ''}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Save Changes</button>
      </form>
    </main>
  );
};

export default BlogEdit;
