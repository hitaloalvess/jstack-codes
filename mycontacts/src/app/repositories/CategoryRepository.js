const db = require('../../database');

class CategoryRepository {
  async findAll(orderBy = 'ASC ') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

    const categories = await db.query(`SELECT * FROM categories ORDER BY name ${direction}`);

    return categories;
  }

  async findById(id) {
    const [category] = await db.query('SELECT * FROM categories WHERE id = $1', [id]);

    return category;
  }

  async create({ name }) {
    const [category] = await db.query(`
      INSERT INTO categories(name) 
      VALUES($1)
      RETURNING *
    `, [name]);

    return category;
  }

  async update({ id, name }) {
    const [category] = await db.query(`
      UPDATE categories
      SET name = $1
      WHERE id = $2
      RETURNING * 
    `, [name, id]);

    return category;
  }

  async delete(id) {
    const deleteOp = await db.query(`
      DELETE FROM categories
      WHERE id = $1
    `, [id]);

    return deleteOp;
  }
}

module.exports = new CategoryRepository();
