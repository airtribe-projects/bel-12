const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Fake user data and balances
let users = {
  alice: { balance: 10000 },
  attacker: { balance: 0 }
};

// Route to simulate money transfer
app.post('/transfer', (req, res) => {
  const { from, to, amount } = req.body;

  if (!users[from] || !users[to]) {
    return res.status(400).send('Invalid users');
  }

  users[from].balance -= parseInt(amount, 10);
  users[to].balance = (users[to].balance || 0) + parseInt(amount, 10);
  const message = `Transferred ${amount} from ${from} to ${to}.`;
  console.log(message);
  console.log("Current Balances: ", users);
  res.send(message);
});

app.post('/', (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});