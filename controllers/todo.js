// save todo list

const TodoModel = require("../model/todoModel");

const createTodo = async (req, res) => {
  try {
    const { name ,skill} = req.body;
    let newUser = new TodoModel({ name,skill  });
    let existingUser = await TodoModel.findOne({ name ,skill });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    await newUser.save();

    res.status(200).json({
      message: "List added",
      data: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

// get totoLIst

const getTodoList = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    const items = await TodoModel.find()
      .sort({ createdAt: -1, _id: -1 }) // ← latest first
      .skip(skip)
      .limit(limit);

    const totalItems = await TodoModel.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    res.status(200).json({
      message: "get data",
      data: items,
      pagination: {
        totalItems,
        currentPage: page,
        totalPages,
        limit,
        nextPage: page < totalPages ? page + 1 : null,
        prevPage: page > 1 ? page - 1 : null,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



const updateTodoist = async (req, res) => {
  try {
    const updateListData = await TodoModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updateListData) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User updated successfully",
      data: updateListData,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Internal server error",
    });
  }
};

const deleteTodoist = async (req, res) => {
  try {
    const removeData = await TodoModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "remove user",
    });

    if (!removeData) {
      res.status(200).json({
        message: "not found user",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};

module.exports = {
  createTodo,
  getTodoList,
  updateTodoist,
  deleteTodoist,
};
