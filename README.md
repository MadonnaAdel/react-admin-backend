# 📦 React Admin UI TestAPI

Simple Node.js + Express REST API with basic CRUD operations for:

- Users
- Products
- Orders
- Posts

Used for testing and demo purposes in front-end admin dashboards.

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/MadonnaAdel/react-admin-backend
cd react-admin-ui-testapi
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Run the server

```bash
npm start
```

The server will run on `http://localhost:5000/`

---

## 📁 Folder Structure

- `controllers/`: Logic for handling requests.
- `model/`: Mongoose schemas for MongoDB.
- `routes/`: Express routes grouped by resource.
- `db.js`: Database connection logic.
- `seed.js`: Optional seeder file to populate DB.
- `index.js`: Main entry point for the app.

---

## 🔗 API Endpoints

All endpoints return JSON.

### 📦 Products

- `GET /products` – Get all products
- `GET /products/:id` – Get single product
- `POST /products` – Create product
- `PUT /products/:id` – Update product
- `DELETE /products/:id` – Delete product

### 👤 Users

- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

### 📝 Posts

- `GET /posts`
- `GET /posts/:id`
- `POST /posts`
- `PUT /posts/:id`
- `DELETE /posts/:id`

### 🛒 Orders

- `GET /orders`
- `GET /orders/:id`
- `POST /orders`
- `PUT /orders/:id`
- `DELETE /orders/:id`

---

## 📄 Example .env

```
PORT=5000
MONGO_URI=mongodb://localhost:27017 <== For Your Database Local
```

## 🧪 Seed Data

## Run `node seed.js` to populate the database with dummy data.

## 🛠 Built With

- Node.js
- Express.js
- MongoDB + Mongoose

---

## 📚 API Documentation

Documentation for this project’s REST API is available via **Swagger (OpenAPI)**.

You can explore and test the endpoints by uploading the documentation file to the online Swagger Editor.

### 🔗 View Documentation

1. Open [Swagger Editor](https://editor.swagger.io)
2. Click on `File → Import File`
3. Select the file named `swagger.yaml` located in this repository
4. The API documentation will be loaded with all available endpoints, including:

   - ✅ Products
   - ✅ Posts
   - ✅ Orders
   - ✅ Users

### 📄 File Location

/swagger.yaml

> ℹ️ This file describes all the available endpoints using the OpenAPI 3.0 specification.
