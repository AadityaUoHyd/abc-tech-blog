import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "https://res.cloudinary.com/ddgkgaffw/image/upload/v1746841964/hero1_tiywan.jpg",
    "https://res.cloudinary.com/ddgkgaffw/image/upload/v1746841963/hero2_ryrspv.jpg",
    "https://res.cloudinary.com/ddgkgaffw/image/upload/v1746841963/hero3_owtqvo.jpg",
    "https://res.cloudinary.com/ddgkgaffw/image/upload/v1746841964/hero4_q8ghim.jpg"
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/post/getposts?limit=9&sort=createdAt&order=desc`);
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch posts');
        }
        setPosts(data.posts.slice(0, 9));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section with Slider */}
      <div className="w-full flex flex-col">
        {/* Slider */}
        <div className="relative w-full h-[50vh] overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-full object-fit bg-gray-200 dark:bg-gray-800"
              />
              <div className="absolute inset-0"></div>
            </div>
          ))}
          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-[25vh] transform -translate-y-1/2 bg-gray-800/60 dark:bg-gray-200/60 p-3 rounded-full text-white dark:text-gray-800 hover:bg-gray-800/80 dark:hover:bg-gray-200/80 transition-colors duration-200 w-12 h-12 flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-[25vh] transform -translate-y-1/2 bg-gray-800/60 dark:bg-gray-200/60 p-3 rounded-full text-white dark:text-gray-800 hover:bg-gray-800/80 dark:hover:bg-gray-200/80 transition-colors duration-200 w-12 h-12 flex items-center justify-center"
            aria-label="Next Slide"
          >
            <FaArrowRight size={20} />
          </button>
          {/* Slider Dots */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-indigo-500 dark:bg-purple-400 scale-125'
                    : 'bg-gray-400 dark:bg-gray-600'
                }`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        {/* Text and Button Below Slider */}
        <div className="bg-white dark:bg-gray-800 py-12 px-4 sm:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight animate-fade-in">
            ABC Tech Blog
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 animate-slide-up">
            Explore the latest in tech with insightful articles, tutorials, and updates on AI, web development, and more.
          </p>
          <div className="flex justify-center mt-6">
            <Link to="/search">
              <Button
                gradientDuoTone="purpleToBlue"
                size="lg"
                className="px-6 py-2 font-semibold hover:scale-105 transition-transform duration-200 shadow-md"
              >
                Explore Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="p-6 sm:p-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg mx-4 my-4 ">
        {loading && (
          <div className="text-center">
            <svg
              className="animate-spin h-8 w-8 text-indigo-600 dark:text-purple-400 mx-auto"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8h-8z"
              ></path>
            </svg>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Loading posts...</p>
          </div>
        )}
        {error && (
          <div className="text-center text-red-500 dark:text-red-400">
            <p>{error}</p>
            <Button
              gradientDuoTone="pinkToOrange"
              size="sm"
              className="mx-auto mt-4 hover:scale-105 transition-transform duration-200"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        )}
        {posts && posts.length > 0 && !loading && !error && (
          <div className="flex flex-col gap-12">
            <div className="relative">
              <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200 animate-fade-in">
                Latest Tech Insights
              </h2>
              
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <div key={post._id} className="w-full gap-2">
                  <PostCard post={post} />
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Link
                to="/search"
                className="inline-block px-6 py-3 text-lg font-semibold hover:scale-105 text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-200 shadow-md animate-slide-up"
              >
                View All Articles
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
