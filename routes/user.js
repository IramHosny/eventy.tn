const express = require("express");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();
const { registerRules, loginRules, validation } = require("../middleware/validator");
const isAuth = require('../middleware/passport');

// Register new user "post"
userRouter.post("/register", registerRules(), validation, async (req, res) => {
    const { name, lastname, adress, phonenumber, email, password, role } = req.body;
    try {
        const newUser = new User({ name, lastname, adress, phonenumber, email, password, role });

        // Hash password
        const salt = 10;
        const genSalt = await bcrypt.genSalt(salt);
        const hashedPassword = await bcrypt.hash(password, genSalt);
        newUser.password = hashedPassword;

        // Check if email exists
        const searchedUser = await User.findOne({ email });
        if (searchedUser) {
            return res.status(400).send({ msg: "Email already exists" });
        }

        // Save user and generate a token
        const newUserToken = await newUser.save();
        const payload = {
            _id: newUserToken._id,
            name: newUserToken.name,
        };
        const token = await jwt.sign(payload, process.env.SecretOrKey, {
            expiresIn: 3600,
        });

        return res.status(200).send({ newUserToken, msg: "User is saved", token: `Bearer ${token}` });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Cannot save the user" });
    }
});

// Login
userRouter.post("/login", loginRules(), validation, async (req, res) => {
    const { email, password } = req.body;
    try {
        // Find if the user exists
        const searchedUser = await User.findOne({ email });

        // If the email does not exist
        if (!searchedUser) {
            return res.status(400).send({ msg: "Invalid email or password" });
        }

        // Check if the passwords match
        const match = await bcrypt.compare(password, searchedUser.password);
        if (!match) {
            return res.status(400).send({ msg: "Invalid email or password" });
        }

        // Create a token
        const payload = {
            _id: searchedUser._id,
            name: searchedUser.name,
        };
        const token = await jwt.sign(payload, process.env.SecretOrKey, {
            expiresIn: 3600,
        });

        // Send the user
        return res.status(200).send({ user: searchedUser, msg: "Success", token: `Bearer ${token}` });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Cannot find the user" });
    }
});

// Get current profile
userRouter.get("/current", isAuth(), (req, res) => {
    return res.status(200).send({ user: req.user });
});

// Update user
userRouter.put("/:_id", async (req, res) => {
    try {
        let result = await User.findByIdAndUpdate(
            { _id: req.params._id },
            { $set: req.body }
        );
        return res.status(200).send({ msg: "User updated" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Failed to update user" });
    }
});

// Get all users
userRouter.get("/allusers", async (req, res) => {
    try {
        let result = await User.find();
        return res.status(200).send({ users: result, msg: "All users" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Failed to retrieve users" });
    }
});

// Delete user
userRouter.delete("/:_id", async (req, res) => {
    try {
        let result = await User.findByIdAndDelete({ _id: req.params._id });
        return res.status(200).send({ msg: "User deleted" });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ msg: "Failed to delete user" });
    }
});

module.exports = userRouter;
