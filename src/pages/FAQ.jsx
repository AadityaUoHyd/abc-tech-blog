import { Accordion } from 'flowbite-react';

export default function FAQ() {
  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
              ❓ Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
              Find answers to common questions about ABC TECH BLOG and our content.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-md leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <p>
              Welcome to the <strong>ABC TECH BLOG</strong> FAQ page. Here, we address your questions about our tutorials, newsletters, and how to get involved. Whether you’re curious about our focus on <strong>Java</strong>, <strong>Python</strong>, and <strong>AI/ML</strong> or want to contribute, we’ve got you covered.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
              💡 <em>“Got a question? We have the answers!”</em> Explore below or contact us for more details.
            </div>
          </div>

          {/* FAQ Section */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
                Common Questions
              </h2>
              </div>
            <Accordion collapseAll className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-xl">
              <Accordion.Panel>
                <Accordion.Title className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                  What is ABC TECH BLOG about?
                </Accordion.Title>
                <Accordion.Content className="text-gray-700 dark:text-gray-300">
                  <p>
                    ABC TECH BLOG provides tutorials, projects, and insights on <strong>Java</strong>, <strong>Python</strong>, <strong>AI/ML</strong>, and other technologies. Our content is designed for beginners and experienced developers alike, offering practical, hands-on learning.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                  How can I subscribe to the newsletter?
                </Accordion.Title>
                <Accordion.Content className="text-gray-700 dark:text-gray-300">
                  <p>
                    Visit our <a href="/newsletter" className="text-indigo-500 hover:text-indigo-600 underline">Newsletter page</a> and enter your email to subscribe. You’ll receive weekly updates on tutorials, projects, and tech tips.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                  Can I contribute to ABC TECH BLOG?
                </Accordion.Title>
                <Accordion.Content className="text-gray-700 dark:text-gray-300">
                  <p>
                    Yes! We welcome contributions. Contact us via our <a href="/contact" className="text-indigo-500 hover:text-indigo-600 underline">Contact page</a> to submit tutorial ideas, projects, or guest posts.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                  Where can I find specific tutorials?
                </Accordion.Title>
                <Accordion.Content className="text-gray-700 dark:text-gray-300">
                  <p>
                    Use our <a href="/search" className="text-indigo-500 hover:text-indigo-600 underline">Search page</a> to filter tutorials by category (e.g., Java, Python, AI/ML) or browse our <a href="/tutorials" className="text-indigo-500 hover:text-indigo-600 underline">Tutorials page</a> for featured content.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
              <Accordion.Panel>
                <Accordion.Title className="text-lg font-semibold text-gray-800 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/20">
                  How often is new content published?
                </Accordion.Title>
                <Accordion.Content className="text-gray-700 dark:text-gray-300">
                  <p>
                    We publish new tutorials and projects weekly. Subscribe to our newsletter or follow us on social media for updates on the latest content.
                  </p>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>

        </div>
      </div>
    </div>
  );
}