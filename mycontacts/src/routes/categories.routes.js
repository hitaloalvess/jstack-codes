const { Router } = require('express');

const categoriesRoutes = Router();

const CategoryController = require('../app/controllers/CategoryController');

categoriesRoutes.get('/', CategoryController.index);
categoriesRoutes.get('/:id', CategoryController.show);
categoriesRoutes.delete('/:id', CategoryController.delete);
categoriesRoutes.post('/', CategoryController.store);
categoriesRoutes.put('/:id', CategoryController.update);

module.exports = categoriesRoutes;
