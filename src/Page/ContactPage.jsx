import React, { useState } from "react";
import contact from "../assets/contactimg.jpg"
const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Anand Food Delivery!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ fontFamily: "Poppins, sans-serif", background: "#fff8f3", padding:"6px"}}>
       <div className="w-full h-[200px] overflow-hidden  mb-4">
  <img src={contact} className="h-full w-full object-cover" alt="Contact" />
</div>

    

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#ffffff",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h2 style={{ color: "#d63031", marginBottom: "1rem" }}>📬 Send Us a Message</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            style={inputStyle}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            style={inputStyle}
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#d63031",
              color: "#fff",
              padding: "0.75rem",
              border: "none",
              borderRadius: "8px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background 0.3s",
            }}
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Map */}
        <div
          style={{
            background: "#ffffff",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          }}
        >
          <h2 style={{ color: "#d63031", marginBottom: "1rem" }}>📞 Contact Details</h2>
          <p>
            <strong>Address:</strong> 123 Anand Street, Madhubani, Bihar, India
          </p>
          <p>
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p>
            <strong>Email:</strong> support@anandfooddelivery.com
          </p>

          <div style={{ marginTop: "1rem", borderRadius: "10px", overflow: "hidden" }}>
          <iframe
    title="Madhubani Map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28839.929645504974!2d86.06803946202147!3d26.363126812820667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec9f6d5a781e4f%3A0x7b1c8d905300b9d2!2sMadhubani%2C%20Bihar%20847011!5e0!3m2!1sen!2sin!4v1712841344237!5m2!1sen!2sin"
    width="100%"
    height="300"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

const inputStyle = {
  padding: "0.75rem",
  border: "1px solid #ddd",
  borderRadius: "8px",
  fontSize: "1rem",
  outline: "none",
};

export default ContactPage;
