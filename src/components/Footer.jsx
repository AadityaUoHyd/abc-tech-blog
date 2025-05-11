import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsGithub, BsLinkedin, BsYoutube, BsMedium, BsGlobeCentralSouthAsia  } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer
      container
      className="border-t-8 border-purple-600 bg-white dark:bg-gray-900 shadow-lg transition-colors duration-300 py-8"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:grid-cols-1 gap-8">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white hover:scale-105 transition-transform duration-200"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl text-white shadow-xl">
                ABC TECH BLOG
              </span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-sm max-w-xs">
              Empowering tech enthusiasts with insights, tutorials, and updates on the latest innovations.
            </p>
            <p className="mt-8 text-gray-600 dark:text-gray-400 text-sm max-w-xs">
              Connect for Freelancing - <span className='text:black dark:text-white hover:text-blue-500 dark:hover:text-blue-500 hover:underline dark:hover:underline'><a href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/">Aaditya B Chatterjee</a>.</span>
            </p>
          </div>

          <div className="flex flex-col items-center justify-center text-center bg-gray-50 dark:bg-gray-800 p-2 rounded-xl shadow-md">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Fuel My Coffee
            </h4>
            <img
              src="https://res.cloudinary.com/ddgkgaffw/image/upload/v1746921297/bmc_qr_v8v4ay.png"
              alt="Buy Me a Coffee QR"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-md shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
              Appreciate my content? <p>Scan the code, or<br/>
              <a 
                href="https://buymeacoffee.com/aadiraj48" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1 text-indigo-600 dark:text-purple-400 hover:underline"
              >
                buy me a coffee
              </a>
              .
              </p>
            </div>
          </div>


          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12 mt-8 sm:mt-0">
            <div>
              <Footer.Title
                title="Quick Links"
                className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
              />
              <Footer.LinkGroup col className="space-y-3">
                <Footer.Link
                  href="/"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Home
                </Footer.Link>
                <Footer.Link
                  href="/about"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  About
                </Footer.Link>
                <Footer.Link
                  href="/contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Contact
                </Footer.Link>
                <Footer.Link
                  href="/projects"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Projects
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Resources"
                className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
              />
              <Footer.LinkGroup col className="space-y-3">
                <Footer.Link
                  href="/tutorials"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Tutorials
                </Footer.Link>
                <Footer.Link
                  href="https://geopolitiksimplified.onrender.com/"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Geopolitical Blogs
                </Footer.Link>
                <Footer.Link
                  href="/newsletter"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Newsletter
                </Footer.Link>
                <Footer.Link
                  href="/faq"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  FAQ
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Connect"
                className="text-lg font-semibold text-gray-900 dark:text-white mb-4"
              />
              <Footer.LinkGroup col className="space-y-3">
                <Footer.Link
                  href="/careers"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Careers
                </Footer.Link>
                <Footer.Link
                  href="/community"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Community
                </Footer.Link>
                <Footer.Link
                  href="/events"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Events
                </Footer.Link>
                <Footer.Link
                  href="/support"
                  className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-base"
                >
                  Support
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider className="border-gray-200 dark:border-gray-700 my-8" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="/"
            by="ABC TECH BLOG. All Rights Reserved."
            year={new Date().getFullYear()}
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200"
          />
          <div className="flex gap-6 sm:mt-0 mt-6 sm:justify-center">
            
            <Footer.Icon
              href="https://www.instagram.com/geopolitiksimplified/"
              icon={BsInstagram}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-xl"
            />
            <Footer.Icon
              href="https://x.com/AadityaRaj8"
              icon={BsTwitter}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-xl"
            />
            <Footer.Icon
              href="https://github.com/AadityaUoHyd"
              icon={BsGithub}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-xl"
            />
            <Footer.Icon
              href="https://www.linkedin.com/in/aaditya-bachchu-chatterjee-0485933b/"
              icon={BsLinkedin}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-xl"
            />
            <Footer.Icon
              href="https://www.youtube.com/@geopolitiksimplified"
              icon={BsYoutube}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-xl"
            />
            <Footer.Icon
              href="https://medium.com/@aadityabchatterjee"
              icon={BsMedium}
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-xl"
            />
            <Footer.Icon
              href="https://geopolitiksimplified.onrender.com/"
              icon={BsGlobeCentralSouthAsia }
              className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-purple-400 transition-colors duration-200 text-xl"
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}