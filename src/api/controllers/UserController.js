const User = require('../models/User');

class UserController {
  async create(req, res) {
    const { email, name, password, role } = req.body;

    try {
      const createdUser = await User
        .create({ email, name, password, role });

      delete createdUser._doc.password;

      return res.status(201).json({ user: createdUser._doc });
    } catch (err) {
      if (err.code && err.code === 11000) {
        return res.status(409).json({ message: 'Email already registered.' });
      }

      for (const error of Object.values(err.errors)) {
        if (error.kind === 'required' || error.kind === 'invalidemail') {
          return res.status(400).json({ message: 'Invalid entries. Try again.' });
        }
      }

      return res.status(500).json(err);
    }
  }
}

module.exports = new UserController();