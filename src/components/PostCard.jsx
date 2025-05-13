import { Link } from 'react-router-dom';

export default function PostCard({ post }) {
  return (
    <div className="relative w-full max-w-[430px] mx-auto border border-teal-500 hover:border-2 h-[400px] sm:h-[450px] overflow-hidden rounded-lg transition-all duration-300 group">
      <Link to={`/post/${post.slug}`} className="block h-[60%] sm:h-[55%]">
        <img
          src={post.image}
          alt={`Cover for ${post.title}`}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>
      <div className="p-4 flex flex-col gap-2 h-[40%] sm:h-[45%]">
        <h3 className="text-base sm:text-lg font-semibold line-clamp-2">
          {post.title}
        </h3>
        <span className="italic text-xs sm:text-sm text-gray-600">
          {post.category}
        </span>
        <Link
          to={`/post/${post.slug}`}
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white text-center py-2 px-4 rounded-b-md shadow-xl transition-all duration-300 group-hover:bottom-2 sm:hover:bottom-2 focus:bottom-2 m-2 text-sm sm:text-base"
        >
          Read Article
        </Link>
      </div>
    </div>
  );
}