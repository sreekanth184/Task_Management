# **Task Management Application**

A full-stack MERN application designed for efficient task management with secure user authentication.

---

## **Features**

- **User Authentication:** Register and login functionality with JWT-based security.
- **Task Management:** Create, read, update, and delete tasks effortlessly.
- **Task Status Tracking:** Assign and manage task statuses (Pending, In Progress, Completed).
- **Protected Routes:** Secure endpoints accessible only to authenticated users.
- **Responsive Design:** Optimized for various screen sizes and devices.

---

## **Tech Stack**

### **Frontend**
- **React.js** (with Vite for enhanced performance)
- **React Router Dom** (for dynamic routing)
- **Axios** (for seamless API communication)
- **Tailwind CSS** (for responsive and modern styling)
- **React Toastify** (for user-friendly notifications)

### **Backend**
- **Node.js** (for server-side logic)
- **Express.js** (for handling API requests)
- **MongoDB** (as the database)
- **JWT Authentication** (for secure token-based login)
- **bcrypt** (for password hashing)

---

## **Project Structure**

├── client
│   └── src
│       ├── components     # Reusable UI components
│       ├── pages          # Main application pages
│       ├── services       # API service layer
│       └── App.jsx        # Entry point for the React app
│
└── server
    ├── src
    │   ├── config         # Configuration files (e.g., DB connection)
    │   ├── controllers    # Request handlers for various routes
    │   ├── middlewares    # Middleware logic for authentication, etc.
    │   ├── models         # Mongoose schemas and models
    │   ├── routes         # API route definitions
    │   ├── utils          # Helper functions and utilities
    │   └── app.js         # Main application setup
    └── server.js          # Server entry point


### **Backend Setup**
Navigate to the server directory:
   ```bash
   cd server
   npm install
   node server.js


### **Frontend Setup**
Navigate to the client directory:

cd client
npm install
npm run dev


---

## Contributing
Contributions are welcome! Please open an issue or submit a pull request with any improvements or features you'd like to add.

## License
This project is licensed under the MIT License.