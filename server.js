const app = require("./api/index");
const dotenv = require("dotenv");
const connectDB = require("./db/db");
const { isArray, multiply } = require("lodash");
dotenv.config({ path: ".env" });

const startServer = async () => {
  try {
    await connectDB();
  
    const port = process.env.PORT || 500;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (err) {
    console.error("Failed to start:", err);
    process.exit(1);
  }
};



startServer();



// i gonna write here for logic find in array min and max value

// const array = [1000, 200, 30, 22323,4, 4545, 6]

// let min = array[0]
// let max = array[0]

// for (let i = 0; i < array.length; i++) {
//   if (array[i] < min) {
//     min = array[i]
//   } else if (array[i] > max) {
//     max = array[i]
//   }
// }

// console.log(min, "min")
// console.log(max, "max")


// i gonna write here logic for flatten

// const flatten = [1, 2, [3, [4, [5, [6]]]]]

// function fixFlattenValue(array) {
//   let result = []
//   if (Array.isArray(array)) {
//     array.forEach((elm) => {
//       result.push(...fixFlattenValue(elm))
//     })
//   } else {
//     result.push(array)
//   }
//   return result
// }

// console.log(fixFlattenValue(flatten), "arrat")



// const calc = {
//   inital: 0,
//   add: function (value) {
//     this.inital += value
//     return this
//   },
//   multiply: function (value) {
//     this.inital *= value
//     return this
//   },
//   subtract: function (value) {
//     this.inital -= value
//     return this
//   },
//   add: function (value) {
//     this.inital += value
//     return this
//   }
// }

// const result = calc.add(10)?.multiply(5).subtract(30).add(10)
// console.log(result.inital, "result")