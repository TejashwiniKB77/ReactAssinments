 React User Management App using Context API

Project Description
This is a React application that demonstrates user authentication and state management using the Context API.  
The project includes Signup, Login, Dashboard, Profile, and Contact Us pages.

The Contact Us page auto-fills user details using Context API and stores feedback in localStorage.  
Access to protected pages is restricted to authenticated users.

\Features
- User Signup & Login
- Context API for global user state
- Protected Routes
- Auto-filled user details (Name & Email)
- Feedback submission with localStorage
- Responsive UI using Tailwind CSS
- Logout functionality

Concepts Used
- React Hooks (useState, useContext)
- Context API
- React Router DOM
- Protected Routes
- localStorage
- Tailwind CSS

Technologies Used
- React.js
- Vite
- JavaScript
- Tailwind CSS
- HTML & CSS

Pages Included
- Signup
- Login
- Dashboard
- Profile
- Contact Us (Protected)

Contact Us Page Features
- Auto-filled Name (read-only)
- Auto-filled Email (read-only)
- Feedback textbox
- Submit feedback
- Feedback stored in localStorage with timestamp

Feedback Storage Format
{
  "name": "Pankaja",
  "email": "pankajapoojari@gmail.com",
  "feedbackText": "Very good application",
  "submittedAt": "2025-12-14T08:30:00Z"
}

How to Run the Project Locally
npm install
npm run dev
Open in browser:
http://localhost:5174
