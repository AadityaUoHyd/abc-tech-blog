# ABC Tech Blog
Welcome to ABC Tech Blog, a personal tech blog by Aaditya B Chatterjee, a Master of Computer Application graduate (2011-14) from the University of Hyderabad, India. This platform showcases my passion for technology, sharing insights on Java, Spring Boot, Python, AI/ML, JavaScript, React, and more. Whether you're a developer, tech enthusiast, or curious learner, this blog offers tutorials, tips, and discussions to inspire and inform.
Built as a full-stack client-server, ABC Tech Blog combines a modern React frontend (this repo) with a robust Node.js backend(another repo), deployed seamlessly on Vercel. Explore, learn, and connect with me through the contact form or my social channels!

## Features

- Rich Content Creation: Write and publish blog posts with a WYSIWYG editor (React Quill), supporting categories like Java, Spring Boot, Python, Django, AI/ML, and DevOps.
- Image Uploads: Upload 16:9 aspect ratio images for post headers using Firebase Storage, with real-time progress tracking and file size display.
- Contact Form: Reach out via an integrated form powered by Web3Forms, featuring toast notifications for user feedback.
- User Authentication: Sign up, log in, and verify emails with Google OAuth and JWT-based authentication.
- Responsive Design: Enjoy a sleek, dark/light mode UI with Flowbite React and Tailwind CSS, optimized for all devices.
- Social Integration: Connect with me on X, LinkedIn, GitHub, YouTube, Medium, and my Geopolitical Blog.
- SEO-Friendly: Client-side routing with React Router and optimized builds for fast loading.

## Tech Stack
### Frontend (This Repository - "abc-tech-blog")

- React: Component-based UI with hooks and Redux for state management.
- Vite: Lightning-fast build tool for development and production.
- Flowbite React: Beautiful, accessible UI components.
- Tailwind CSS: Utility-first CSS for responsive styling.
- React Quill: Rich text editor for post content.
- Firebase: Storage for image uploads and authentication.
- React Toastify: Elegant toast notifications.
- React Circular Progressbar: Visual feedback for image uploads.

### Backend (Another Repository - "abc-tech-blog-backend")

- Node.js & Express: RESTful API for posts, users, and comments.
- MongoDB: NoSQL database for storing blog data.
- Mongoose: Schema-based modeling for MongoDB.
- Nodemailer: Email notifications for verification and password resets.
- JWT: Secure authentication tokens.
- Bcryptjs: Password hashing for user security.

### Deployment

- Vercel: deployment for frontend and backend.
- MongoDB Atlas: Cloud-hosted database.
- Firebase Storage: Scalable image storage.

## Project Structure
```

abc-tech-blog/            # Vite/React frontend/CLIENT
  ├── src/
  │   ├── components/     # Reusable UI components
  │   ├── pages/          # Contact.jsx, CreatePost.jsx, etc.
  │   ├── firebase.js     # Firebase configuration
  │   └── App.jsx         # Main app component
  ├── package.json        # Frontend dependencies and scripts
  |__ .env
  └── vite.config.js      # Vite configuration with proxy
  
  
  
abc-tech-blog-backend  
├── api/                    # Node.js/Express backend/SERVER
│   ├── routes/             # API routes (user, auth, post, comment)
│   ├── index.js            # Express server entry point
│   └── package.json        # Backend dependencies and scripts
├── .env                    # Environment variables (not committed)
├── .gitignore              # Git ignore file
├── package.json            # root scripts
├── vercel.json             # Vercel  configuration
└── README.md               # Project documentation

```

## Prerequisites

- Node.js: v18 or higher
- npm: v8 or higher
- MongoDB Atlas: For database hosting
- Firebase: For image storage and authentication
- Vercel Account: For deployment
- Web3Forms Account: For contact form submissions
- Gmail Account: For Nodemailer (with App Password)

## Setup Instructions
1. Clone the Repository
git clone https://github.com/AadityaUoHyd/abc-tech-blog.git
cd abc-tech-blog

2. Install Dependencies
Install root and frontend dependencies:
npm install
cd abc-tech-blog-client
npm install
cd ..

