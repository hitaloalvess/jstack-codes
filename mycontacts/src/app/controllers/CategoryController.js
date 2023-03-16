const CategoryRepository = require('../repositories/CategoryRepository');

class CategoryController {
  async index(req, res) {
    // Listar todas categorias

    const { orderBy } = req.query;

    const categories = await CategoryRepository.findAll(orderBy);

    res.json(categories);
  }

  async show(req, res) {
    // Listar um único registro
    const { id } = req.params;

    const category = await CategoryRepository.findById(id);

    if (!category) {
      res.status(404).json({ error: 'Category not found!' });
    }

    res.json(category);
  }

  async store(req, res) {
    // Criar categoria
    const { name } = req.body;

    if (!name) {
      res.status(400).json({ error: 'Name is required!' });
    }

    const category = await CategoryRepository.create({ name });

    res.json(category);
  }

  async update(req, res) {
    // Atualizar categoria

    const { id } = req.params;
    const { name } = req.body;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      res.status(404).json({ error: 'Category not found!' });
    }

    if (!name) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const category = await CategoryRepository.update({ id, name });

    res.json(category);
  }

  async delete(req, res) {
    // Deletar categoria
    const { id } = req.params;

    const categoryExists = await CategoryRepository.findById(id);

    if (!categoryExists) {
      res.status(404).json({ error: 'Category not found!' });
    }

    await CategoryRepository.delete(id);

    res.sendStatus(204);
  }
}

module.exports = new CategoryController();
