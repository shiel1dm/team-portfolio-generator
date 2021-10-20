const Staff = require('./employee')

class Intern extends Staff{
  constructor(name, id, email, school){
    name = name;
    id = id;
    email = email;
    school = this.school;
  }

  getRole() {
    return "Intern"
  }

  getSchool(){
    return this.school
  }
}


module.exports = Intern