3. Configure Environment Variables
Create a .env file in the root (abc-tech-blog/.env) with the following:
### Backend Variables
```
PORT=3000
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
BACKEND_URL=http://localhost:3000
MONGO=mongodb+srv://<username>:<password>@cluster0.3yp2ucm.mongodb.net/
JWT_SECRET=<your-jwt-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GMAIL_USER=<your-gmail-address>
GMAIL_APP_PASSWORD=<your-gmail-app-password>
FIREBASE_API_KEY=<your-firebase-api-key>
WEB3FORMS_ACCESS_KEY=<your-web3forms-access-key>
```

### Frontend Variables (Vite)
```
VITE_BACKEND_URL=http://localhost:3000
VITE_GOOGLE_CLIENT_ID=<your-google-client-id>
VITE_FIREBASE_API_KEY=<your-firebase-api-key>
VITE_WEB3FORMS_ACCESS_KEY=<your-web3forms-access-key>
```

- Replace placeholders with your credentials.
- Obtain MONGO from MongoDB Atlas.
- Get FIREBASE_API_KEY from Firebase Console.
- Set up WEB3FORMS_ACCESS_KEY at Web3Forms.
- Create a Gmail App Password for GMAIL_APP_PASSWORD.
- Use Google Cloud Console for GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.

4. Run the Backend
npm run dev


The backend runs on http://localhost:3000.
Expect: MongoDb is connected and Server is running on port 3000!.

5. Run the Frontend
cd abc-tech-blog-client
npm run dev


The frontend runs on http://localhost:5173.
The /api proxy routes requests to http://localhost:3000/api.

6. Test Features

- Create a Post: Visit /create-post, upload a 16:9 image, and publish.
- Contact Form: Go to /contact, submit a message, and check Web3Forms dashboard.
- Authentication: Test signup at /sign-in?tab=signup and Google OAuth.

7. Build for Production
npm run build


Installs dependencies and builds the frontend to abc-tech-blog-client/dist.

## Vercel Deployment

- Push to GitHub:
```git add .
git commit -m "Initial commit"
git push origin main
```

## Import to Vercel:
- Sign in to Vercel.
- Create a new project and import your GitHub repository (abc-tech-blog).
  
### Configure: 
- Framework Preset: client-server.
- Root Directory: Leave blank (uses vercel.json).
- Environment Variables:

```
PORT=3000
FRONTEND_URL=https://your-vercel-app.vercel.app
NODE_ENV=production
BACKEND_URL=https://your-vercel-app.vercel.app
MONGO=mongodb+srv://<username>:<password>@cluster0.3yp2ucm.mongodb.net/
JWT_SECRET=<your-jwt-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
GMAIL_USER=<your-gmail-address>
GMAIL_APP_PASSWORD=<your-gmail-app-password>
FIREBASE_API_KEY=<your-firebase-api-key>
WEB3FORMS_ACCESS_KEY=<your-web3forms-access-key>
VITE_BACKEND_URL=https://your-vercel-app.vercel.app
VITE_GOOGLE_CLIENT_ID=<your-google-client-id>
VITE_FIREBASE_API_KEY=<your-firebase-api-key>
VITE_WEB3FORMS_ACCESS_KEY=<your-web3forms-access-key>
```

- Replace your-vercel-app.vercel.app with the assigned domain post-deployment.




- Deploy:

Click “Deploy” in Vercel.
Update FRONTEND_URL, BACKEND_URL, and VITE_BACKEND_URL with the Vercel domain.
Redeploy if necessary.


- Test Deployment:

Visit https://abc-tech-blog.vercel.app.
Test post creation, contact form, and authentication.
Check Vercel logs for errors.



## Contributing
I welcome feedback, bug reports, or feature suggestions! Please:

Open an issue on GitHub.
Submit a pull request with clear descriptions.
Contact me via the blog’s contact form.

## Contact
Connect with me, Aaditya B Chatterjee, to discuss tech, collaborate, or share ideas:

```
Email: aadityaraj.raj402@gmail.com
X: @AadityaRaj8
LinkedIn: Aaditya B Chatterjee
GitHub: AadityaUoHyd
YouTube: @geopolitiksimplified
Medium: @aadityabchatterjee
Geopolitical Blog: Dear ABC
Contact Form: ABC Tech Blog Contact
```

## License
This project is licensed under the ISC License. See the LICENSE file for details.

Built with 💻 by Aaditya B Chatterjee, 2025.