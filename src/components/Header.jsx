import { Avatar, Button, Dropdown, Navbar, TextInput } from 'flowbite-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { Sun, Moon } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/theme/themeSlice';
import { signoutSuccess } from '../redux/user/userSlice';
import { useEffect, useState } from 'react';

export default function Header() {
  const path = useLocation().pathname;
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch('/api/user/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
        navigate('/sign-in');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  return (
    <Navbar className='border-b-2 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 py-3 flex-wrap'>
      <Link
        to='/'
        className='self-center whitespace-nowrap text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white hover:scale-105 transition-transform duration-200'
      >
        <span className='px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl text-white shadow-xl'>
          ABC TECH BLOG
        </span>
      </Link>
      
      <form onSubmit={handleSubmit} className="flex items-center gap-3 w-full px-2 sm:max-w-md">
        <TextInput
          type="text"
          placeholder="Search articles by title..."
          rightIcon={AiOutlineSearch}
          className="flex-1 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-indigo-300 dark:border-purple-500 focus:ring-4 focus:ring-indigo-500 dark:focus:ring-purple-500 text-lg py-3 pl-5 pr-12 shadow-sm dark:shadow-none transition-all duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button
          type="submit"
          className="lg:hidden w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500 hover:bg-indigo-600 text-white transition duration-200"
          pill
        >
          <AiOutlineSearch className="text-xl" />
        </Button>
      </form>
      <div className='flex gap-3 md:order-2 items-center'>
        <Button
          className='w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200'
          pill
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === 'light' ? <Sun className='text-yellow-600 w-6 h-6' /> : <Moon className='text-black-500 w-6 h-6' />}
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt='user'
                img={currentUser.profilePicture || 'https://res.cloudinary.com/ddgkgaffw/image/upload/v1746756938/avatar-icon_pzqgzx.png'}
                rounded
                className='hover:ring-blue-400 dark:hover:ring-offset-rose-950 transition-all duration-200 w-12 h-12'
              />
            }
            className='bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-xl rounded-xl'
          >
            <Dropdown.Header className='px-4 py-3'>
              <span className='block text-sm font-semibold text-gray-900 dark:text-white'>@{currentUser.username}</span>
              <span className='block text-sm text-gray-600 dark:text-gray-400 truncate'>{currentUser.email}</span>
            </Dropdown.Header>
            <Link to={'/dashboard?tab=profile'}>
              <Dropdown.Item className='px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200'>
                Profile
              </Dropdown.Item>
            </Link>
            <Dropdown.Divider className='border-gray-200 dark:border-gray-700' />
            <Dropdown.Item
              className='px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-red-50 dark:hover:bg-red-50 hover:text-red-600 dark:hover:text-red-400 transition-colors duration-200'
              onClick={handleSignout}
            >
              Sign out
            </Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to='/sign-in'>
            <Button
              gradientDuoTone='purpleToBlue'
              outline
              className='rounded-lg font-semibold hover:scale-105 transition-transform duration-200'
            >
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle className='text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-2.5 transition-colors duration-200' />
      </div>
      <Navbar.Collapse className='mt-2 md:mt-0 md:ml-2'>
        <div className='flex gap-3'>
          <Navbar.Link active={path === '/'} as={'div'} className='py-2'>
            <Link
              to='/'
              className={`text-lg font-semibold ${path === '/' ? 'text-indigo-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'} hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200`}
            >
              Home
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/about'} as={'div'} className='py-2'>
            <Link
              to='/about'
              className={`text-lg font-semibold ${path === '/about' ? 'text-indigo-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'} hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200`}
            >
              About
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/contact'} as={'div'} className='py-2 hidden md:block'>
            <Link
              to='/contact'
              className={`text-lg font-semibold ${path === '/contact' ? 'text-indigo-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'} hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200`}
            >
              Contact
            </Link>
          </Navbar.Link>
          <Navbar.Link active={path === '/projects'} as={'div'} className='py-2'>
            <Link
              to='/projects'
              className={`mr-4 text-lg font-semibold ${path === '/projects' ? 'text-indigo-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-200'} hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200`}
            >
              Projects
            </Link>
          </Navbar.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}