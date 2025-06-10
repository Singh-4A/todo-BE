const User = require("../model/userModel");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// create user
const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (name && email) {
      const create = await User.create({
        name: name,
        email: email,
      });

      res.status(200).json({
        message: "user successfully created",
        data: create,
      });
    } else {
      res.status(400).json("user not found");
    }
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        message: "Email  already exit",
      });
    }
    res.status(500).json({
      message: error,
    });
  }
};

// update user

const updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({
      message: "user updated successfully",
      updateUser: updateUser,
    });

    if (!updateUser) {
      return res.status(401).json({
        message: "user not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

// delete user

const deleteUser = async (req, res) => {
  try {
    const deleteCurrentUser = await User.findByIdAndDelete(req.params.id);

    if (!deleteCurrentUser) {
      res.status(401).json({ message: "user not found" });
    }

    res.status(200).json({
      message: "user delete successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

const searchUser = async (req, res) => {
  try {
    const findCurrentUser = await User.findById(req.params.id);

    if (!findCurrentUser) {
      res.status(401).json({
        message: "user not found",
      });
    }
    res.status(200).json({
      findCurrentUser,
    });
  } catch (error) {
      res.status(500).json({
      message: error,
    });
  }
};
module.exports = {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  searchUser
};
