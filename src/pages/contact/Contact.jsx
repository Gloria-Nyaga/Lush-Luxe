import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMsg('');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setResponseMsg('Your message has been sent! We’ll get back to you shortly.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMsg('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error("Submit failed:", error);
      setResponseMsg('Failed to send message.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-text">
          <h1 className="contact-title">Contact LushLuxe</h1>
          <p>
            Have a question, a suggestion, or just want to say hi? We’d love to hear from you.
            Whether it’s about our collections, your orders, or just fashion talk, we’re here for it.
          </p>
          <div className="contact-info">
            <p><strong>Phone:</strong> (254) 700-123-456</p>
            <p><strong>Email:</strong> hello@lushluxe.store</p>
            <p><strong>Location:</strong> Nairobi, Kenya</p>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="contact-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {responseMsg && <p className="response-message">{responseMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
