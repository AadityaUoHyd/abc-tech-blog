import { Button, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Support() {
  /*
  // Optional: Handle form submission with API
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/support/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Submission failed');
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };
  */

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
              🛠️ Support Center
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
              Get help with ABC TECH BLOG tutorials, subscriptions, or any inquiries.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-md leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <p>
              Our <strong>ABC TECH BLOG</strong> support team is here to assist with questions about <strong>Java</strong>, <strong>Python</strong>, <strong>AI/ML</strong> tutorials, newsletter subscriptions, or community engagement.
            </p>
            <p>
              Browse our <Link to="/faq" className="text-indigo-500 hover:text-indigo-600 underline">FAQ</Link> for quick answers, or use the form below to contact us directly.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
              💡 <em>“We’re here to help you succeed.”</em> Reach out anytime!
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
                Contact Us
              </h2>
              </div>
            <form className="flex flex-col gap-4 max-w-md mx-auto">
              <TextInput
                placeholder="Your name"
                type="text"
                id="name"
                required
                // value={formData.name}
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <TextInput
                placeholder="Your email"
                type="email"
                id="email"
                required
                // value={formData.email}
                // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <Textarea
                placeholder="Your message"
                id="message"
                required
                rows={4}
                // value={formData.message}
                // onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button
                type="submit"
                gradientDuoTone="purpleToBlue"
                className="hover:scale-105 transition-transform duration-200 shadow-md"
                // onClick={handleSubmit}
              >
                Send Message
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}