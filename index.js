const studentInfo = require("./information.js");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: studentInfo.student.name + " from " + studentInfo.student.campus,
    e: "oO",
    T: "U ",
  })
);
