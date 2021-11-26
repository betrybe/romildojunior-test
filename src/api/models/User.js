const mongoose = require('../../database');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        type: 'invalidemail',
        validator: function (email) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        }
      }
    },
    name: { type: String, required: true },
    password: { type: String, required: true, select: false },
    role: { type: String, default: 'user' }
  },
  { versionKey: false }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;