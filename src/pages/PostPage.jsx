import { Button, Spinner } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaWhatsapp, FaTelegram, FaFacebook, FaTwitter, FaLink } from 'react-icons/fa';
import CommentSection from '../components/CommentSection';
import PostCard from '../components/PostCard';

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleShare = (platform) => {
    const url = `${window.location.origin}/post/${postSlug}`;
    const title = encodeURIComponent(post?.title || 'Check out this article!');
    let shareUrl;

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${title}%20${encodeURIComponent(url)}`;
        break;
      case 'telegram':
        shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${title}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${title}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        });
        return;
      default:
        return;
    }

    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  if (loading)
    return (
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800'>
        <Spinner size='xl' className='text-indigo-600 dark:text-purple-500' />
      </div>
    );

  return (
    <main className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-8 px-4 sm:px-6 lg:px-8'>
      <div className='mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden'>
        {/* Header Section */}
        <header className='p-6 sm:p-8'>
          <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold font-serif text-gray-900 dark:text-white mb-4 leading-tight tracking-tight border-b-2 border-gradient-to-r from-indigo-500 to-purple-500 pb-4'>
            {post && post.title}
          </h1>
          <div
  className="flex flex-col sm:flex-row justify-between mx-auto zw-full text-sm text-gray-600 dark:text-gray-400 border-b-2 border-gradient-to-r from-indigo-500 to-purple-500 pb-4"
>
  <span className="w-full sm:w-auto">
    created on :{" "}
    {post && new Date(post.createdAt).toLocaleDateString()}
  </span>

  <Link
    to={`/search?category=${post && post.category}`}
    className="w-full sm:w-auto"
  >
    <Button
      color="gray"
      pill
      size="sm"
      className="w-full sm:w-auto bg-indigo-100 dark:bg-purple-900 text-indigo-700 dark:text-purple-300 hover:bg-indigo-200 dark:hover:bg-purple-800 transition-colors duration-200"
    >
      {post && post.category}
    </Button>
  </Link>

  <span className="w-full sm:w-auto italic">
    {post && (post.content.length / 1000).toFixed(0)} mins read
  </span>
</div>

        </header>

        {/* Featured Image */}
        <div className='px-6 sm:px-8'>
          <img
            src={post && post.image}
            alt={post && post.title}
            className='w-full h-auto max-h-[500px] object-cover rounded-xl shadow-lg mx-auto'
          />
        </div>

        {/* Content Area */}
        <article className='px-6 sm:px-8 py-6 bg-gray-50 dark:bg-gray-700 rounded-xl mx-4 sm:mx-8 my-6'>
          <div
            className='prose prose-lg max-w-none text-gray-800 dark:text-gray-200 leading-relaxed post-content'
            dangerouslySetInnerHTML={{ __html: post && post.content }}
          ></div>
        </article>

        {/* Share Section */}
        <section className='px-6 sm:px-8 py-4 flex flex-col items-left'>
          <h2 className='text-lg sm:text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
            Share this article
          </h2>
          <div className='flex flex-col sm:flex-row gap-3'>
            <Button
              color='gray'
              size='md'
              pill
              onClick={() => handleShare('whatsapp')}
              className='bg-gray-200 dark:bg-gray-700 hover:bg-green-500 hover:text-white w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform duration-200'
              title='Share on WhatsApp'
            >
              <FaWhatsapp className='text-xl' />
            </Button>
            <Button
              color='gray'
              size='md'
              pill
              onClick={() => handleShare('telegram')}
              className='bg-gray-200 dark:bg-gray-700 hover:bg-blue-500 hover:text-white w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform duration-200'
              title='Share on Telegram'
            >
              <FaTelegram className='text-xl' />
            </Button>
            <Button
              color='gray'
              size='md'
              pill
              onClick={() => handleShare('facebook')}
              className='bg-gray-200 dark:bg-gray-700 hover:bg-blue-700 hover:text-white w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform duration-200'
              title='Share on Facebook'
            >
              <FaFacebook className='text-xl' />
            </Button>
            <Button
              color='gray'
              size='md'
              pill
              onClick={() => handleShare('twitter')}
              className='bg-gray-200 dark:bg-gray-700 hover:bg-blue-400 hover:text-white w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform duration-200'
              title='Share on Twitter'
            >
              <FaTwitter className='text-xl' />
            </Button>
            <Button
              color='gray'
              size='md'
              pill
              onClick={() => handleShare('copy')}
              className='bg-gray-200 dark:bg-gray-700 hover:bg-gray-500 hover:text-white w-12 h-12 flex items-center justify-center transform hover:scale-110 transition-transform duration-200'
              title='Copy Link'
            >
              <FaLink className='text-xl' />
            </Button>
          </div>
        </section>

        {/* Comments Section */}
        <section className='max-w-2xl px-6 sm:px-8 py-6 border-t border-gray-200 dark:border-gray-700'>
          <h2 className='text-2xl  font-semibold text-gray-800 dark:text-white mb-4'>
            Comments
          </h2>
          <CommentSection postId={post._id} />
        </section>

        {/* Recent Articles Section */}
        <section className='px-6 sm:px-8 py-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-xl mx-4 sm:mx-8 mb-8'>
          <h2 className='text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-6'>
            Explore More Articles
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {recentPosts &&
              recentPosts.map((post) => (
                <div
                  key={post._id}
                  className='transform hover:scale-105 transition-transform duration-200'
                >
                  <PostCard post={post} />
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8">
              <Link
                to="/search"
                className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:from-indigo-600 hover:to-purple-600 hover:scale-105 transition-all duration-200 shadow-md animate-slide-up"
              >
                View All Articles
              </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
