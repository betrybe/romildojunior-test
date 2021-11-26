const router = require('express').Router();
const UserController = require('../controllers/UserController');

router.post('/users', UserController.create);

module.exports = router;