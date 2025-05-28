import express from "express";
import cors from "cors";
import { seedOrders, seedPosts, seedProducts, seedUsers } from "./seed.js";
import { connectToDB } from "./db.js";

import users from "./routes/usersRoutes.js";
import product from "./routes/productsRoutes.js";
import posts from "./routes/postsRoutes.js";
import order from "./routes/ordersRoutes.js";
import dotenv from "dotenv";
dotenv.config();
// seedUsers();
// seedOrders();
// seedPosts();
// seedProducts();
const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders:
      "Origin, X-Requested-With, Content-Type, Accept, Authorization, 'User-Id'",
    methods: "GET, POST, PATCH, DELETE, OPTIONS, PUT",
  })
);

app.use(express.json());

app.use("/api/users", users);
app.use("/api/products", product);
app.use("/api/posts", posts);
app.use("/api/orders", order);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/favicon.ico", (req, res) => res.status(204).end());

connectToDB()
  .then(() => {
    console.log("✅ Connected to DB");
    if (process.env.NODE_ENV !== "vercel") {
      app.listen(port, () => console.log(`Server started on port ${port}`));
    }
  })
  .catch((error) => {
    console.error("❌ DB connection failed:", error);
  });

export default app;