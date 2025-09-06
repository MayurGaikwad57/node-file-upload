📂 File Upload using Multer (Node.js + Express)

This project demonstrates how to implement file upload functionality in a Node.js application using Multer
It supports multiple file uploads, stores metadata in MongoDB, and follows a clean MVC structure.

🚀 Features

Upload single or multiple files using Multer.
Store uploaded files in an uploads/ directory.
Save file details (name, path, size, etc.) in MongoDB.
Follows MVC structure: controller, routes, model, configuration.

Example API endpoints for file upload and retrieval.

📁 Project Structure
├── configuration/      # DB connection, multer config
├── controller/         # File upload logic
├── model/              # Mongoose schema for file metadata
├── routes/             # Express routes
├── connection.js       # Database connection setup
├── index.js            # App entry point
├── package.json        # Dependencies
└── .gitignore          # Ignored files/folders
