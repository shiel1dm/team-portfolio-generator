const inquirer = require('inquirer');
const employee = require('./lib/employee.js');
var staff = [];
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the project managers name?'
      
    },
    {
      type: 'input',
      name: 'Id',
      message: 'What is the ID number'
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the managers Email address: '
    },
    {
      type: 'input',
      name: 'office',
      message: 'Please enter your office #'

    },
    {
      type: 'checkbox',
      message: 'Please select your role.',
      name: 'role',
      choices: ['Manager']

    },
  ])
  .then((data) => {
    console.log(data)
    new employee(JSON.stringify(data))
    console.log(staff)


  })

