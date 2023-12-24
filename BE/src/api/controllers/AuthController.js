import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";



// Định nghĩa schema cho user
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Tạo model từ schema
const User = mongoose.model("User", userSchema);

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      console.log(`User not found for email: ${req.body.email}`);
      return res.status(404).json({ err: 'User not found' });
    }

    const checkPassword = await bcrypt.compare(req.body.password, user.password);
    if (!checkPassword) {
      return res.status(400).json({ err: 'Incorrect password' });
    }

    // Generate and send a JWT token
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).json({ email: user.email, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: 'Internal server error' });
  }
};

export const register = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ err: 'Missing useremail or password' });
    }

    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.status(400).json({ err: 'Useremail already exists' });
    }

    const hashPass = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({ email: req.body.email, password: hashPass });
    await newUser.save();

    jwt.sign({ email: req.body.email }, process.env.JWT_SECRET, { expiresIn: "7d" }, (err, token) => {
      if (err) {
        return res.status(500).json({ err: "Internal server error" });
      }
      const responseData = {
        email: req.body.email,
        token: token,
      };
      return res.status(200).json(responseData);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: 'Internal server error' });
  }
};
