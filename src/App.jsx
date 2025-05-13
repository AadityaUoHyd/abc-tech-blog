import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import PostPage from './pages/PostPage';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Search from './pages/Search';
import Tutorials from './pages/Tutorials';
import NewsLetter from './pages/NewsLetter';
import FAQ from './pages/FAQ';
import Career from './pages/Career';
import Community from './pages/Community';
import Events from './pages/Events';
import Support from './pages/Support';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/sign-in' element={<AuthPage />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/tutorials' element={<Tutorials />} />
          <Route path='/newsletter' element={<NewsLetter />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/careers' element={<Career />} />
          <Route path='/community' element={<Community />} />
          <Route path='/events' element={<Events />} />
          <Route path='/support' element={<Support />} />
          <Route element={<PrivateRoute />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route element={<OnlyAdminPrivateRoute />}>
            <Route path='/create-post' element={<CreatePost />} />
            <Route path='/update-post/:postId' element={<UpdatePost />} />
          </Route>
          <Route path='/projects' element={<Projects />} />
          <Route path='/post/:postSlug' element={<PostPage />} />
          <Route path='*' element={<Home />} />
        </Routes>
        <Footer />
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
      </BrowserRouter>
    </div>
  );
}