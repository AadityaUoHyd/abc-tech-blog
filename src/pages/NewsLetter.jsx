import { Button, TextInput } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function NewsLetter() {
  /*
  // Optional: Handle form submission with API
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Subscription failed');
      alert('Subscribed successfully!');
      setEmail('');
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
              📬 Join Our Newsletter
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
              Stay updated with the latest in Java, Python, AI/ML, and more from ABC TECH BLOG.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-md leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <p>
              Subscribe to the <strong>ABC TECH BLOG</strong> newsletter to receive weekly insights, tutorials, and tips on <strong>Java</strong>, <strong>Python</strong>, <strong>AI/ML</strong>, and other cutting-edge technologies. Never miss an update!
            </p>
            <p>
              Our newsletter delivers curated content straight to your inbox, helping you stay ahead in the tech world. From beginner guides to advanced projects, we’ve got you covered.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
              💡 <em>“Knowledge delivered weekly, right to your inbox.”</em> Join thousands of tech enthusiasts today!
            </div>

            {/* Subscription Form */}
            <form className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <TextInput
                placeholder="Enter your email"
                type="email"
                id="email"
                required
                className="w-full sm:w-64"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                type="submit"
                gradientDuoTone="purpleToBlue"
                className="hover:scale-105 transition-transform duration-200 shadow-md"
                // onClick={handleSubmit}
              >
                Subscribe
              </Button>
            </form>

            <p>
              Already subscribed? <Link to="/search" className="text-indigo-500 hover:text-indigo-600 underline">Explore My Blogs</Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}