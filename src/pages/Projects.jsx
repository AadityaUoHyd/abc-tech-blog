import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {

  const projects = [
    {
      _id: '1',
      title: 'Muscle-AI',
      description: 'A conversational AI powered voice gym trainer using NextJs, Vapi, clerk.',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/muscle-ai/refs/heads/main/public/screenshot-for-readme.png',
      createdAt: new Date('2025-04-15'),
      githubUrl: 'https://github.com/AadityaUoHyd/muscle-ai',
      liveUrl: 'https://the-muscle-ai.vercel.app/',
    },
    {
      _id: '2',
      title: 'e-Renaissance',
      description: 'digital learning through video lectures platform. MERN Stack project with Cloudinary.',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/e-renaissance-frontend/refs/heads/main/src/assets/hero1.png',
      createdAt: new Date('2025-04-10'),
      githubUrl: 'https://github.com/AadityaUoHyd/e-renaissance-frontend',
      liveUrl: 'https://e-renaissance.vercel.app/',
    },
    {
      _id: '3',
      title: 'Healthcare-Prescription-Guide',
      description: 'A Python-based ML model to identify & classify diseases with high accuracy.',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/healthcare-prescription-guide/refs/heads/main/static/images/img.png',
      createdAt: new Date('2025-04-05'),
      githubUrl: 'https://github.com/AadityaUoHyd/healthcare-prescription-guide',
      liveUrl: 'https://healthcare-prescription-guide.onrender.com/',
    },
    {
      _id: '4',
      title: 'Personify Resume with AI',
      description: 'Personify Resume with AI, is an AI-powered resume-building web application that leverages Spring AI',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/personify-resume-with-ai/refs/heads/main/screenshots/2generate-resume.png',
      createdAt: new Date('2025-03-30'),
      githubUrl: 'https://github.com/AadityaUoHyd/personify-resume-with-ai',
      liveUrl: 'https://github.com/AadityaUoHyd/personify-resume-with-ai',
    },
    {
      _id: '5',
      title: 'Restaurant Review App',
      description: 'App to review different restaurants in your city.',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/restaurant-review-app/refs/heads/main/screenshots/rr%20main%20page.png',
      createdAt: new Date('2025-03-25'),
      githubUrl: 'https://github.com/AadityaUoHyd/restaurant-review-app',
      liveUrl: 'https://github.com/AadityaUoHyd/restaurant-review-app',
    },
    {
      _id: '6',
      title: 'ABC BUS BOOKINGS',
      description: 'Python based project to book online ticket for inter-city bus travel in India.',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/my-github-repo-readme-generator/refs/heads/main/images/github_readme_generated.png',
      createdAt: new Date('2025-03-20'),
      githubUrl: 'https://github.com/AadityaUoHyd/abc-bus-bookings',
      liveUrl: 'https://abc-bus-bookings.vercel.app/',
    },
    {
      _id: '7',
      title: 'Geopolitik Simplified',
      description: 'My personal blog build in Java, PostgreSQL & React',
      image: 'https://raw.githubusercontent.com/AadityaUoHyd/geopolitiksimplified/refs/heads/main/src/assets/logo.jpg',
      createdAt: new Date('2025-03-15'),
      githubUrl: 'https://github.com/AadityaUoHyd/geopolitiksimplified',
      liveUrl: 'https://geopolitiksimplified.onrender.com/',
    },
    {
      _id: '8',
      title: 'AadityaCom',
      description: 'A Java and Angular based eCommerce platform.',
      image: 'https://images.unsplash.com/photo-1664575602276-acd073f104c1',
      createdAt: new Date('2025-03-10'),
      githubUrl: 'https://github.com/AadityaUoHyd/AadityaCom',
      liveUrl: 'https://github.com/AadityaUoHyd/AadityaCom',
    },
    {
      _id: '9',
      title: 'Billing ABC',
      description: 'Java, PostgreSQL and React based retail shop market billing software',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      createdAt: new Date('2025-03-05'),
      githubUrl: 'https://github.com/AadityaUoHyd/billing-abc',
      liveUrl: 'https://github.com/AadityaUoHyd/billing-abc',
    },
    {
      _id: '10',
      title: 'ABCart',
      description: 'NextJs-15, Sanity.io CMS, Clerk auth, and React based online ecommerce shop for snacks',
      image: 'https://github.com/AadityaUoHyd/ABCart/blob/main/abcart2.png',
      createdAt: new Date('2025-03-15'),
      githubUrl: 'https://github.com/AadityaUoHyd/ABCart',
      liveUrl: 'https://abcart-sigma.vercel.app/',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
              🚀 Explore Our Projects
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
              Dive into real-world projects that reinforce your skills and creativity in tech development.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-md leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <p>
              Each project on this platform is designed to challenge you while teaching core concepts of <strong>Java</strong>, <strong>Python</strong>, and <strong>AI</strong>. From machine learning models to enterprise applications, you’ll build with purpose and learn as you go.
            </p>

            <p>
              Whether you’re a beginner eager to understand the basics or an intermediate learner aiming to polish your technical skills, these projects provide hands-on experience in a structured and enjoyable format.
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
              💡 <em>“Practice is the bridge between learning and mastery.”</em> Engage with each challenge and take your development journey to the next level.
            </div>

            <p>
              Ready to begin? Scroll down to explore featured projects or try building your own ideas using the concepts you’ve learned.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Projects Section */}
      <div className="mx-auto p-6 sm:p-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg py-6">
        <div className="flex flex-col gap-12">
          <div className="relative">
            <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 animate-fade-in">
              Featured Projects
            </h2>
            
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project._id} className="w-full animate-fade-in-up">
                <ProjectCard project={project} />
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
