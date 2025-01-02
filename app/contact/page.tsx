"use client";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    try {
      await emailjs.sendForm('your_service_id', 'your_template_id', form.current, 'your_user_id');
      alert('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section 
      className="h-[80vh] flex items-center"
      style={{ background: 'var(--background)', color: 'var(--text-color)' }}
    >
      <div className="max-w-7xl mx-auto p-8 grid md:grid-cols-2 gap-8 w-full">
        
        {/* Left Column: Heading & Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4">
            Contact Me
          </h2>
          <p className="text-lg opacity-90">
            Need to get in touch with me? Please fill out the form with your inquiry.
          </p>
        </div>

        {/* Right Column: Form */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-white text-black shadow-lg p-6 rounded w-full md:w-3/4">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <input 
                  type="text"
                  name="first_name"
                  placeholder="First name*"
                  className="border border-gray-300 p-2 rounded w-full md:w-1/2"
                  required
                />
                <input 
                  type="text"
                  name="last_name"
                  placeholder="Last name"
                  className="border border-gray-300 p-2 rounded w-full md:w-1/2"
                />
              </div>
              <input 
                type="email"
                name="email"
                placeholder="Email*"
                className="border border-gray-300 p-2 rounded w-full"
                required
              />
              <textarea 
                name="message"
                placeholder="What can we help you with?"
                className="border border-gray-300 p-2 rounded w-full h-32"
                required
              />
              <button 
                type="submit"
                className="font-medium px-4 py-2 rounded transition-colors duration-300"
                style={{
                  background: 'var(--button-bg)',
                  color: '#fff'
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
