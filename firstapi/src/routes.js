const { listUsers, createUser, updateUser, deleteUser } = require('./controllers/UserController.js');

module.exports = [{
        endpoint: '/users',
        method: 'GET',
        handler: listUsers
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: createUser
    },
    {
        endpoint: '/users/:id',
        method: 'PUT',
        handler: updateUser
    },
    {
        endpoint: '/users/:id',
        method: 'DELETE',
        handler: deleteUser
    }
];