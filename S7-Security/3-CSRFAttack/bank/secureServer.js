const express = require('express');
const bodyParser = require('body-parser');
const csrf = require('csurf');  // Use express-csrf instead of csurf
const session = require('express-session');
const cors = require('cors');
const app = express();

const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(session({
  cookie: {
    httpOnly: true,
    sameSite: 'Strict',  
  }
}));

app.use(csrf({ cookie: true })); 

app.use(bodyParser.urlencoded({ extended: true }));

let users = {
  alice: { balance: 10000 },
  attacker: { balance: 0 }
};

app.post('/transfer', (req, res) => {
  const { from, to, amount, _csrf } = req.body;

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

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});