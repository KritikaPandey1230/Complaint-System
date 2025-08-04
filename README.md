# 🛠️ Complaint Management System

A full-stack web application that allows users to submit complaints and admins to manage them. Built using the **MERN stack** (MongoDB, Express.js, React, Node.js), this app supports authentication, role-based access, CRUD operations, and a sleek black-themed UI.

---

## 🔗 Live Demo

> _Coming Soon_ (Add your deployed link here if using **Render**, **Vercel**, or **Netlify + Railway**.)

---

## 📌 Features

### 👥 User Features
- Register & Login securely
- Submit complaints (Title + Description)
- View their own complaints
- Track status updates and resolution notes

### 🛡️ Admin Features
- Access all submitted complaints
- Update status: `Open`, `In Progress`, `Resolved`
- Add resolution notes
- Delete complaints
- Admin-only access to management panel

### ⚙️ Technical Features
- JWT-based authentication
- Protected routes (frontend + backend)
- Role-based navigation and functionality
- Clean dark mode UI using Tailwind CSS
- MongoDB with Mongoose schema modeling

---

## 🧰 Tech Stack

| Technology | Purpose |
|------------|---------|
| MongoDB    | Database |
| Express.js | Backend framework |
| React.js   | Frontend library |
| Node.js    | Backend runtime |
| Mongoose   | MongoDB ORM |
| Tailwind CSS | UI Styling |
| JWT        | Authentication |
| Axios      | API Requests |

---

## 🚀 Getting Started

### ⚡ Prerequisites
- Node.js v14+
- MongoDB Atlas or Local Instance
- npm or yarn

### 🔧 Backend Setup

```bash
cd server
npm install
```

#### Create `.env` file in root of `/server`:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### Start the backend:

```bash
nodemon server.js
```

---

### 💻 Frontend Setup

```bash
cd client
npm install
npm run dev
```

---

## 🛣️ Routes Summary

### 🔐 Auth Routes
| Endpoint         | Method | Description         |
|------------------|--------|---------------------|
| /api/auth/register | POST   | Register new user   |
| /api/auth/login    | POST   | Login and get token |

### 📩 Complaint Routes
| Endpoint              | Method | Access  | Description                    |
|-----------------------|--------|---------|--------------------------------|
| /api/complaints       | POST   | User    | Create complaint               |
| /api/complaints/my    | GET    | User    | View user complaints           |
| /api/complaints/all   | GET    | Admin   | View all complaints            |
| /api/complaints/:id   | PUT    | Admin   | Update status/resolution note |
| /api/complaints/:id   | DELETE | Admin   | Delete a complaint             |

---

## 📷 Screenshots

<img width="1911" height="952" alt="image" src="https://github.com/user-attachments/assets/61ac470d-7f37-46da-be5e-0eb088ccdc10" />
<img width="1911" height="952" alt="Screenshot 2025-08-04 140431" src="https://github.com/user-attachments/assets/721a3cc0-3fe4-4c2e-b8a8-898407f19b8a" />
<img width="1910" height="790" alt="Screenshot 2025-08-04 140703" src="https://github.com/user-attachments/assets/4785204c-6151-42da-ab74-1147e74fccb0" />
<img width="1890" height="786" alt="Screenshot 2025-08-04 140727" src="https://github.com/user-attachments/assets/f0161d91-bda3-4369-8d6f-fdd016a1017d" />
<img width="1904" height="788" alt="Screenshot 2025-08-04 140845" src="https://github.com/user-attachments/assets/44286cce-d478-440e-a34d-c488dc1ef9cf" />



---

## 🧠 Folder Structure

```
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
├── client/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── utils/axios.js
│   └── tailwind.config.js
└── README.md
```

---

## 💡 Future Scope

- Add file upload for complaint proofs
- Email notifications on status change
- Assign complaints to specific staff
- Add filtering/sorting in admin panel

---

## 🙋‍♀️ Author

**Kritika Pandey (Kriti)**  
Final Year B.Tech (IT) Student  
_“Built for real-world impact with clean UI and smart logic.”_

---


