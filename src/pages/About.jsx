import { Card, Button } from 'flowbite-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
            📝 About ABC TECH BLOG
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
            Empowering developers with knowledge, community, and creativity in tech.
          </p>
          
        </div>

        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border-gray-300 dark:border-gray-600">
          <div className="p-8 text-gray-700 dark:text-gray-300 text-md leading-relaxed space-y-6">
            <p>
              👋 <strong>Welcome to ABC TECH BLOG</strong> — founded by{' '}
              <span className="font-medium text-indigo-500 dark:text-indigo-400">Aaditya B. Chatterjee</span>, this platform is a hub for software craftsmanship, learning, and collaboration. We’re dedicated to helping developers master{' '}
              <strong>Java</strong>, <strong>Python</strong>, <strong>AI/ML</strong>, and more through insightful tutorials and hands-on projects.
            </p>

            <p>
              🧠 Every week, we publish{' '}
              <strong className="text-indigo-500 dark:text-indigo-400">tutorials</strong>, deep dives into technical topics, and perspectives on industry trends. Our mission is to empower developers—whether you’re coding your first app or architecting scalable systems—with clarity, confidence, and creativity.
            </p>

            <p>
              🌍 Born from a passion for sharing knowledge, ABC TECH BLOG started in 2023 as a personal project by Aaditya to document his learning journey. Today, it’s a thriving community of developers, dreamers, and doers who live and breathe tech. From{' '}
              <Link to="/tutorials" className="text-indigo-500 hover:text-indigo-600 underline">
                tutorials
              </Link>{' '}
              to{' '}
              <Link to="/community" className="text-indigo-500 hover:text-indigo-600 underline">
                community discussions
              </Link>
              , we’re building a space where everyone belongs.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
              💡 <em>“Learning is a journey best taken together.”</em> Join our community, share your ideas, and let’s grow together.
            </div>

            <p>
              🌱 Whether you’re self-taught, classically trained, or just curious, ABC TECH BLOG is your home. Explore our{' '}
              <Link to="/newsletter" className="text-indigo-500 hover:text-indigo-600 underline">
                newsletter
              </Link>{' '}
              for weekly updates, dive into our{' '}
              <Link to="/search" className="text-indigo-500 hover:text-indigo-600 underline">
                search
              </Link>{' '}
              for specific topics, or connect with us on{' '}
              <Link to="/community" className="text-indigo-500 hover:text-indigo-600 underline">
                social platforms
              </Link>.
            </p>

            <p className="italic text-gray-500 dark:text-gray-400">
              Thank you for being here. Keep building, keep sharing, and stay passionate about tech.
            </p>

            <div className="flex justify-center">
              <Button
                as={Link}
                to="/community"
                gradientDuoTone="purpleToBlue"
                className="hover:scale-105 transition-transform duration-200 shadow-md animate-slide-up"
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
}