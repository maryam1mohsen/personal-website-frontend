import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as contactMeService from '../../services/contactMeService';
import './ContactForm.css';

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
            const newContact = await contactMeService.create(formData);
            if (!newContact) {
                throw new Error('Error creating contact inquiry');
            }
            setFormData({
                name: '',
                email: '',
                inquiry: ''
            });

            navigate('/thank-you');
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
        <main className="content">
            <section className="contact-form">
                <h2>Contact Me</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Your Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Your Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="inquiry">Your Message:</label>
                    <textarea
                        id="inquiry"
                        name="inquiry"
                        rows="4"
                        value={formData.inquiry}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Send Message</button>
                </form>
            </section>

            <section className="contact-details">
                <h2>Contact Details</h2>
                <p>Email: maryamebrahimalaali@gmail.com</p>
                <p>Phone: +973 32177707</p>
                <p>Instagram: @maryam.ebrahim</p>
            </section>
        </main>
    );
};

export default ContactForm;
