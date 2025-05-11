import { Button, Select, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';

export default function Search() {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: '',
    sort: 'desc',
    category: 'uncategorized',
  });

  console.log(sidebarData);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 12;

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    const sortFromUrl = urlParams.get('sort');
    const categoryFromUrl = urlParams.get('category');
    if (searchTermFromUrl || sortFromUrl || categoryFromUrl) {
      setSidebarData({
        ...sidebarData,
        searchTerm: searchTermFromUrl,
        sort: sortFromUrl,
        category: categoryFromUrl,
      });
    }

    const fetchPosts = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/post/getposts?${searchQuery}&limit=${postsPerPage}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts);
        setTotalPosts(data.totalPosts || data.posts.length);
        setLoading(false);
        if (data.posts.length === postsPerPage) {
          setShowMore(true);
        } else {
          setShowMore(false);
        }
      }
    };
    fetchPosts();
  }, [location.search]);

  const handleChange = (e) => {
    if (e.target.id === 'searchTerm') {
      setSidebarData({ ...sidebarData, searchTerm: e.target.value });
    }
    if (e.target.id === 'sort') {
      const order = e.target.value || 'desc';
      setSidebarData({ ...sidebarData, sort: order });
    }
    if (e.target.id === 'category') {
      const category = e.target.value || 'uncategorized';
      setSidebarData({ ...sidebarData, category });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', sidebarData.searchTerm);
    urlParams.set('sort', sidebarData.sort);
    urlParams.set('category', sidebarData.category);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const handleShowMore = async () => {
    const numberOfPosts = posts.length;
    const startIndex = numberOfPosts;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    const searchQuery = urlParams.toString();
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/post/getposts?${searchQuery}`);
    if (!res.ok) {
      return;
    }
    if (res.ok) {
      const data = await res.json();
      setPosts([...posts, ...data.posts]);
      setTotalPosts(data.totalPosts || posts.length + data.posts.length);
      if (data.posts.length === postsPerPage) {
        setShowMore(true);
      } else {
        setShowMore(false);
      }
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    const startIndex = (page - 1) * postsPerPage;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('startIndex', startIndex);
    urlParams.set('limit', postsPerPage);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  const totalPages = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];
  for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen">
      <div className="p-7">
        {/* Filter Form */}
        <div className="w-full p-4 bg-white dark:bg-gray-600 rounded-2xl shadow-md">
        <form
          className="flex flex-col sm:flex-row justify-between gap-10 mb-4 mt-4 animate-fade-in w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap font-semibold text-gray-800 dark:text-gray-200">
              Search Term:
            </label>
            <TextInput
              placeholder="Search..."
              id="searchTerm"
              type="text"
              value={sidebarData.searchTerm}
              onChange={handleChange}
              className="w-40 sm:w-48"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold text-gray-800 dark:text-gray-200">Sort:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.sort}
              id="sort"
              className="w-40 sm:w-48"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <label className="font-semibold text-gray-800 dark:text-gray-200">Category:</label>
            <Select
              onChange={handleChange}
              value={sidebarData.category}
              id="category"
              className="w-40 sm:w-48"
            >
              <option value="uncategorized">Uncategorized</option>
              <option value="java">Java</option>
              <option value="spring">Spring Boot</option>
              <option value="python">Python</option>
              <option value="django">Django</option>
              <option value="ai">AI/ML</option>
              <option value="javascript">JavaScript</option>
              <option value="react">React</option>
              <option value="nextjs">Next.js</option>
              <option value="angular">Angular</option>
              <option value="databases">Databases</option>
              <option value="devops">DevOps</option>
              <option value="design_patterns">Design Patterns</option>
              <option value="algorithms">Data Structure & Algorithms</option>
              <option value="tech">Tech talk</option>
            </Select>
          </div>
          <Button
            type="submit"
            gradientDuoTone="purpleToBlue"
            className="hover:scale-105 transition-transform duration-200 shadow-md animate-slide-up"
          >
            Apply Filters
          </Button>
        </form>
      </div>


        {/* Posts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500 dark:text-gray-400 col-span-full text-center">
              No posts found.
            </p>
          )}
          {loading && (
            <p className="text-xl text-gray-500 dark:text-gray-400 col-span-full text-center">
              Loading...
            </p>
          )}
          {!loading &&
            posts &&
            posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage).map((post) => (
              <div key={post._id} className="w-full animate-fade-in-up">
                <PostCard post={post} />
              </div>
            ))}
        </div>

        {/* Pagination */}
        {totalPosts > postsPerPage && (
          <div className="flex justify-center mt-8 space-x-2">
            <Button
              onClick={() => handlePageChange(1)}
              disabled={currentPage === 1}
              gradientDuoTone="purpleToBlue"
              size="sm"
              className="hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              First
            </Button>
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              gradientDuoTone="purpleToBlue"
              size="sm"
              className="hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              Previous
            </Button>
            {pageNumbers.map((page) => (
              <Button
                key={page}
                onClick={() => handlePageChange(page)}
                gradientDuoTone={currentPage === page ? 'purpleToPink' : 'purpleToBlue'}
                size="sm"
                className={`hover:scale-105 transition-transform duration-200 text-gray-800 dark:text-gray-200 ${
                  currentPage === page ? 'ring-2 ring-indigo-500' : ''
                }`}
              >
                {page}
              </Button>
            ))}
            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              gradientDuoTone="purpleToBlue"
              size="sm"
              className="hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              Next
            </Button>
            <Button
              onClick={() => handlePageChange(totalPages)}
              disabled={currentPage === totalPages}
              gradientDuoTone="purpleToBlue"
              size="sm"
              className="hover:scale-105 transition-transform duration-200 disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-gray-700 text-gray-800 dark:text-gray-200"
            >
              Last
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}