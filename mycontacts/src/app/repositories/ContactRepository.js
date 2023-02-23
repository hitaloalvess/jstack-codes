const { uuid } = require('uuidv4');

const contacts = [{
  id: uuid(),
  name: 'Hitalo Alves',
  email: 'hitalo.ralves@hotmail.com',
  phone: '12312384',
  category_id: uuid(),
}];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(contacts);
    });
  }
}

module.exports = new ContactRepository();
