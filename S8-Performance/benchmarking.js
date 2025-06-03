const Benchmark = require('benchmark');
const crypto = require('crypto');

function generateRandomString(length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

function hashPasswordBcrypt(password) {
  return crypto.pbkdf2Sync(password, 'salt', 10000, 64, 'sha512').toString('hex');
}

function hashPasswordArgon2(password) {
  return crypto.scryptSync(password, 'salt', 64).toString('hex');
}


// Create a test suite
const suite = new Benchmark.Suite;

// Generate a sample password
const password = generateRandomString(12);

// Add tests
suite.add('Bcrypt Hashing', function() {
  hashPasswordBcrypt(password);
})
.add('Argon2 Hashing', function() {
  hashPasswordArgon2(password);
})
// Add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// Run async
.run({ 'async': true });