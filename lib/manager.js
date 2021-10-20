const Staff = require('./employee')

class Manager extends Staff{
  constructor(name, id, email, offNum){
    name = name;
    id = id;
    email = email;
    offNum = this.offNum 
  }

  getRole(){
    return "Manager";
  }

  getOffNum(){
    return this.offNum
  }

}



module.exports = Manager