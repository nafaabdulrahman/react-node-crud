# CRUD App with Node.js, MongoDB, and React

This is a simple full-stack CRUD application built using:

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: ReactJS
- **Features**: Add, View, Edit, and Delete items with name and description

## 🛠️ How to Run the Project

### 📦 Backend Setup

1. Navigate to the backend folder:

```bash
cd crud-backend
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root:

```env
MONGO_URI=mongodb://localhost:27017/crudapp
PORT=5000
```

4. Start the backend server:

```bash
npm run dev
```

Make sure MongoDB is running locally.

---

### 🌐 Frontend Setup

1. Navigate to the frontend folder:

```bash
cd crud-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the frontend app:

```bash
npm start
```

The app will run at: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Features

- ✅ Add item (name, description)
- ✅ View only item name by default
- ✅ View description with "View" toggle button
- ✅ Edit item details
- ✅ Delete item

---

## 📁 Project Structure

```
crud-backend/
  ├── models/
  ├── routes/
  ├── .env
  └── server.js

crud-frontend/
  ├── src/
      ├── components/
      ├── App.js
```

---
