class ContactController {
  index(req, res) {
    // Listar um único registro
    res.send('Send index contact controller');
  }

  show() {
    // Listar todos os registros
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
