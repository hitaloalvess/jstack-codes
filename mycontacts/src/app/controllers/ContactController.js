const ContactRepository = require('../repositories/ContactRepository');

class ContactController {
  async index(req, res) {
    // Listar todos os registro
    const contacts = await ContactRepository.findAll();

    res.json(contacts);
  }

  async show(req, res) {
    // Listar um único registro
    const { id } = req.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      // 404 Not found
      return res.status(404).json({ error: 'Contact not found!' });
    }

    res.json(contact);
  }

  store() {
    // Criar novo registro
  }

  update() {
    // Editar um registro
  }

  async delete(req, res) {
    // Deletar um registro
    const { id } = req.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      // 404 Not found
      return res.status(404).json({ error: 'Contact not found!' });
    }

    await ContactRepository.delete(id);

    // 204 No content
    res.sendStatus(204);
  }
}

module.exports = new ContactController();
