// Array Example
// var students = ["Ali","Hamza","Aleem","Aleeha","Abeeha"]
// console.log(students[3])

//Example  alert
// var students = ["Ali","Hamza","Aleem","Aleeha","Abeeha"]
//   alert ("welcome"   +   students [2])

// Adding and Removing Arrary

//.pop() is use to eleminate the alemant from the end
// var students = ["Ali","Hamza","Aleem","Aleeha","Abeeha"]
// students.pop()
// console.log(students)

//.push() is use to add the value at the end
// var students = ["Ali","Hamza","Aleem","Aleeha","Abeeha"]
// students.push("Waseem")
// console.log(students)

//Removing Inserting and Extracting Eelement

//.shift() is use to delete the value from the start
// var students = ["Ali","Hamza","Aleem","Aleeha","Abeeha"]
// students.shift()
// console.log(students)

// .unshift() it is use to add the value at the start
// var students = ["Ali","Hamza","Aleem","Aleeha","Abeeha"]
// students.unshift("Aqsa")
// console.log(students)

//.splice(1,1,"Nazish") 1st target value,delete,add value
// var students = ["Ali","Hamza","Aleem","Aleeha","Abeeha"]
// students.splice(1,3,"Nazish")
// console.log(students)

//slice(1,4)
var students = ["Ali","Hamza","Aleem","Aleeha","Abeeha"]
var copystudents = students.slice(1,4)
console.log(students)

