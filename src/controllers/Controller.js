class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registersList = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(registersList)
    } catch (error) {
      
    }
  }
}

module.exports = Controller;