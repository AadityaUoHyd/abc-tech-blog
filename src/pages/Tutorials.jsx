import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

export default function Tutorials() {
  // Placeholder tutorial data for ProjectCard
  const tutorials = [
    {
      _id: '1',
      title: 'Building a Java REST API with Spring Boot',
      category: 'Java',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
      liveUrl: 'https://example.com/java-rest-api-demo',
      githubUrl: 'https://github.com/abc-tech-blog/java-rest-api',
      createdAt: new Date('2025-05-01'),
    },
    {
      _id: '2',
      title: 'Python for Data Analysis with Pandas',
      category: 'Python',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643',
      liveUrl: 'https://example.com/pandas-data-analysis-demo',
      githubUrl: 'https://github.com/abc-tech-blog/pandas-tutorial',
      createdAt: new Date('2025-04-28'),
    },
    {
      _id: '3',
      title: 'Introduction to AI with TensorFlow',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c',
      liveUrl: 'https://example.com/tensorflow-ai-demo',
      githubUrl: 'https://github.com/abc-tech-blog/tensorflow-tutorial',
      createdAt: new Date('2025-04-25'),
    },
    {
      _id: '4',
      title: 'Java Multithreading Made Easy',
      category: 'Java',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e',
      liveUrl: 'https://example.com/java-multithreading-demo',
      githubUrl: 'https://github.com/abc-tech-blog/java-multithreading',
      createdAt: new Date('2025-04-20'),
    },
    {
      _id: '5',
      title: 'Building Web Apps with Django',
      category: 'Python',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f',
      liveUrl: 'https://example.com/django-web-app-demo',
      githubUrl: 'https://github.com/abc-tech-blog/django-tutorial',
      createdAt: new Date('2025-04-15'),
    },
    {
      _id: '6',
      title: 'Deep Learning for Image Recognition',
      category: 'AI/ML',
      image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29',
      liveUrl: 'https://example.com/image-recognition-demo',
      githubUrl: 'https://github.com/abc-tech-blog/deep-learning-tutorial',
      createdAt: new Date('2025-04-10'),
    },
    {
      _id: '7',
      title: 'Java Design Patterns for Beginners',
      category: 'Java',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      liveUrl: 'https://example.com/java-design-patterns-demo',
      githubUrl: 'https://github.com/abc-tech-blog/java-design-patterns',
      createdAt: new Date('2025-04-05'),
    },
    {
      _id: '8',
      title: 'Automating Tasks with Python Scripts',
      category: 'Python',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8',
      liveUrl: 'https://example.com/python-automation-demo',
      githubUrl: 'https://github.com/abc-tech-blog/python-automation',
      createdAt: new Date('2025-04-01'),
    },
    {
      _id: '9',
      title: 'Natural Language Processing with NLTK',
      category: 'AI/ML',
      image: 'https://plus.unsplash.com/premium_photo-1661715935533-507e796866e5',
      liveUrl: 'https://example.com/nltk-nlp-demo',
      githubUrl: 'https://github.com/abc-tech-blog/nltk-tutorial',
      createdAt: new Date('2025-03-28'),
    },
  ];

  /*
  // Optional: Fetch tutorials from API
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    const fetchTutorials = async () => {
      try {
        const res = await fetch('/api/post/getposts?category=tutorials&limit=9&sort=desc');
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed to fetch tutorials');
        setTutorials(data.posts.slice(0, 9));
      } catch (err) {
        console.error(err);
      }
    };
    fetchTutorials();
  }, []);
  */

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
              📚 Explore Our Tutorials
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
              Master Java, Python, and AI/ML with hands-on tutorials designed for all skill levels.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-md leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <p>
              Our tutorials at <strong>ABC TECH BLOG</strong> guide you through practical, real-world examples in <strong>Java</strong>, <strong>Python</strong>, and <strong>AI/ML</strong>. From building REST APIs to training neural networks, each tutorial is crafted to enhance your technical skills.
            </p>
            <p>
              Whether you’re a beginner starting your coding journey or an experienced developer sharpening your expertise, these step-by-step guides offer valuable insights and hands-on practice.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
              💡 <em>“Learning by doing is the key to mastery.”</em> Dive into our tutorials and elevate your tech skills today!
            </div>
            <p>
              Ready to learn? Scroll down to explore featured tutorials or discover more in our search section.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Tutorials Section */}
      <div className="mx-auto p-6 sm:p-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="flex flex-col gap-12">
          <div className="relative">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 animate-fade-in">
              Featured Tutorials
            </h2>
            </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.slice(0, 9).map((tutorial) => (
              <div key={tutorial._id} className="w-full max-w-[280px] mx-auto animate-fade-in-up">
                <ProjectCard project={tutorial} />
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to="/search"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all duration-200 shadow-md animate-slide-up"
            >
              View All My Articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}