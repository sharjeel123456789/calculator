#! /usr/bin/env node

import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstnumber" },
  { messege: "Enter second number", type: "number", name: "secondnumber" },
  {
    messege: "Select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplacation", "Division"],
  },
]);

if (asnwer.operator === "Addition") {
  console.log(asnwer.firstnumber + asnwer.secondnumber);
} else if (asnwer.operator === "Subtraction") {
  console.log(asnwer.firstnumber - asnwer.secondnumber);
} else if (asnwer.operator === "Multiplacation") {
  console.log(asnwer.firstnumber * asnwer.secondnumber);
} else if (asnwer.operator === "Division") {
  console.log(asnwer.firstnumber / asnwer.secondnumber);
} else {
  console.log("Please select valid number");
}
