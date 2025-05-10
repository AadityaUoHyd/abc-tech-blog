import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function Events() {
  const events = [
    {
      id: '1',
      title: 'Java Spring Boot Webinar',
      description: 'Learn advanced Spring Boot techniques in this live session.',
      date: 'June 15, 2025',
      url: '#',
    },
    {
      id: '2',
      title: 'Python Data Science Workshop',
      description: 'Hands-on workshop on data analysis with Pandas and NumPy.',
      date: 'July 10, 2025',
      url: '#',
    },
    {
      id: '3',
      title: 'AI/ML Conference',
      description: 'Explore the latest trends in AI and machine learning.',
      date: 'August 20, 2025',
      url: '#',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
              🎉 Upcoming Events
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
              Join our tech events to learn, network, and grow with ABC TECH BLOG.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-md leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <p>
              <strong>ABC TECH BLOG</strong> hosts and recommends events on <strong>Java</strong>, <strong>Python</strong>, <strong>AI/ML</strong>, and more. From webinars to workshops, our events are designed to boost your skills and connect you with the tech community.
            </p>
            <p>
              Don’t miss out on opportunities to learn from experts and collaborate with peers.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
              💡 <em>“Learn live, connect globally.”</em> Register for our events today!
            </div>
          </div>

          {/* Events List */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
                Event Schedule
              </h2>
              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{event.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Date: {event.date}</p>
                  <a
                    href={event.url}
                    className="inline-block mt-2 text-indigo-500 hover:text-indigo-600 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register Now
                  </a>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/search?category=events"
                className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all duration-200 shadow-md animate-slide-up"
              >
                View All Events
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}