const Services = require('./Services.js');

class UserServices extends Services {
  constructor() {
    super('Users')
  }
}

module.exports = UserServices;