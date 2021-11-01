const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "index.html")

const generate = require('./src/HTMLGen.js');

const roster = [];
const idArray = []; //this is important b/c of the way I'm adding employees, I'm using this array to validate a new id.

function appCLI() {

  function firstQ(){
    console.log('Please answer the following questions')
    inquirer.prompt([
      {
        type: 'input',
        name: 'mName',
        message: 'Enter the team manager\'s name.',
        validate: (input) => {
          if(typeof input !== 'string'){
            return 'Name must be a string'
          }else{
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'MiD',
        message: 'What is the manager\'s id?',
        validate: input => {
          if (isNaN(input)) {
            return 'Please input a number'
          }else{
            return true
          }
        }
      },
      {
        type: 'input',
        name: 'mEmail',
        message: 'Enter the manager\'s email address',
        validate: input => {
          if(!input.includes('@') || !input.includes('.')){
            return 'Please enter a valid email address'
          }else{
            return true
          }
        }
      },
      {
        type: 'input',
        name:'mOffice',
        message: 'Input the manager\'s office number.',
        validate: input => {
          if(isNaN(input)){
            return 'Please input a number'
          }else{
            return true
          }
        }
      }

    ]).then(answers => {
      const manager = new Manager(answers.mName, answers.MiD, answers.mEmail, answers.mOffice)
      roster.push(manager)
      idArray.push(answer.MiD)
      createRoster()
    })
  }

  function createRoster(){
    inquirer.prompt([
      {
        type: 'list',
        name: 'continue',
        message: 'Would you like to continue?',
        choices: [
          'Yes, add an Engineer',
          'Yes, add an Intern',
          'No, my roster is complete'
        ]
      }
    ]).then(input => {
      switch (input.continue){
        case 'Yes, add an Engineer':
          addEngineer()
          break
        case 'Yes, add an Intern':
          addIntern()
          break
        default:
          buildHTML()
      }
    })
  }

  function addEngineer() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'eName',
        message: 'Enter the engineer\'s name.',
        validate: (input) => {
          if(typeof input !== 'string'){
            return 'Name must be a string'
          }else{
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'EiD',
        message: 'What is the engineer\'s id?',
        validate: input => {
          if (isNaN(input)) {
            return 'Please input a number'
          }else{
            return true
          }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter the engineer\'s github username',
        validate: input => {
          if(typeof input !== 'string'){
            return 'Name must be a string'
          }else{
            return true;
          }
        }
      },
      {
        type: 'input',
        name:'eOffice',
        message: 'Input the engineer\'s office number.',
        validate: input => {
          if(isNaN(input)){
            return 'Please input a number'
          }else{
            return true
          }
        }
      }

    ]).then(answers => {
      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
      teamMembers.push(engineer);
      idArray.push(answers.engineerId);
      createTeam();
    });
  }
  function addIntern() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'iName',
        message: 'Enter the engineer\'s name.',
        validate: (input) => {
          if(typeof input !== 'string'){
            return 'Name must be a string'
          }else{
            return true;
          }
        }
      },
      {
        type: 'input',
        name: 'internID',
        message: 'What is the engineer\'s id?',
        validate: input => {
          if (isNaN(input)) {
            return 'Please input a number'
          }else{
            return true
          }
        }
      },
      {
        type: 'input',
        name: 'iEmail',
        message: 'Enter the engineer\'s email address',
        validate: input => {
          if(!input.includes('@') || !input.includes('.')){
            return 'Please enter a valid email address'
          }else{
            return true
          }
        }
      },
      {
        type: 'input',
        name:'school',
        message: 'What school does the intern attend?',
        validate: (input) => {
          if(typeof input !== 'string'){
            return 'Name must be a string'
          }else{
            return true;
          }
        }
      }

    ]).then(answers => {
      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
      teamMembers.push(intern);
      idArray.push(answers.internId);
      createTeam();
    });
  }
  function buildTeam() {
    // Create the output directory if the output path doesn't exist
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR)
    }
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
  }

  createManager();
}

appCLI()