import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';
import { FaMedium, FaBlogger, FaEnvelope } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setResult('');
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Sending...');
    setError('');

    const form = new FormData();
    form.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'eb30a6d8-5706-451b-af01-4a67012890'); // Fallback for testing
    form.append('name', formData.name);
    form.append('email', formData.email);
    form.append('subject', formData.subject);
    form.append('message', formData.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        toast.success('Form Submitted Successfully! We’ll get back to you soon.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error(data.message || 'Failed to submit form. Please try again.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: 'colored',
        });
      }
    } catch (err) {
      console.error('Network Error:', err);
      toast.error('Network error. Please check your connection and try again.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-fade-in flex items-center justify-center gap-2">
              <FaEnvelope className="text-indigo-500 dark:text-purple-500" />
              Contact ABC Tech Blog
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're here to answer your questions, hear your ideas, or collaborate on exciting tech projects. Reach out, and let's start the conversation!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label
                    htmlFor="name"
                    value="Your Name"
                    className="text-gray-700 dark:text-gray-300 font-medium"
                  />
                  <TextInput
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 transition-all duration-200 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="email"
                    value="Your Email"
                    className="text-gray-700 dark:text-gray-300 font-medium"
                  />
                  <TextInput
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 transition-all duration-200 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="subject"
                    value="Subject"
                    className="text-gray-700 dark:text-gray-300 font-medium"
                  />
                  <TextInput
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's on your mind?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 transition-all duration-200 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="message"
                    value="Your Message"
                    className="text-gray-700 dark:text-gray-300 font-medium"
                  />
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="mt-2 rounded-lg bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-purple-500 transition-all duration-200 text-gray-900 dark:text-gray-100"
                  />
                </div>
                <Button
                  type="submit"
                  gradientDuoTone="purpleToBlue"
                  className="w-full sm:w-auto px-8 py-3 font-semibold rounded-lg hover:scale-105 transition-transform duration-200 shadow-md"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2 grid-cols-2 space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  About Me
                </h2>
                <div className="space-y-5 text-gray-600 dark:text-gray-300">
                  <p>
                    My name is <strong>"Aaditya B Chatterjee".</strong> Just another ordinary sapiens out there. A 'Master of Computer Application' graduate (2011-14) from University of Hyderabad, India.
                  </p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Details
                </h2>
                <div className="space-y-5 text-gray-600 dark:text-gray-300">
                  <p className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 text-indigo-600 dark:text-purple-400 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <a
                      href="mailto:aadityaraj.raj402@gmail.com"
                      className="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 break-all"
                    >
                      aadityaraj.raj402@gmail.com
                    </a>
                  </p>
                  <p className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 text-indigo-600 dark:text-purple-400 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>
                      Hi Tech City,
                      <br />
                      Hyderabad, India - 500034
                    </span>
                  </p>
                  <p className="flex items-start">
                    <svg
                      className="w-6 h-6 mr-3 text-indigo-600 dark:text-purple-400 flex-shrink-0 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <a
                      href="tel:+1234567890"
                      className="hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200"
                    >
                      +91 999 999 9999
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                  Connect With Me
                </h2>
                <div className="flex gap-6">
                  <a
                    href="https://x.com/AadityaRaj8"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200"
                    aria-label="Twitter"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/AadityaUoHyd"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200"
                    aria-label="GitHub"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.13-1.47-1.13-1.47-.92-.62.07-.6.07-.6 1.02.07 1.56 1.04 1.56 1.04.91 1.56 2.39 1.11 2.97.85.09-.66.35-1.11.64-1.36-2.23-.25-4.57-1.11-4.57-4.96 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.29.1-2.68 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.39.2 2.43.1 2.68.64.7 1.03 1.6 1.03 2.7 0 3.86-2.34 4.71-4.58 4.96.36.31.67.93.67 1.88v2.79c0 .28.16.59.67.5A10 10 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.youtube.com/@geopolitiksimplified"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200"
                    aria-label="YouTube"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.016 3.016 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.505 9.377.505 9.377.505s7.505 0 9.377-.505a3.016 3.016 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                  <a
                    href="https://medium.com/@aadityabchatterjee"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200"
                    aria-label="Medium"
                  >
                    <FaMedium className="w-8 h-8" />
                  </a>
                  <a
                    href="https://dearabc.vercel.app/home/"
                    className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200"
                    aria-label="Geopolitical Blog"
                  >
                    <FaBlogger className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}
