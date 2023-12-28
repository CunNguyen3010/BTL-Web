import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

// Định nghĩa schema cho user
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  birth: Number,
  email: String,
  phone: String,
  address: String,
  role: String,
  id_workplace: String,
});

// Tạo model từ schema
const User = mongoose.model("User", userSchema);

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      console.log(`User not found for username: ${req.body.username}`);
      return res.status(404).json({ err: "User not found" });
    }

    const checkPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkPassword) {
      return res.status(400).json({ err: "Incorrect password" });
    }

    // Generate and send a JWT token
    const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '7d' });
    return res.status(200).json({ user, token });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "Internal server error" });
  }
};

export const register = async (req, res) => {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ err: "Missing username or password" });
    }

    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
      return res.status(400).json({ err: "Username already exists" });
    }

    // Sử dụng mô hình User mới để tạo người dùng
    const newUser = new User({
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10),
      // Thêm các trường dữ liệu khác nếu cần
      name: req.body.name,
      birth: req.body.birth,
      email: req.body.email,
      sđt: req.body.sđt,
      address: req.body.address,
      role: req.body.role,
      id_workplace: req.body.id_workplace,
    });

    await newUser.save();

    jwt.sign(
      { username: req.body.username },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
      (err, token) => {
        if (err) {
          return res.status(500).json({ err: "Internal server error" });
        }
        const responseData = {
          username: req.body.username,
          password: req.body.password,
        };
        return res.status(200).json(responseData);
      }
      
    );
  } catch (error) {
    console.error(error);
    return res.status(500).json({ err: "Internal server error" });
  }
};

export const getAllAccounts = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users).status(200);
  } catch (error) {
    res.json({ messbirth: error.messbirth }).status(500);
  }
};

export const searchAccounts = async (req, res) => {
  const queryParams = req.query;

  try {
    if (Object.keys(queryParams).length === 0) {
      return res.status(400).json({ message: "At least one query parameter is required." });
    }

    let result;
    const sortQuery = {};

    if (queryParams.id) {
      // Nếu có 'id' trong queryParams, sử dụng findById
      result = await User.findById(queryParams.id);
    } else {
      // Nếu không có 'id', sử dụng find
      const query = {};
      for (const key in queryParams) {
        if (key === 'sortBy') {
          // Nếu có tham số sắp xếp
          sortQuery[queryParams.sortBy] = queryParams.sortOrder === 'desc' ? -1 : 1;
        } else {
          query[`${key}`] = { $regex: new RegExp(queryParams[key], "i") };
        }
      }

      result = await User.find(query).sort(sortQuery);
    }

    res.json({ result }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};