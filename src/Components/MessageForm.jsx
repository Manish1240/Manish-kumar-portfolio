import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import { motion } from 'framer-motion';

const MessageForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_sosmlyd',
        'template_h39oy3s',
        form.current,
        'DmnqesmyE-52w4HZ9'
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          toast.error('Failed to send message.');
          setLoading(false);
          console.error(error);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20 bg-white text-gray-900 dark:bg-[#0a192f] dark:text-white transition-colors duration-300"
    >
      {/* Heading Section */}
      <motion.div
        className="w-full max-w-3xl text-center space-y-4 mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-emerald-500">Let’s Connect</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Have a question or want to work together? Fill out the form and I’ll get back to you soon.
        </p>
      </motion.div>

      {/* Form Section */}
      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-3xl space-y-6 bg-gray-100 dark:bg-slate-900 p-8 rounded-xl shadow-xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded-lg bg-white dark:bg-slate-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-all duration-300"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
    </section>
  );
};

export default MessageForm;
