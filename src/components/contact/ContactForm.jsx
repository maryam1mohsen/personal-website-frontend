import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as contactService from '../../services/contactService';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ContactForm = ({ onFormSubmit }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        inquiry: '',
    });

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmitContact = async (formData) => {
        try {
            const newContact = await contactService.create(formData);
            if (!newContact) {
                throw new Error('Error creating contact inquiry');
            }
            setFormData({
                name: '',
                email: '',
                inquiry: ''
            });

            navigate('/thank-you'); // Navigate to a thank you page, for example
            if (onFormSubmit) onFormSubmit();
        } catch (err) {
            console.log(err);
        }
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        await handleSubmitContact(formData);
    };

    return (
        <main className="container mt-5">
            <h1 className="mb-4">Contact Us</h1>
            <form onSubmit={handleSubmit} className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="name-input" className="form-label">Name</label>
                    <input
                        required
                        type="text"
                        name="name"
                        id="name-input"
                        className="form-control"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-6">
                    <label htmlFor="email-input" className="form-label">Email</label>
                    <input
                        required
                        type="email"
                        name="email"
                        id="email-input"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-md-12">
                    <label htmlFor="inquiry-input" className="form-label">Inquiry</label>
                    <textarea
                        required
                        name="inquiry"
                        id="inquiry-input"
                        className="form-control"
                        rows="4"
                        value={formData.inquiry}
                        onChange={handleChange}
                    />
                </div>

                <div className="col-12">
                    <button type="submit" className="btn btn-primary w-100">Send Inquiry</button>
                </div>
            </form>
        </main>
    );
};

export default ContactForm;
