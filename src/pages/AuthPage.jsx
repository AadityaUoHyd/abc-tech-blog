import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { signInStart, signInSuccess, signInFailure, clearError } from '../redux/user/userSlice';
import OAuth from '../components/OAuth';
import 'react-toastify/dist/ReactToastify.css';

function AuthPage() {
  const [formData, setFormData] = useState({});
  const [activeTab, setActiveTab] = useState('sign-in');
  const { loading, error: errorMessage } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    const newTab = tab === 'signup' ? 'sign-up' : 'sign-in';
    if (newTab !== activeTab) {
      setActiveTab(newTab);
    }
    dispatch(clearError());
    return () => {
      dispatch(clearError());
    };
  }, [location.search, dispatch]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, { position: 'top-right', toastId: errorMessage });
      if (errorMessage.includes('verify your email')) {
        navigate('/verify-email');
      }
    }
  }, [errorMessage, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/sign-in?tab=${tab === 'sign-in' ? 'signin' : 'signup'}`);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error('Please fill all the fields', { position: 'top-right', toastId: 'missing-fields-signin' });
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        const errorMsg = data.message || 'Invalid credentials';
        dispatch(signInFailure(errorMsg));
        return;
      }
      if (res.ok) {
        dispatch(signInSuccess(data));
        toast.success('Signed in successfully!', { position: 'top-right', toastId: 'signin-success' });
        navigate('/');
      }
    } catch (error) {
      const errorMsg = error.message || 'An error occurred during sign-in';
      dispatch(signInFailure(errorMsg));
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      toast.error('Please fill out all fields', { position: 'top-right', toastId: 'missing-fields-signup' });
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        const errorMsg = data.message || 'An error occurred during sign-up';
        dispatch(signInFailure(errorMsg));
        return;
      }
      if (res.ok) {
        dispatch(signInFailure(null));
        toast.success('Signed up successfully! Please verify your email.', { position: 'top-right', toastId: 'signup-success' });
        navigate('/verify-email');
      }
    } catch (error) {
      const errorMsg = error.message || 'An error occurred during sign-up';
      dispatch(signInFailure(errorMsg));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex justify-center">
          <img src="https://res.cloudinary.com/ddgkgaffw/image/upload/v1746841963/logo_q4qqii.png" alt="ABC Tech Blog Logo" className="h-16 w-16" />
        </div>
        <p className="text-gray-800 dark:text-gray-300 text-center">Welcome to ABC TECH BLOG!</p>
        <div className="flex justify-center space-x-4 mb-4">
          <button
            className={`text-lg font-medium pb-2 ${activeTab === 'sign-in' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 dark:text-gray-300 hover:text-indigo-500'}`}
            onClick={() => handleTabChange('sign-in')}
          >
            Sign In
          </button>
          <button
            className={`text-lg font-medium pb-2 ${activeTab === 'sign-up' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600 dark:text-gray-300 hover:text-indigo-500'}`}
            onClick={() => handleTabChange('sign-up')}
          >
            Sign Up
          </button>
        </div>
        {activeTab === 'sign-in' ? (
          <div>
            <form className="space-y-6" onSubmit={handleSignIn}>
              <div>
                <Label value="Your email" className="text-gray-700 dark:text-gray-300" />
                <TextInput
                  type="email"
                  placeholder="your-emailid@example.com"
                  id="email"
                  onChange={handleChange}
                  value={formData.email || ''}
                  className="mt-1"
                />
              </div>
              <div>
                <Label value="Your password" className="text-gray-700 dark:text-gray-300" />
                <TextInput
                  type="password"
                  placeholder="**********"
                  id="password"
                  onChange={handleChange}
                  autocomplete="current-password"
                  value={formData.password || ''}
                  className="mt-1"
                />
              </div>
              <div className="text-sm text-right">
                <Link to="/forgot-password" className="text-blue-500 hover:underline font-medium">
                  Forgot Password?
                </Link>
              </div>
              <Button
                gradientDuoTone="purpleToPink"
                type="submit"
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
              <div className="flex justify-center mt-4">
                <OAuth />
              </div>
            </form>
            <div className="flex justify-between items-center mt-6 text-sm">
              <span className="text-gray-600 dark:text-gray-300">
                Don't have an account?
              </span>
              <button
                type="button"
                onClick={() => {
                  handleTabChange('sign-up');
                }}
                className="text-blue-500 hover:underline font-medium focus:outline-none"
              >
                Sign Up
              </button>
            </div>
          </div>
        ) : (
          <div>
            <form className="space-y-6" onSubmit={handleSignUp}>
              <div>
                <Label value="Your first name" className="text-gray-700 dark:text-gray-300" />
                <TextInput
                  type="text"
                  placeholder="Your first name"
                  id="username"
                  onChange={handleChange}
                  value={formData.username || ''}
                  className="mt-1"
                />
              </div>
              <div>
                <Label value="Your email" className="text-gray-700 dark:text-gray-300" />
                <TextInput
                  type="email"
                  placeholder="your-emailid@example.com"
                  id="email"
                  onChange={handleChange}
                  value={formData.email || ''}
                  className="mt-1"
                />
              </div>
              <div>
                <Label value="Your password" className="text-gray-700 dark:text-gray-300" />
                <TextInput
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={handleChange}
                  autocomplete="current-password"
                  value={formData.password || ''}
                  className="mt-1"
                />
              </div>
              <Button
                gradientDuoTone="purpleToPink"
                type="submit"
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  'Sign Up'
                )}
              </Button>
              <div className="flex justify-center mt-4">
                <OAuth />
              </div>
            </form>
            <div className="flex justify-between items-center mt-6 text-sm">
              <span className="text-gray-600 dark:text-gray-300">
                Have an account?
              </span>
              <button
                type="button"
                onClick={() => {
                  handleTabChange('sign-in');
                }}
                className="text-blue-500 hover:underline font-medium focus:outline-none"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
        
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme={document.documentElement.classList.contains('dark') ? 'dark' : 'light'}
        />

      </div>
    </div>
  );
}

export default AuthPage;
