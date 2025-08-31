


# 📝 Note Taking Application

A full-stack note-taking web application where users can **sign up, log in, and manage personal notes**.  
Built with **React (Vite)** for the frontend, **Node.js + Express** for the backend, and **MongoDB** as the database.  
Authentication uses **JWT**. The OTP system is implemented as a **mock flow** where OTP is shown in the app using a Toastify notification (not real SMS/Email).

---
> ⚠️ **Note:**  
> - The backend is hosted on **Render Free Tier**, so the **first response may take 30–50 seconds** due to cold start.  
> - After the first load, the app will work smoothly.  
> - OTP in signup/login is a **mock system** → it appears as a **Toastify notification**.  
> - If OTP does not appear, refresh the page and try again.

---

## 🚀 Live Demo
- **Frontend (Vercel):** https://note-taking-application-frontend.vercel.app  
- **Backend (Render):** https://note-taking-application-backend-4yi7.onrender.com 
- **Demo Credentials:**  
  - Email: `hk1212@gmail.com`  
  - Password: `hk1212`

---

## ✨ Features
- 🔐 **Authentication**
  - Email + OTP signup/login flow(OTP shown as Toastify notification for demo)
  - Input validation & error messages
- 🧑 **User Dashboard**
  - Welcome page after signup/login
  - Displays logged-in user info
- 📝 **Notes Management**
  - Create and delete notes
  - Notes are user-specific (protected with JWT)
- 📱 **Responsive UI**
  - Mobile-friendly design
  - Matches the provided design reference
- ⚡ **Secure**
  - JWT auth middleware protects APIs
  - OTP verification included

---

## 🛠️ Tech Stack

**Frontend (React + Vite)**  
- React Router
- Axios (API calls)
- React Toastify (notifications)

**Backend (Node + Express)**  
- MongoDB (Mongoose models: `User`, `Note`, `Otp`)
- JWT Authentication
- OTP (via Toastify, no real email/SMS)

**Deployment**  
- Frontend: Vercel  
- Backend:  Render 
- Database: MongoDB Atlas  

---

## 📂 Folder Structure

### Backend (`/backend`)
```

backend/
│── config/
│   └── db.js
│── middleware/
│   └── auth.js
│── models/
│   ├── Note.js
│   ├── Otp.js
│   └── User.js
│── routes/
│   ├── auth.js
│   └── notes.js
│── index.js
│── package.json

```

### Frontend (`/frontend-vite`)
```

frontend-vite/
│── public/
│── src/
│   ├── api/
│   │   └── axios.js
│   ├── components/Auth/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── Login.css
│   │   └── Signup.css
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── Dashboard.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│── package.json
│── vite.config.js
│── vercel.json
│── index.html


````

---

## ⚙️ Setup & Installation

### 1. Clone Repo
```bash
git clone https://github.com/Viraj1923/Note-Taking-Application.git
cd note-taking-app
````

### 2. Backend Setup

```bash
cd backend
cp .env.example .env    # Add DB_URI, JWT_SECRET
npm install
npm start 
```

### 3. Frontend Setup

```bash
cd frontend-vite
cp .env.example .env    # VITE_API_URL=https://your-backend.vercel.app
npm install
npm run dev
```

---

## 🔑 Environment Variables

### Backend (`/backend/.env`)

```
PORT=5000
DB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret>
```

### Frontend (`/frontend-vite/.env`)

```
VITE_API_URL=https://your-backend.vercel.app
```

---

## 📡 API Routes

### Auth

* `POST /api/auth/signup` → Sign up with email + OTP
* `POST /api/auth/login` → Login with email/password

### Notes (JWT Protected)

* `GET /api/notes` → Fetch user’s notes
* `POST /api/notes` → Create a new note
* `DELETE /api/notes/:id` → Delete a note

---

## 🎥 Demo Video
[![Watch the Demo](https://i.ibb.co/your-thumbnail.png)](https://drive.google.com/file/d/1UrWJRL7qPpcJz5-LabZyOt6wbjwvTe38/view?usp=sharing)


---

## 📌 Known Limitations

* OTP system is mocked → OTP appears in-app via Toastify notification.

---

## 📄 By Viraj Mulik






