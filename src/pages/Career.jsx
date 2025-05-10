import { Button, TextInput, Card } from 'flowbite-react';

export default function Careers() {
  /*
  // Optional: Handle form submission with API
  const [formData, setFormData] = useState({ name: '', email: '', resume: '' });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/careers/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Application failed');
      alert('Application submitted successfully!');
      setFormData({ name: '', email: '', resume: '' });
    } catch (err) {
      alert('Error: ' + err.message);
    }
  };
  */

  const jobs = [
    { id: '1', title: 'Technical Writer (Java)', description: 'Create engaging Java tutorials and guides.', location: 'Remote' },
    { id: '2', title: 'Python Content Developer', description: 'Develop Python-based projects and tutorials.', location: 'Remote' },
    { id: '3', title: 'AI/ML Content Specialist', description: 'Write advanced AI/ML tutorials.', location: 'Remote' },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 transition-colors duration-300 min-h-screen">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent animate-fade-in">
              💼 Join Our Team
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 animate-slide-up">
              Explore career opportunities at ABC TECH BLOG and contribute to our tech community.
            </p>
          </div>

          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-md leading-relaxed bg-white/80 dark:bg-gray-800/80 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <p>
              At <strong>ABC TECH BLOG</strong>, we’re passionate about sharing knowledge in <strong>Java</strong>, <strong>Python</strong>, and <strong>AI/ML</strong>. Join our team to create impactful content that inspires and educates developers worldwide.
            </p>
            <p>
              We offer remote, flexible roles for writers, developers, and content creators. If you love technology and storytelling, we’d love to hear from you!
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-xl border-l-4 border-blue-500 text-blue-800 dark:text-blue-300">
              💡 <em>“Shape the future of tech education with us.”</em> Apply today!
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
                Open Positions
              </h2>
              </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <Card key={job.id} className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{job.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{job.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">Location: {job.location}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="space-y-6 animate-fade-in">
            <div className="relative">
              <h2 className="text-3xl font-semibold text-center text-gray-800 dark:text-gray-200">
                Apply Now
              </h2>
              </div>
            <form className="flex flex-col gap-4 max-w-md mx-auto">
              <TextInput
                placeholder="Your name"
                type="text"
                id="name"
                required
                // value={formData.name}
                // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <TextInput
                placeholder="Your email"
                type="email"
                id="email"
                required
                // value={formData.email}
                // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <TextInput
                placeholder="Resume URL or details"
                type="text"
                id="resume"
                required
                // value={formData.resume}
                // onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
              />
              <Button
                type="submit"
                gradientDuoTone="purpleToBlue"
                className="hover:scale-105 transition-transform duration-200 shadow-md"
                // onClick={handleSubmit}
              >
                Submit Application
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}