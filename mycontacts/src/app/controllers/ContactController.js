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

  async store(req, res) {
    // Criar novo registro

    const {
      name,
      email,
      phone,
      category_id,
    } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const emailExists = await ContactRepository.findByEmail(email);

    if (emailExists) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    const contact = await ContactRepository.create({
      name,
      email,
      phone,
      category_id,
    });
    res.json(contact);
  }

  async update(req, res) {
    // Editar um registro
    const { id } = req.params;
    const {
      name,
      email,
      phone,
      category_id,
    } = req.body;

    const contactExists = await ContactRepository.findById(id);
    if (!contactExists) {
      // 404 Not found
      return res.status(404).json({ error: 'Contact not found!' });
    }

    const contactByEmail = await ContactRepository.findByEmail(email);
    if (contactByEmail && contactByEmail.id !== id) {
      return res.status(400).json({ error: 'Email is already in use' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const updatedContact = await ContactRepository.update({
      id,
      name,
      email,
      phone,
      category_id,
    });

    res.json(updatedContact);
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
