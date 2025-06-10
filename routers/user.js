const express = require("express");
const {
  getAllUser,
  createUser,
  updateUser,
  deleteUser,
  searchUser
} = require("../controllers/users");

const router = express.Router();

router.route("/").get(getAllUser).post(createUser);
router.route("/:id").put(updateUser).delete(deleteUser).get(searchUser)

module.exports = router;
