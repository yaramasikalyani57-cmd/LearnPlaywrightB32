arrayname = []

arr = [1, 2, 3, 4]

arr2 = ["kalyani", "blr", false]
console.log(arr[3])// index always start with zero

console.log(arr.length)//lenth of the array 

//concatination joining of two arrays

// str = "student"
// str1 = "teacher"
// school = str + str1
// console.log(school)
// // other concataniation method
// school = str.concat(str1)
// console.log(school)

str = "Playwright"
str2 = "Javascript"

finalstr = str + str2
console.log(finalstr)

//sort method

arr3 = [1, 90, 41, 3]
arr4 = arr3.sort()
console.log(arr4)
//reverse
arr4 = ["bus", "carrot", "dosa", "apple"]

arr5 = arr4.reverse()
console.log(arr5)
// arr5 = arr3.concat(arr4.sort())//
// console.log(arr5)

//convert string to array split

arr6 = ["kalyani"]
// arr7 = arr6.split()
console.log("kalyani".split(""))// splitting 
// console.log(arr6.split(""))
arr6 = ["kalyani", 1, "blr"].join("")

console.log(arr6)//join() method

//push
// arr3.push["bharat"]
// console.log(arr6)

arr10 = ["n", "a", "b"]
// arr10.push("k")
// console.log(arr10)

arr10.pop("n")// .pop()
console.log(arr10)

arr10.unshift("a")
console.log(arr10)//.unshift()

// arr10.includes("n")
console.log(arr10.includes("n"))// includes() the elements present in array or not it returns true or false



// work

// slice 

const numbs = [1, 2, 3, 4]
const cal = numbs.slice(0, 4)
console.log(cal)

const letters = ["a", "b", 'c']
const firsttwo = letters.slice(0, 2)
console.log(firsttwo)


// splice 

const month = ["jan", "feb", "march"]
month.splice(0, 1, 5)// start dletingelements, add new item
console.log(month)


const number = [1, 2, 3, 4]
number.splice(2, 2, 10)
console.log(number)

// filter()

const food = ["apple", "banana", "carrot", "tamato"]
const vegetable = food.filter(item => item === "beans" || item == "tamato")

console.log(vegetable)

//
const numb = [1, 2, 3, 4, 5]
const even = numb.filter(num => num % 2 === 0)
console.log(even)


// map

const numbers = [1, 2, 3, 4, , 5]
const result = numbers.map(num => num * 2)
console.log(result)

const alpahbet = ["kalyani", "navitha"]
const res = alpahbet.map(item => item.toUpperCase())
console.log(res)

