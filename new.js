// let data = ["arjun ", "ankit", "anuyj", "prabhjot", "dsds", "sdsdsdsd"]
// let currentIndex = 0

// const changeName = document.getElementById("coder")
// changeName.style.cursor = "pointer"

// changeName.addEventListener("click", () => {
//     changeName.textContent = `Hello ${data[currentIndex]}`
//     currentIndex=(currentIndex+1)%data.length

// })




// const flattenArray = [1, [2, [3, [4]]]]

// function flattenFunc(arr) {
//     let result = []
//     if (Array.isArray(arr)) {
//         arr.forEach((item) => result.push(...flattenFunc(item)))
//     } else {
//         result.push(arr)
//     }
//     return result
// }



// console.log(flattenFunc(flattenArray))


// const wordCount = [1, 1, 22, 3, 3, 3, 3, 5, 5]
// let result = {}
// for (let i = 0; i < wordCount.length; i++) {
//     let key = wordCount[i]
//     if (result[key]) {
//         result[key] = result[key] + 1
//     } else {
//         result[key] = 1
//     }

// }

// let arr = []

// for (key in result) {
//     arr.push(+key)
//     // console.log(key, result[key])

// }

// console.log(arr)


// how to find min max value in array

// const arr = [ 1, 2, 3, 4, 5, 10, 100]
// let largeHighValue = arr[0]
// let secondHighValue = arr[0]

// for (let i = 0; i < arr.length; i++) {
//     let key = arr[i]
//     if (key > largeHighValue) {
//         secondHighValue = largeHighValue
//         largeHighValue = key
//     }
//     if (key > largeHighValue && key < secondHighValue) {
//         secondHighValue = key
//     }
// }




// console.log(secondHighValue)
// console.log(largeHighValue)



// let cla = {
//     initial: 0,
//     add(value) {
//         this.initial += value
//         return this
//     },
//     multiply(value) {
//         this.initial *= value
//         return this
//     },
//     substring(value) {
//         this.initial -= value
//         return this
//     }
// }

// let total = cla.add(3)?.multiply(10)?.substring(3).add(1)

// console.log(total.initial)


// Array.prototype.myMap = function (cb) {
//     if (typeof cb !== "function") {
//         throw new console.error("my map is not defined");

//     }

//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         result.push(cb(this[i], i, this))
//     }

//     return result

// }



// Array.prototype.myForEach = function (cb) {
//     if (typeof cb !== "function") {
//         throw new console.error("my forEach is not defined");

//     }
//     for (let i = 0; i < this.length; i++) {
//         cb(this[i], i, this)
//     }
// }


// Array.prototype.myfilter = function (cb) {
//     if (typeof cb !== "function") {
//         throw new console.error("my myFilter is not defined");

//     }
//     let result = []
//     for (let i = 0; i < this.length; i++) {
//         if (cb(this[i], i, this)) {
//             result.push(this[i])
//         }
//     }
//     return result
// }



// Array.prototype.myReduce = function (cb, intialVlaue) {
//     if (typeof cb !== "function") {
//         throw new console.error("my myReduce is not defined");

//     }
//     let accumlator = intialVlaue

//     for (let i = 0; i < this.length; i++) {
//         accumlator = accumlator ? cb(accumlator, this[i], i, this) : this
//     }
//     return accumlator
// }

// const arr = [10]

// let newData = arr.myReduce((intialVlaue, currentValue) => currentValue * intialVlaue, 100)
// console.log(newData)

// document.getElementById("myid").addEventListener("click", (e) => {
//     if (e.target.tagName === "LI") {
//         console.log(e.target.innerText)
//     }


// })

// let time = 0
// console.log("time", time)

// function throttle(cb, delay = 500) {
//     let waiting = false;
//     return function (...args) {
//         if (waiting) return;
//         cb.apply(this, args);
//         waiting = true;
//         setTimeout(() => {
//             waiting = false;
//         }, delay);
//     };
// }

// const trhrott = throttle(() => {
//     console.log("hello")
//     time = 500

// }, time)



// document.getElementById("btn").addEventListener("click", () => {
//     trhrott()
// })

// const arr_1 = ["a", "b", 4, 5, 100,100, "c","a"];

// let number = []
// let string = []

// for (let i = 0; i < arr_1.length; i++) {
//     if (typeof arr_1[i] === "number") {
//         number.push(arr_1[i])
//     } else if (typeof arr_1[i] === "string") {
//         string.push(arr_1[i])
//     }

// }

// const numberCount = {}

// for (let i = 0; i < number.length; i++) {
//     let key = number[i]

//     if (numberCount[key]) {
//         numberCount[key] = numberCount[key] + 1
//     } else {
//         numberCount[key] = 1
//     }

// }


// const stringCount = {}

// for (let i = 0; i < number.length; i++) {
//     let key = string[i]

//     if (stringCount[key]) {
//         stringCount[key] = stringCount[key] + 1
//     } else {
//         stringCount[key] = 1
//     }

// }






