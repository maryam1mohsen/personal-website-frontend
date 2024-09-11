import { useState } from 'react';

const ContactForm = ({ submitInquiry }) => {
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitInquiry(formData); // Assuming submitInquiry is a passed prop for handling form submission
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <textarea name="inquiry" value={formData.inquiry} onChange={handleChange} placeholder="Inquiry" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
