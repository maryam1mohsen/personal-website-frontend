import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as blogService from '../../services/blogService';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogCreate = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
    image: '',
  });
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      await blogService.create(formData);
      navigate('/blogs');
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <main className="container my-5">
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow-sm bg-light">
        <h2 className="mb-4">Create New Blog</h2>

        <div className="mb-3">
          <label htmlFor="title-input" className="form-label">Title</label>
          <input
            required
            type="text"
            name="title"
            id="title-input"
            className="form-control"
            value={formData.title}
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
            value={formData.body}
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
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Create Blog</button>
      </form>
    </main>
  );
};

export default BlogCreate;
