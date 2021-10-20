const inquirer = require('inquirer');
const Staff = require('./lib/employee.js').default;
const manager = require('./lib/manager.js');
//const Engineer = require('./lib/engineer.js')
const intern = require('./lib/intern.js')



new 
inquirer.prompt(manager.firstQ)
  .then((data) => {
    var name = data.name;
    var id = data.id;
    var email = data.email;
    var offNum = data.office;
    console.log(name, id, email, offNum)
    
    
    
    
    //new manager.Manager(offNum)   
    
    inquirer.prompt(employee.newEmp)
      .then((answer) =>{
        const form = answer.continue[0];
        console.log(form)
        if(form === 'Engineer'){
          inquirer.prompt(engineer.engineerQ)

          .then((data) =>{
            console.log(data)
            console.log('In if for Engine')

          })
        }
        else if(form === 'Intern'){
          inquirer.prompt(intern.internQ)
          .then((data) => {
            console.log(data)
            console.log('In else if for intern')
          })
        }
        else{
          console.log('end program')
        }
      })

    
  })