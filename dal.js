const mongoose = require('mongoose');
const User = require('./pages/api/model');

// connect to mongo
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on('error', (error) => console.log(error));
database.once('connected', () => {
  console.log('Database connected dal');
});

async function create(name, email, password) {
  const user = new User({ name, email, password });
  const result = await user.save();
  return result;
}

async function all() {
  const users = await User.find();
  return users;
}

async function findOne(email) {
  const user = await User.findOne({ email });
  return user;
}

async function update(email, amount) {
  const updatedUser = await User.findOneAndUpdate(
    { email },
    { $inc: { balance: amount } },
    { new: true }
  );
  return updatedUser;
}

module.exports = { create, all, findOne, update };
