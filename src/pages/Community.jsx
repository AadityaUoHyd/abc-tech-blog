import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Community() {
  const communityLinks = [
    {
      id: '1',
      title: 'Join Our Forum',
      description: 'Discuss Java, Python, and AI/ML with fellow developers.',
      url: '#',
      icon: '💬',
    },
    {
      id: '2',
      title: 'Follow on X',
      description: 'Stay updated with our latest posts and events.',
      url: 'https://x.com/aadityaraj8',
      icon: '🐦',
    },
    {
      id: '3',
      title: 'Contribute Content',
      description: 'Submit tutorials or projects to our blog.',
      url: 'https://github.AadityaUoHyd',
      icon: '✍️',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
              🌐 Our Community
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
              Connect with developers and tech enthusiasts at ABC TECH BLOG.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-md leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <p>
              The <strong>ABC TECH BLOG</strong> community is a vibrant space for learning and collaboration. Engage with others passionate about <strong>Java</strong>, <strong>Python</strong>, <strong>AI/ML</strong>, and more through our forums, social media, and contribution opportunities.
            </p>
            <p>
              Whether you’re sharing knowledge, asking questions, or showcasing projects, our community welcomes all skill levels.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
              💡 <em>“Together, we grow stronger.”</em> Join our community today!
            </div>
          </div>

          {/* Community Links */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
                Get Involved
              </h2>
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {communityLinks.map((link) => (
                <Card key={link.id} className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                  <div className="text-3xl">{link.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{link.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{link.description}</p>
                  <a
                    href={link.url}
                    className="inline-block mt-2 text-indigo-500 hover:text-indigo-600 underline"
                    target={link.url.startsWith('http') ? '_blank' : '_self'}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    Join Now
                  </a>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}