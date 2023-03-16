const { Router } = require('express');

const categoriesRoutes = require('./categories.routes');
const contactsRoutes = require('./contacts.routes');

const router = new Router();

router.use('/categories', categoriesRoutes);
router.use('/contacts', contactsRoutes);
