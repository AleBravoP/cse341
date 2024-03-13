const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users');

router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);

// Create a POST route to create a new contact
router.post('/', usersController.createUser);

// Create a PUT route to update a contact
router.put('/:id', usersController.updateUser);

// Create a DELETE route to delete a contact
router.delete('/:id', usersController.deleteUser);

module.exports = router;