// controllers/userController.js
import User from "../model/user.js";

// GET ALL USERS
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET SINGLE USER
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
};

// ADD USER
export const addUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE USER BY ID
export const deleteUserById = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json("User deleted!");
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
};

// DELETE USER BY EMAIL (optional)
export const deleteUserByEmail = async (req, res) => {
  try {
    await User.findOneAndDelete({ email: req.params.email });
    res.json("User deleted by email!");
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
};
