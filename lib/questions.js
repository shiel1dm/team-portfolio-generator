

var newEmp = 
{
  type: 'checkbox',
  message: 'Would you like to add another team member?',
  name: 'continue',
  choices: ['Engineer','Intern','None']

};

var engineerQ = [

  {
    type: 'input',
    name: 'name',
    message: 'What is the project managers name?'
    
  },
  {
    type: 'input',
    name: 'id',
    message: 'What is the ID number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter the managers Email address: '
  },
  {
  type: 'input',
  name: 'github',
  message: 'Enter your github username: '
  }
]

module.exports = {
  firstQ,
  newEmp,
  engineerQ

}