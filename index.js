const express = require('express');
const cors = require('cors');
const dal = require('./dal');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/account/create/:name/:email/:password', async (req, res) => {
  const { name, email, password } = req.params;
  try {
    const user = await dal.create(name, email, password);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not create user' });
  }
});

app.get('/account/login/:email/:password', async (req, res) => {
  const { email, password } = req.params;
  try {
    const user = await dal.findOne(email);
    if (user && user.password === password) {
      res.json(user);
    } else {
      res.status(401).json({ error: 'Incorrect email or password' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not log in user' });
  }
});

app.get('/account/all', async (req, res) => {
  try {
    const users = await dal.all();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not retrieve users' });
  }
});

app.get('/account/update/:email/:amount', async (req, res) => {
  const { email, amount } = req.params;
  try {
    const updatedUser = await dal.update(email, Number(amount));
    res.json(updatedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not update user' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
