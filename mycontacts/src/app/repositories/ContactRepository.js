const { v4 } = require('uuid');

let contacts = [{
  id: v4(),
  name: 'Hitalo Alves',
  email: 'hitalo.ralves@hotmail.com',
  phone: '12312384',
  category_id: v4(),
},
{
  id: v4(),
  name: 'Gabriel Alves',
  email: 'gabriel.ralves@hotmail.com',
  phone: '123123823214',
  category_id: v4(),
},
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      const contact = contacts.find((contact) => contact.id === id);
      resolve(contact);
    });
  }

  findByEmail(email) {
    return new Promise((resolve) => {
      const contact = contacts.find((contact) => contact.email === email);
      resolve(contact);
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name,
    email,
    phone,
    category_id,
  }) {
    return new Promise((resolve) => {
      const contact = {
        id: v4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(contact);

      resolve(contact);
    });
  }

  update({
    id,
    name,
    email,
    phone,
    category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id,
        name,
        email,
        phone,
        category_id,
      };

      contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactRepository();
