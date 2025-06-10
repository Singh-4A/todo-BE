const express = require("express");

const connectionDb = require("./server/server");
const app = express();
const host = 500;
const cors = require("cors");

// Enable CORS for all routes
app.use(cors("http://localhost:500"));

app.use(express.json());
const router = require("./routers/user");
const signupRouter = require("./routers/signupUser");
const todoRouter = require("./routers/todoRoute");
// connect database
app.use("/api/v1/user", router);
app.use("/api/v1/auth", signupRouter);
app.use("/api/v1/todo", todoRouter);
connectionDb();

app.listen(host, () => {
  console.log(host);
});

// app.get("/", (req, res) => {
//   res.send("Welcome to Todo API All");
// });
// i am gonna write pollyfill for filter method

// Array.prototype.MyReduce = function (callBack) {
//   const initialValue = initialValue;

//   for (let i = 0; i < this.length; i++) {
//     let result = [];
//     if (callBack(this[i], i, this)) result.push(callBack(this[i]));
//   }
//   return result;
// };

// const array = [1, 2, 3, 4, 5];

// const getValue = array.MyReduce((item) => item > 4);
// console.log(getValue)
