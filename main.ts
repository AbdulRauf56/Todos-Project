#! \usr\bin\env node

import inquirer from "inquirer";
import chalk from "chalk";

// Printing a Welcome message.
console.log(chalk.blue("\n\tWelcome to Abdul Rauf's Todo!\n"));

let todos = [];
let condition = true;

while(condition){
    let addWork = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: (chalk.green("What you want to add in your todo?"))
        },

        {
            name:"addMore",
            type: "confirm",
            message: (chalk.green("Do want to add more in your todo?")),
            default: "false"
        }
    ]);
    todos.push(addWork.todo);
    condition = addWork.addMore
    console.log(todos)
}