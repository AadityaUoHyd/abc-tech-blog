import { Button, Label, Spinner, TextInput } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function VerifyEmail() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  useEffect(() => {
    if (token) {
      setVerifyLoading(true);
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/verify-email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then((data) => {
          setVerifyLoading(false);
          if (data.success) {
            setVerified(true);
            toast.success('Email verified successfully!', { position: 'top-right', toastId: 'verify-success' });
            setTimeout(() => navigate('/sign-in'), 3000);
          } else {
            toast.error(data.message || 'Invalid or expired token', { position: 'top-right', toastId: 'verify-error' });
          }
        })
        .catch(() => {
          setVerifyLoading(false);
          toast.error('An error occurred', { position: 'top-right', toastId: 'verify-error' });
        });
    }
  }, [token, navigate]);

  const handleResend = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email', { position: 'top-right', toastId: 'missing-email' });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/resend-verification`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success) {
        toast.success('Verification email sent!', { position: 'top-right', toastId: 'resend-success' });
      } else {
        toast.error(data.message || 'Failed to send email', { position: 'top-right', toastId: 'resend-error' });
      }
    } catch (error) {
      setLoading(false);
      toast.error('An error occurred', { position: 'top-right', toastId: 'resend-error' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
        <div className="flex justify-center">
          <img src="https://res.cloudinary.com/ddgkgaffw/image/upload/v1746841963/logo_q4qqii.png" alt="ABC Tech Blog Logo" className="h-16 w-auto" />
        </div>
        <p className="text-gray-800 dark:text-gray-300 text-center">Verify Your Email</p>
        {verifyLoading ? (
          <div className="text-center">
            <Spinner size="lg" />
            <p className="mt-2 text-gray-700 dark:text-gray-300">Verifying...</p>
          </div>
        ) : verified ? (
          <div className="text-center">
            <p className="text-green-600 dark:text-green-400 text-lg font-medium">Email verified!</p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">Redirecting to sign-in...</p>
          </div>
        ) : (
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-center mb-4">
              Please check your email for a verification link. If you didn’t receive it, enter your email to resend.
            </p>
            <form className="space-y-6" onSubmit={handleResend}>
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
                  'Resend Verification Email'
                )}
              </Button>
            </form>
          </div>
        )}
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

export default VerifyEmail;