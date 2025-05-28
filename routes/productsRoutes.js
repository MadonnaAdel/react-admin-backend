import express from "express";
import { addProduct, deleteProduct, getProduct, getProducts } from "../controllers/productsControllers.js";


const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", addProduct);
router.delete("/:id", deleteProduct);

export default router;
