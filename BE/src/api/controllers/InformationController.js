import mongoose from "mongoose";


// Định nghĩa Schema
const informationSchema = new mongoose.Schema({
  sender: {
    information: String,
    name: String,
    phone: String,
    province: String,
    district: String,
    address: String,
  },
  receiver: {
    information: String,
    name: String,
    phone: String,
    province: String,
    district: String,
    address: String,
  },
  postalInformation: {
    name: String,
    price: Number,
    weight: Number,
    number: Number,
    length: Number,
    width: Number,
    height: Number,
    note: String,
    source: String, // đơn hàng đang được rời đi từ đâu
    status: String, // đang giao or đang ở source
    destination: String, // đơn hàng chuẩn bị đến đâu (= null khi status = đang ở source)
  },
});

// Tạo model từ schema
const Information = mongoose.model("Information", informationSchema);

export const getAllInformations = async (req, res) => {
  try {
    const infors = await Information.find();
    res.json(infors).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const searchInformation = async (req, res) => {
  const queryParams = req.query;

  try {
    if (Object.keys(queryParams).length === 0) {
      return res.status(400).json({ message: "At least one query parameter is required." });
    }

    let result;
    const sortQuery = {};

    if (queryParams.id) {
      // Nếu có 'id' trong queryParams, sử dụng findById
      result = await Information.findById(queryParams.id);
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

      result = await Information.find(query).sort(sortQuery);
    }

    res.json({ result }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};


export const createInformation = async (req, res) => {
  const { sender, receiver, postalInformation } = req.body;

  if (!sender || !receiver) return res.json({ message: "Sender and Receiver information are required" }).status(400);

  const newInformation = new Information({
    sender,
    receiver,
    postalInformation,
  });

  try {
    await newInformation.save();
    res.json({ newInformation }).status(201);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const updateInformation = async (req, res) => {
  const { _id, sender, receiver, postalInformation } = req.body;

  if (!_id) return res.json({ message: "ID is required" }).status(400);

  try {
    const updatedInformation = await Information.findByIdAndUpdate(
      _id,
      { sender, receiver, postalInformation },
      { new: true }
    );

    if (!updatedInformation) return res.json({ message: "Information not found" }).status(404);

    res.json({ updatedInformation }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};

export const deleteInformation = async (req, res) => {
  const { id } = req.body;

  if (!id) return res.json({ message: "ID is required" }).status(400);

  try {
    const deletedInformation = await Information.findByIdAndDelete(id);

    if (!deletedInformation) return res.json({ message: "Information not found" }).status(404);

    res.json({ deletedInformation }).status(200);
  } catch (error) {
    res.json({ message: error.message }).status(500);
  }
};
