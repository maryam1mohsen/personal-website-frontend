import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommentForm = ({ handleAddComment, selectedComment, handleUpdateComment }) => {
  const [formData, setFormData] = useState({ paragraph: '' });

  useEffect(() => {
    if (selectedComment) {
      setFormData({ paragraph: selectedComment.paragraph });
    }
  }, [selectedComment]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedComment) {
      await handleUpdateComment(selectedComment._id, formData);
    } else {
      await handleAddComment(formData);
    }
    setFormData({ paragraph: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="paragraph" className="form-label">Comment:</label>
        <textarea
          id="paragraph"
          name="paragraph"
          className="form-control"
          value={formData.paragraph}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {selectedComment ? 'Update Comment' : 'Submit Comment'}
      </button>
    </form>
  );
};

export default CommentForm;
