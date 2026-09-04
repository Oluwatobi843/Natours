# Natours API 🌍

Natours is a backend application for a tour management and booking platform, built with **Node.js, Express.js, and MongoDB**.

The project is currently **under development**. It is being built to strengthen my backend engineering skills and demonstrate practical experience with RESTful APIs, database management, server-side development, and backend architecture.

## 🚧 Project Status

**Currently in development**

New features, API endpoints, database models, authentication, and other backend functionalities are being added progressively.

## 🛠️ Technologies & Tools

### Backend

* Node.js
* Express.js
* JavaScript
* MongoDB
* Mongoose

### Development Tools

* Nodemon
* Morgan
* dotenv
* Git & GitHub

### Code Quality

* ESLint
* Prettier
* Airbnb ESLint Style Guide

## 📦 Dependencies

The project currently uses:

* **Express.js** — Web application framework
* **Mongoose** — MongoDB object modeling
* **dotenv** — Environment variable management
* **Morgan** — HTTP request logging

### Development Dependencies

* **Nodemon** — Automatic server restarting during development
* **ESLint** — JavaScript code linting
* **Prettier** — Code formatting
* **Airbnb ESLint** — Coding style guidelines

## 📁 Project Structure

The project structure is being developed as the application grows.

```text
Natours/
│
├── controllers/
├── models/
├── routes/
├── utils/
├── public/
├── views/
│
├── app.js
├── server.js
├── config.env
├── package.json
├── .gitignore
└── README.md
```

> The structure may change as new features and modules are introduced.

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* MongoDB or a MongoDB Atlas database
* Git

### 1. Clone the repository

```bash
git clone <your-repository-url>
```

### 2. Navigate to the project

```bash
cd natour
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `config.env` file in the project root.

Example:

```env
NODE_ENV=development
PORT=3000
DATABASE=<your-mongodb-connection-string>
DATABASE_PASSWORD=<your-database-password>
```

**Do not commit your `config.env` file to GitHub.**

### 5. Start the development server

```bash
npm run start:dev
```

The application will run on:

```text
http://localhost:3000
```

### 6. Start the application normally

```bash
npm start
```

## 🔌 API Development

The project is being developed around a RESTful API architecture using Express.js.

Planned and ongoing areas include:

* Tour management
* User management
* Authentication and authorization
* Reviews and ratings
* Tour bookings
* Database relationships
* API validation
* Error handling
* API security

These features will be documented here as they are implemented.

## 🗄️ Database

The application uses **MongoDB** as its primary database with **Mongoose** for:

* Database connection
* Schema definition
* Data modeling
* Data validation
* Database queries

## 🧹 Code Quality

ESLint and Prettier are used to maintain consistent and readable code.

The project also follows the **Airbnb JavaScript Style Guide** to encourage clean and maintainable code.

## 🔮 Planned Improvements

As development continues, the project will include additional backend functionality such as:

* User authentication
* Role-based authorization
* Tour CRUD operations
* Advanced tour filtering and sorting
* Reviews and ratings
* Booking functionality
* API security improvements
* Centralized error handling
* API documentation
* Automated testing
* Production deployment

## 🎯 Purpose

The goal of this project is to build a practical backend application while improving my understanding of:

* REST API development
* Node.js and Express.js
* MongoDB and Mongoose
* Backend architecture
* Database design
* Authentication and authorization
* Error handling
* Security
* Clean code and development best practices

## 👨‍💻 Author

**Teetech**

Backend Software Engineer

### Technologies

`Node.js` `Express.js` `JavaScript` `MongoDB` `Mongoose` `REST API` `Git` `GitHub`

---

⭐ **This project is actively under development. More features and improvements will be added as development progresses.**
