let users = require('../mocks/users.js');

module.exports = {
    listUsers: (req, res) => {
        const { order } = req.query;
        const usersSorted = users.sort((a, b) => {
            if (order === 'asc') {
                return a > b ? 1 : -1;
            }

            return a < b ? 1 : -1;
        });

        res.send(200, usersSorted);
    },
    createUser: (req, res) => {
        const { name } = req.body;

        const lastUserId = users[users.length - 1].id;

        const newUser = {
            id: lastUserId + 1,
            name
        };

        users.push(newUser);

        res.send(201, newUser);
    },
    updateUser: (req, res) => {
        let { id } = req.params;
        const { name } = req.body;

        id = Number(id);

        const userExists = users.find(user => user.id === id);

        if (userExists) {
            users = users.map(user => {
                if (user.id === id) {
                    return {
                        ...user,
                        name
                    };
                }

                return user;
            })

            return res.send(200, { id, name });
        }

        res.send(400, { "error": 'User not exists' });
    },
    deleteUser: (req, res) => {
        let { id } = req.params;

        id = Number(id);

        const userExists = users.find(user => user.id === id);

        if (userExists) {
            users = users.filter(user => user.id !== id);

            return res.send(200, { "delete": true });
        }

        return res.send(400, { "error": "User not exists" });
    }
}