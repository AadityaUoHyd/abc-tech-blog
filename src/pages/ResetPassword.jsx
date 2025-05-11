import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ResetPassword() {
  const [formData, setFormData] = useState({ password: '', confirmPassword: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.password || !formData.confirmPassword) {
      toast.error('Please fill all fields', { position: 'top-right', toastId: 'missing-fields' });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match', { position: 'top-right', toastId: 'password-mismatch' });
      return;
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters', { position: 'top-right', toastId: 'password-length' });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/reset-password`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include', 
        body: JSON.stringify({ token, password: formData.password }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success) {
        toast.success('Password reset successfully!', { position: 'top-right', toastId: 'reset-success' });
        setTimeout(() => navigate('/sign-in'), 3000);
      } else {
        toast.error(data.message || 'Invalid or expired token', { position: 'top-right', toastId: 'reset-error' });
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
        <p className="text-gray-800 dark:text-gray-300 text-center">Reset Your Password</p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <Label value="New Password" className="text-gray-700 dark:text-gray-300" />
            <TextInput
              type="password"
              placeholder="New password"
              id="password"
              onChange={handleChange}
              value={formData.password}
              className="mt-1"
            />
          </div>
          <div>
            <Label value="Confirm Password" className="text-gray-700 dark:text-gray-300" />
            <TextInput
              type="password"
              placeholder="Confirm password"
              id="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword}
              className="mt-1"
            />
          </div>
          <Button
            gradientDuoTone="purpleToPink"
            type="submit"
            disabled={loading || !token}
            className="w-full"
          >
            {loading ? (
              <>
                <Spinner size="sm" />
                <span className="pl-3">Resetting...</span>
              </>
            ) : (
              'Reset Password'
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

export default ResetPassword;