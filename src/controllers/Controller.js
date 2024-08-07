class Controller {
  constructor(serviceEntity) {
    this.serviceEntity = serviceEntity;
  }

  async getAll(req, res) {
    try {
      const registersList = await this.serviceEntity.getAllRegisters();
      return res.status(200).json(registersList);
    } catch (error) {
      //
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;

    try {
      const hasUpdated = await this.serviceEntity.updateRegister(updatedData, Number(id));

      if (!hasUpdated) {
        return res.status(400).json({message: `id ${id} registro não foi atualizado`});
      }

      return res.status(200).json({message: 'Atualizado com sucesso'});
    } catch (error) {
      //
    }
  }
}

module.exports = Controller;