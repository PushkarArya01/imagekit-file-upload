# 📸 ImageKit File Upload Backend

A beginner-friendly backend project built using **Node.js, Express.js, MongoDB, Mongoose, Multer, and ImageKit**.

This project demonstrates how to:

- Create a post with a caption
- Upload an image using Multer
- Upload the image to ImageKit
- Get the ImageKit image URL
- Store the image URL and caption in MongoDB
- Fetch all posts using an API

---

# 📑 Table of Contents

- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Installation and Setup](#️-installation-and-setup)
- [Environment Variables](#-environment-variables)
- [MongoDB Setup](#️-mongodb-setup)
- [ImageKit Setup](#️-imagekit-setup)
- [Run the Project](#️-run-the-project)
- [API Documentation](#-api-documentation)
- [Postman Testing](#-postman-testing)
- [How File Upload Works](#-how-file-upload-works)
- [Project Architecture](#-project-architecture)
- [Folder Explanation](#-folder-and-file-explanation)
- [Common Errors](#-common-errors)
- [Git and GitHub](#-git-and-github)
- [Learning Flow](#-learning-flow)
- [Author](#-author)

---

# 🚀 Features

- Create a new post
- Add caption to a post
- Upload image using Multer
- Store uploaded image on ImageKit
- Store ImageKit URL in MongoDB
- Get all posts
- REST API
- MongoDB database integration
- Mongoose ODM
- Environment variables using dotenv
- Git and GitHub support
- Beginner-friendly backend architecture

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | Backend/API framework |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| Multer | File upload handling |
| ImageKit | Cloud image storage |
| dotenv | Environment variables |
| Postman | API testing |
| Git | Version control |
| GitHub | Code hosting |

---

# 📁 Project Structure

```text
imagekit/
│
├── server/
│   │
│   ├── src/
│   │   │
│   │   ├── config/
│   │   │   ├── db.connection.js
│   │   │   └── multer.config.js
│   │   │
│   │   ├── controllers/
│   │   │   └── post.controller.js
│   │   │
│   │   ├── models/
│   │   │   └── post.model.js
│   │   │
│   │   ├── routes/
│   │   │   └── post.route.js
│   │   │
│   │   ├── services/
│   │   │   └── storage.service.js
│   │   │
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── .gitignore
└── README.md
```

---

# ⚙️ Installation and Setup

Follow these steps to install and run the project on your computer.

---

## 1. Install Node.js

First, install Node.js on your computer.

Check Node.js:

```bash
node -v
```

Check npm:

```bash
npm -v
```

If both commands return version numbers, Node.js and npm are installed correctly.

Example:

```text
v22.x.x
10.x.x
```

---

## 2. Clone the Repository

Open PowerShell or Terminal and run:

```bash
git clone https://github.com/PushkarArya01/imagekit-file-upload.git
```

---

## 3. Go to the Project Folder

```bash
cd imagekit-file-upload
```

---

## 4. Go to the Server Folder

```bash
cd server
```

Your terminal should now be inside:

```text
imagekit-file-upload/server
```

---

## 5. Install Dependencies

Run:

```bash
npm install
```

This command reads the `package.json` file and installs all required dependencies.

After installation, the `node_modules` folder will be created.

```text
server/
├── node_modules/
├── package.json
└── package-lock.json
```

> `node_modules` should not be uploaded to GitHub.

---

# 🔐 Environment Variables

The project uses environment variables for sensitive information.

Create a `.env` file inside the `server` folder:

```text
server/
│
├── .env
├── package.json
├── server.js
└── src/
```

Add:

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

IK_URL=your_imagekit_url
IK_PUBLIC_KEY=your_imagekit_public_key
IK_PRIVATE_KEY=your_imagekit_private_key
```

Replace the example values with your actual credentials.

---

# ⚠️ Security

Never upload `.env` to GitHub.

Your `.gitignore` should contain:

```gitignore
server/.env
server/node_modules/
*.log
```

Never share:

```text
IK_PRIVATE_KEY
```

or your MongoDB password publicly.

---

# 🗄️ MongoDB Setup

This project requires MongoDB.

You can use:

- MongoDB Atlas
- Local MongoDB

---

## MongoDB Atlas

Create a MongoDB Atlas database and get your connection string.

Add it to:

```env
MONGODB_URI=your_mongodb_connection_string
```

Example format:

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/imagekit
```

> Do not use the example connection string as your real connection string.

---

## MongoDB Local

If MongoDB is installed locally, your connection string can look like:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/imagekit
```

Make sure MongoDB is running before starting the backend.

---

# ☁️ ImageKit Setup

This project uses ImageKit for cloud image storage.

You need:

```text
ImageKit URL
Public Key
Private Key
```

Add them to `.env`:

```env
IK_URL=your_imagekit_url
IK_PUBLIC_KEY=your_imagekit_public_key
IK_PRIVATE_KEY=your_imagekit_private_key
```

The private key must remain secret.

---

# ▶️ Run the Project

After completing:

- Node.js installation
- `npm install`
- `.env` setup
- MongoDB setup
- ImageKit setup

run:

```bash
npm run dev
```

The backend should start.

Example:

```text
Server running on port 3000
MongoDB connected
```

The server will be available at:

```text
http://localhost:3000
```

---

# 🔄 Complete Installation Flow

```text
Install Node.js
      ↓
Clone GitHub Repository
      ↓
cd imagekit-file-upload
      ↓
cd server
      ↓
npm install
      ↓
Create .env
      ↓
Add MongoDB credentials
      ↓
Add ImageKit credentials
      ↓
npm run dev
      ↓
Server Running
      ↓
Test API using Postman
```

---

# 📡 API Documentation

## 1. Create Post

Creates a new post with a caption and image.

### Method

```text
POST
```

### URL

```text
http://localhost:3000/posts/create
```

### Request Body

Use:

```text
Body → form-data
```

Add:

| Key | Type | Example |
|---|---|---|
| caption | Text | My first image |
| image | File | photo.jpg |

Important:

The file field name must be:

```text
image
```

because the backend uses:

```js
upload.single("image")
```

---

## Example Request

```text
POST http://localhost:3000/posts/create
```

Body:

```text
caption    → Text → My first image
image      → File → photo.jpg
```

---

## Successful Response

```json
{
    "success": true,
    "message": "post created successfully",
    "post": {
        "caption": "My first image",
        "image": "https://ik.imagekit.io/..."
    }
}
```

---

# 2. Get All Posts

Returns all posts stored in MongoDB.

### Method

```text
GET
```

### URL

```text
http://localhost:3000/posts/getAllPost
```

### Example Response

```json
{
    "success": true,
    "message": "posts fetched successfully",
    "posts": []
}
```

---

# 🧪 Postman Testing

You can use Postman to test the APIs.

---

## Create Post

Select:

```text
POST
```

Enter:

```text
http://localhost:3000/posts/create
```

Go to:

```text
Body
   ↓
form-data
```

Add:

```text
caption → Text
image   → File
```

Select an image file.

Then click:

```text
Send
```

---

## Get All Posts

Select:

```text
GET
```

Enter:

```text
http://localhost:3000/posts/getAllPost
```

Click:

```text
Send
```

---

# 🔄 How File Upload Works

The complete file-upload flow:

```text
                    POSTMAN
                       │
                       ▼
              POST /posts/create
                       │
                       ▼
                   EXPRESS
                       │
                       ▼
                    MULTER
                       │
                       ▼
                    req.file
                       │
                       ▼
                  CONTROLLER
                       │
                       ▼
               STORAGE SERVICE
                       │
                       ▼
                   IMAGEKIT
                       │
                       ▼
                 IMAGE URL
                       │
                       ▼
                   MONGODB
                       │
                       ▼
                  API RESPONSE
```

---

# 🧠 Step-by-Step File Upload

## Step 1 — User sends request

Postman sends:

```text
caption
image
```

using:

```text
multipart/form-data
```

---

## Step 2 — Express receives request

Express receives the request and sends it through the route.

---

## Step 3 — Multer processes image

The route uses:

```js
upload.single("image")
```

This means:

- Only one file is accepted
- The field name must be `image`

---

## Step 4 — File becomes available

Multer makes the uploaded file available through:

```js
req.file
```

Example:

```js
const file = req.file
```

---

## Step 5 — Controller sends image

The controller sends the image buffer to the storage service:

```js
const uploadImage = await sendFiles(
    file.buffer,
    file.originalname
)
```

---

## Step 6 — ImageKit uploads image

The storage service sends the image to ImageKit.

---

## Step 7 — ImageKit returns URL

ImageKit returns information about the uploaded image, including its URL.

Example:

```text
https://ik.imagekit.io/...
```

---

## Step 8 — MongoDB stores URL

MongoDB stores:

```text
caption
image URL
```

The actual image is not stored inside MongoDB.

---

## Step 9 — API returns response

The backend sends the created post back to the client.

---

# 🏗️ Project Architecture

The project follows a simple layered backend architecture.

```text
                    CLIENT
                      │
                      ▼
                    ROUTES
                      │
                      ▼
                 CONTROLLERS
                  /         \
                 /           \
                ▼             ▼
             SERVICE        MODEL
                │              │
                ▼              ▼
            IMAGEKIT        MONGODB
```

---

# 📂 Folder and File Explanation

## `server/`

Main backend folder.

Contains:

- Backend source code
- Dependencies
- Environment variables
- Server entry point

---

## `server/src/`

Contains the main application source code.

---

## `src/config/`

Contains configuration files.

### `db.connection.js`

Responsible for connecting the backend to MongoDB.

Flow:

```text
Node.js
   ↓
MongoDB Connection
   ↓
MongoDB Database
```

---

### `multer.config.js`

Responsible for configuring Multer.

The project uses:

```js
multer.memoryStorage()
```

This means the uploaded image is temporarily stored in memory.

---

# `src/controllers/`

Contains the main business logic.

### `post.controller.js`

Responsible for:

- Reading request data
- Getting caption
- Getting uploaded file
- Validating input
- Calling ImageKit service
- Creating MongoDB document
- Sending response

Flow:

```text
Request
   ↓
Controller
   ↓
Validate
   ↓
Upload Image
   ↓
Save Post
   ↓
Response
```

---

# `src/models/`

Contains Mongoose models.

### `post.model.js`

Defines the structure of post data.

Example:

```text
caption
image
createdAt
updatedAt
```

---

# `src/routes/`

Contains API routes.

### `post.route.js`

Connects API URLs with controllers.

Example:

```text
POST /create
GET /getAllPost
```

---

# `src/services/`

Contains external service logic.

### `storage.service.js`

Responsible for communicating with ImageKit.

Keeping ImageKit code here makes the project cleaner and easier to maintain.

Flow:

```text
Controller
    ↓
Storage Service
    ↓
ImageKit
```

---

# `src/app.js`

Creates and configures the Express application.

Responsibilities include:

- Express setup
- Middleware
- Routes

---

# `server.js`

This is the entry point of the backend.

It starts the Express server.

Flow:

```text
server.js
    ↓
app.js
    ↓
Express
    ↓
Server
```

---

# 🧩 Important Backend Concepts

## 1. Node.js

Node.js allows JavaScript to run outside the browser.

This project uses Node.js to create the backend server.

---

## 2. Express.js

Express.js is used to create:

- Server
- Routes
- APIs
- Middleware

---

## 3. REST API

The project uses HTTP methods.

### POST

Used to create a new post:

```text
POST /posts/create
```

### GET

Used to fetch posts:

```text
GET /posts/getAllPost
```

---

## 4. Middleware

Multer works as middleware.

Example:

```js
upload.single("image")
```

Request flow:

```text
Request
   ↓
Multer Middleware
   ↓
Controller
   ↓
Response
```

---

## 5. Multer

Multer handles file uploads.

This project uses:

```js
multer.memoryStorage()
```

---

## 6. MongoDB

MongoDB stores post data.

Example:

```json
{
    "caption": "My image",
    "image": "https://ik.imagekit.io/..."
}
```

---

## 7. Mongoose

Mongoose provides an easy way to work with MongoDB using JavaScript.

It is used to create:

- Schemas
- Models
- Database queries

---

## 8. ImageKit

ImageKit is used for cloud image storage.

Flow:

```text
Image
  ↓
ImageKit
  ↓
Image URL
  ↓
MongoDB
```

---

# 🗃️ Database Structure

A post document can look like:

```json
{
    "_id": "....",
    "caption": "My first image",
    "image": "https://ik.imagekit.io/....",
    "createdAt": "....",
    "updatedAt": "...."
}
```

Important:

> The actual image is stored on ImageKit. MongoDB stores the ImageKit URL.

---

# 🐛 Common Errors and Solutions

## Error 1: `Unexpected field`

You may see:

```text
MulterError: Unexpected field
```

### Solution

Check the Postman field name.

It must be:

```text
image
```

because the route uses:

```js
upload.single("image")
```

Also make sure only one file is being uploaded.

---

# Error 2: `ERR_MODULE_NOT_FOUND`

Example:

```text
Error [ERR_MODULE_NOT_FOUND]
```

### Check:

- File path
- File name
- Folder structure
- Import path
- `.js` extension

Example:

```js
import postModel from "../models/post.model.js"
```

---

# Error 3: MongoDB Connection Error

Check:

```env
MONGODB_URI=...
```

Also check:

- MongoDB is running
- MongoDB Atlas is configured
- IP access is allowed
- Username is correct
- Password is correct
- Connection string is correct

---

# Error 4: ImageKit Upload Error

Check:

```env
IK_URL=...
IK_PUBLIC_KEY=...
IK_PRIVATE_KEY=...
```

Also make sure your ImageKit package and upload API are being used consistently.

---

# Error 5: `.env` Not Working

Make sure `.env` is located here:

```text
server/.env
```

Not:

```text
server/src/.env
```

Correct:

```text
imagekit/
└── server/
    ├── .env
    ├── server.js
    └── src/
```

---

# 📦 Useful Commands

## Check Node.js

```bash
node -v
```

## Check npm

```bash
npm -v
```

## Install dependencies

```bash
npm install
```

## Start development server

```bash
npm run dev
```

## Check Git status

```bash
git status
```

---

# 🔧 Git and GitHub

GitHub Repository:

```text
https://github.com/PushkarArya01/imagekit-file-upload
```

---

## After Making Changes

After changing code in VS Code:

### 1. Check changes

```bash
git status
```

### 2. Add changes

```bash
git add .
```

### 3. Create commit

```bash
git commit -m "Update project"
```

### 4. Push to GitHub

```bash
git push
```

After `git push`, your changes will be updated on GitHub.

---

# 🆕 Git Setup for a New Project

For a completely new project:

## Step 1

```bash
git init
```

## Step 2

Create a new repository on GitHub.

## Step 3

Connect local project with GitHub:

```bash
git remote add origin YOUR_GITHUB_REPOSITORY_URL
```

## Step 4

Add files:

```bash
git add .
```

## Step 5

Create first commit:

```bash
git commit -m "Initial commit"
```

## Step 6

Set main branch:

```bash
git branch -M main
```

## Step 7

Push:

```bash
git push -u origin main
```

After the first push, future changes only require:

```bash
git add .
git commit -m "Update project"
git push
```

---

# 🔄 Complete Git Workflow

```text
Create / Change Code
        ↓
    git status
        ↓
     git add .
        ↓
 git commit -m "message"
        ↓
      git push
        ↓
      GitHub
```

---

# 🎯 Learning Flow

If you are learning backend development, understand this project in the following order:

```text
1. JavaScript Basics
       ↓
2. Node.js
       ↓
3. npm
       ↓
4. Express.js
       ↓
5. HTTP Methods
       ↓
6. REST API
       ↓
7. Routes
       ↓
8. Controllers
       ↓
9. Middleware
       ↓
10. Multer
       ↓
11. File Upload
       ↓
12. MongoDB
       ↓
13. Mongoose
       ↓
14. ImageKit
       ↓
15. Environment Variables
       ↓
16. Git
       ↓
17. GitHub
```

---

# 🎓 What This Project Teaches

After understanding this project, you should understand:

- How a Node.js server works
- How Express routes work
- How middleware works
- How file uploads work
- How Multer processes files
- What `req.body` is
- What `req.file` is
- How MongoDB stores data
- How Mongoose models work
- How ImageKit stores images
- Why image URLs are stored in MongoDB
- How controllers work
- Why services are used
- How environment variables work
- How `.gitignore` protects secrets
- How Git works
- How GitHub works
- How to push future changes

---

# 📌 Important Project Concept

The most important concept of this project is:

```text
User
  ↓
Uploads Image
  ↓
Multer
  ↓
Backend
  ↓
ImageKit
  ↓
Image URL
  ↓
MongoDB
```

The image itself is **not stored inside MongoDB**.

Instead:

```text
Image → ImageKit
URL   → MongoDB
```

---

# 🌐 Project Repository

GitHub:

https://github.com/PushkarArya01/imagekit-file-upload

---

# 👨‍💻 Author

**Pushkar Arya**

GitHub:

https://github.com/PushkarArya01

---

# ⭐ Support

If this project helped you learn backend development, consider giving the repository a ⭐ on GitHub.

---

# 📜 License

This project is created for learning and educational purposes.

---

# ✅ Quick Start

If everything is already installed, use:

```bash
git clone https://github.com/PushkarArya01/imagekit-file-upload.git
cd imagekit-file-upload
cd server
npm install
```

Create:

```text
server/.env
```

Add:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
IK_URL=your_imagekit_url
IK_PUBLIC_KEY=your_imagekit_public_key
IK_PRIVATE_KEY=your_imagekit_private_key
```

Then run:

```bash
npm run dev
```

Server:

```text
http://localhost:3000
```

Test with Postman:

```text
POST http://localhost:3000/posts/create
```

Body:

```text
form-data

caption → Text
image   → File
```

Get all posts:

```text
GET http://localhost:3000/posts/getAllPost
```

---

# 🎉 Done

You now have a complete backend project with:

```text
Node.js
+
Express.js
+
Multer
+
ImageKit
+
MongoDB
+
Mongoose
+
REST API
+
Git
+
GitHub
```

**Image Upload → ImageKit → URL → MongoDB → API Response**