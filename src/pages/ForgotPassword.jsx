import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email', { position: 'top-right', toastId: 'missing-email' });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success) {
        toast.success('Password reset email sent!', { position: 'top-right', toastId: 'reset-success' });
        setTimeout(() => navigate('/sign-in'), 3000);
      } else {
        toast.error(data.message || 'Failed to send reset email', { position: 'top-right', toastId: 'reset-error' });
      }
    } catch (error) {
      setLoading(false);
      toast.error('An error occurred', { position: 'top-right', toastId: 'reset-error' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex justify-center">
          <img src="https://res.cloudinary.com/ddgkgaffw/image/upload/v1746841963/logo_q4qqii.png" alt="ABC Tech Blog Logo" className="h-16 w-auto" />
        </div>
        <p className="text-gray-800 dark:text-gray-300 text-center">Forgot Password</p>
        <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
          Enter your email to receive a password reset link.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label value="Your email" className="text-gray-700 dark:text-gray-300" />
            <TextInput
              type="email"
              placeholder="xyz@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
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
                <span className="pl-3">Sending...</span>
              </>
            ) : (
              'Send Reset Link'
            )}
          </Button>
        </form>
        <div className="text-sm text-center mt-6">
          <button
            type="button"
            onClick={() => navigate('/sign-in')}
            className="text-blue-500 hover:underline font-medium"
          >
            Back to Sign In
          </button>
        </div>
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

export default ForgotPassword;