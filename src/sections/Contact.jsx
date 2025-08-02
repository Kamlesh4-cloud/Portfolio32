import { motion } from "motion/react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="c-space section-spacing" id="contact">
      <motion.h2 
        className="text-heading mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
          <p className="text-neutral-300 mb-8 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-royal to-lavender rounded-lg flex items-center justify-center">
                <span className="text-white">📧</span>
              </div>
              <div>
                <p className="text-sm text-neutral-400">Email</p>
                <a 
                  href="mailto:yashbhadale01@gmail.com" 
                  className="text-white hover:text-royal transition-colors"
                >
                  yashbhadale01@example.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-aqua to-mint rounded-lg flex items-center justify-center">
                <span className="text-white">📍</span>
              </div>
              <div>
                <p className="text-sm text-neutral-400">Location</p>
                <p className="text-white">Pune, India</p>
              </div>
            </div>
            
           

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-orange to-sand rounded-lg flex items-center justify-center">
                <span className="text-white">📱</span>
              </div>
              <div>
                <p className="text-sm text-neutral-400">Phone</p>
                <a 
                  href="tel:+919876543210" 
                  className="text-white hover:text-royal transition-colors"
                >
                  +91 9699373873
                </a>
              </div>
            </div>
            {/* Instagram */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg flex items-center justify-center">
                {/* Instagram SVG */}
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="url(#ig-gradient)" />
                  <defs>
                    <linearGradient id="ig-gradient" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#f09433"/>
                      <stop offset="0.25" stopColor="#e6683c"/>
                      <stop offset="0.5" stopColor="#dc2743"/>
                      <stop offset="0.75" stopColor="#cc2366"/>
                      <stop offset="1" stopColor="#bc1888"/>
                    </linearGradient>
                  </defs>
                  <path d="M12 7.2A4.8 4.8 0 1 0 12 16.8A4.8 4.8 0 1 0 12 7.2Z" stroke="#fff" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="#fff"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-neutral-400">Instagram</p>
                <a 
                  href="https://instagram.com/yashbhadale_20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-royal transition-colors"
                >
                  @yashbhadale_20
                </a>
              </div>
            </div>
            {/* LinkedIn */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                {/* LinkedIn SVG */}
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <rect width="24" height="24" rx="6" fill="#0077B5"/>
                  <path d="M7.5 8.5A1.5 1.5 0 1 1 7.5 5.5A1.5 1.5 0 0 1 7.5 8.5ZM6 10H9V19H6V10ZM13.5 10C11.57 10 11 11.07 11 12.5V19H14V13.5C14 12.67 14.67 12 15.5 12C16.33 12 17 12.67 17 13.5V19H20V13.5C20 11.57 18.43 10 16.5 10C15.67 10 15 10.67 15 11.5V12H13.5V10Z" fill="#fff"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-neutral-400">LinkedIn</p>
                <a 
                  href="www.linkedin.com/in/yash-bhadale" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-royal transition-colors"
                >
                  Yash Bhadale
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="field-label text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="field-input field-input-focus w-full"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="field-label text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="field-input field-input-focus w-full"
                placeholder="email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="field-label text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input field-input-focus w-full resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            
            <motion.button
              type="submit"
              className="px-8 py-3 text-lg font-medium bg-gradient-to-r from-royal to-lavender rounded-lg text-white hover:opacity-90 transition-opacity w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
            
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-gradient-to-r from-aqua to-mint rounded-lg text-white text-center"
              >
                ✅ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 