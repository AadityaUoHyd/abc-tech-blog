import { Button } from 'flowbite-react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function OAuth() {
  const auth = getAuth(app);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      console.log('Google sign-in success:', resultsFromGoogle.user.uid);
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        }),
        credentials: 'include',
      });
      const data = await res.json();
      if (res.ok) {
        console.log('OAuth: Redux user ID:', data._id);
        // Check cookies
        const cookies = document.cookie.split(';').map(cookie => cookie.trim());
        console.log('OAuth: Cookies after sign-in:', cookies);
        dispatch(signInSuccess(data));
        navigate('/');
      } else {
        const errorMsg = data.message || 'Failed to authenticate with server';
        console.error('Backend auth error:', errorMsg);
        dispatch(signInFailure(errorMsg));
        toast.error(errorMsg, { position: 'top-right', toastId: 'google-backend-error' });
      }
    } catch (error) {
      const errorMsg = error.code || error.message || 'Failed to sign in with Google';
      console.error('Google sign-in error:', error);
      dispatch(signInFailure(errorMsg));
      toast.error(errorMsg, { position: 'top-right', toastId: 'google-signin-error' });
    }
  };
  return (
    <Button type='button' gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
      <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
      Continue with Google
    </Button>
  );
}