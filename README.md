# Admin Dashboard with Analytics & Reporting

# Project Overview
This project is a web-based Admin Dashboard developed using the MEAN stack.  
It allows admin users to securely log in and view key analytics and metrics such as total users, active users, sales data, and new sign-ups through an interactive and responsive dashboard.

The application demonstrates authentication, routing, data visualization, and backend API integration, similar to real-world CRM and analytics admin panels.


# Key Features
- Secure admin authentication
- Role-based access (admin-only dashboard)
- Analytics dashboard with metrics
- Data visualization using Chart.js
- Responsive UI for different screen sizes
- Backend APIs using Node.js and Express


# Tech Stack
- Frontend: Angular (Standalone Components)
- Backend: Node.js, Express.js
- Database: MongoDB (integrated using Mongoose, managed via MongoDB Compass)
- Charts: Chart.js
- Styling: CSS
- API Communication: Angular HttpClient


# Version Details
- Node.js: v18+
- Angular CLI: v16+
- npm: v9+
- Express.js: v4+


# Project Structure
- frontend(Angular structure)
- backend(Node + Express server)

# How to Setup the Project Locally

# Backend Setup
Open terminal and navigate to backend folder:
cd backend
npm install
node server.js

Backend will start at:
http://localhost:3000

# Frontend Setup
Open a new terminal and navigate to frontend folder:
cd frontend
npm install
ng serve

Frontend will start at:
http://localhost:4200


# Demo Login Credentials
Email: admin0405@test1.com
Password: admin2005
(Admin credentials are stored in MongoDB)

# Screenshots
Screenshots of the login page, dashboard, analytics charts, and backend API responses are attached in the submission email.


# Real-World Relevance
This project reflects real-world admin dashboards used in CRM systems, analytics platforms, and internal management tools, where administrators monitor users, business metrics, and system activity.

## Notes on Implementation Scope
For the purpose of this assignment and within the given time constraints, the project focuses on demonstrating core concepts such as authentication, routing, analytics visualization, and admin dashboard design.

MongoDB is integrated for admin authentication using a simple schema. Advanced features such as detailed user management (CRUD operations), analytics persistence, and third-party SSO providers can be easily extended in future iterations.

This approach aligns with real-world development practices where initial versions (MVPs) focus on core functionality before scaling to full production-ready integrations.
