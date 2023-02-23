const { uuid } = require('uuidv4');

let contacts = [{
  id: uuid(),
  name: 'Hitalo Alves',
  email: 'hitalo.ralves@hotmail.com',
  phone: '12312384',
  category_id: uuid(),
},
{
  id: uuid(),
  name: 'Gabriel Alves',
  email: 'gabriel.ralves@hotmail.com',
  phone: '123123823214',
  category_id: uuid(),
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

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }
}

module.exports = new ContactRepository();
