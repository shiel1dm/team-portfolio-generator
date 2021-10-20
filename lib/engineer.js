const Staff = require('./employee')

class Engineer extends Staff {
  constructor(name, id, email, github){
    name = name;
    id = id;
    email = email;
    github = this.github;
    
  }

  getRole() {
    return 'Engineer'
  }

  getGithub(){
    return this.github
  }

}



module.exports = Engineer