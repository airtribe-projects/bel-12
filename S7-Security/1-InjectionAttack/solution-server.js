// secure-server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const bcrypt = require('bcrypt');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = new sqlite3.Database(':memory:');

// 1. Database initialization with hashed passwords
db.serialize(async () => {
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    password TEXT,
    email TEXT,
    is_admin BOOLEAN DEFAULT 0,
    credit_card TEXT,
    api_key TEXT
  )`);

  // Blog posts table
  db.run(`CREATE TABLE blog_posts (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    title TEXT,
    content TEXT,
    is_private BOOLEAN DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);  
  // Insert sample data with hashed passwords
  const adminHash = await bcrypt.hash('admin123', 10);
  const aliceHash = await bcrypt.hash('alice123', 10);
  
  db.run(`INSERT INTO users (username, password, email, is_admin, credit_card, api_key) VALUES 
    (?, ?, 'admin@blog.com', 1, '4532-xxxx-xxxx-9876', 'sk_live_admin_123456'),
    (?, ?, 'alice@blog.com', 0, '4532-xxxx-xxxx-5678', 'sk_live_user_123456')`,
    ['admin', adminHash, 'alice', aliceHash]);
    
    db.run(`INSERT INTO blog_posts (user_id, title, content) VALUES 
      (1, 'Welcome to our blog!', 'This is our first post. Feel free to test comment!')`);
});

app.use(express.static(path.join(__dirname)));

// Secure Routes

// 1. Login - Protected from "always true" attack
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  
  // Input validation
  if (!username || !password || 
      typeof username !== 'string' || 
      typeof password !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  
  try {
    // Use parameterized query
    const query = `
      SELECT id, username, is_admin, email, password
      FROM users 
      WHERE username = ?
    `;

    db.get(query, [username], async (err, user) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      if (!user) return res.status(401).json({ error: 'Invalid credentials' });
      
      // Verify password using bcrypt
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
      
      // Don't send sensitive data
      delete user.password;
      res.json(user);
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// 2. Add Posts - Vulnerable to query stacking
app.post('/api/posts', (req, res) => {
  // const { keyword } = req.body;
  const post = {
    id: Math.round(Math.random()*1000),
    title: req.body.title,
    content: req.body.content,
    isPrivate: false
  }
  
  console.log(req.body);
  
  const id = Math.round(Math.random()*1000);
  // Use parametrized query
  const query = `INSERT INTO blog_posts (id, title, content) VALUES (${id}, ?, ?)`;

  console.log("Executing query:", query);

  const query2 = `SELECT * FROM blog_posts`;
  // Use DB.run
  // db.exec allows running multiple queries
  db.run(query, [req.body.title, req.body.content], (err, results) => {
    console.log(results);
    if (err) return res.status(500).json({ error: err.message });

    db.all(query2, (err, posts) => {
      if (err) { return res.status(500).json({ error: err.message });}
      res.json(posts[posts.length -1] || []);
    });
  });
});


// 2. Search Posts - Protected from query stacking
app.get('/api/posts/search', (req, res) => {
  const { keyword } = req.query;
  
  // Input validation
  if (!keyword || typeof keyword !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  
  // Use parameterized query with single statement
  const query = `
    SELECT id, title, content 
    FROM blog_posts 
    WHERE title LIKE ? OR content LIKE ?
  `;
  
  const searchPattern = `%${keyword}%`;
  db.all(query, [searchPattern, searchPattern], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    res.json(results || []);
  });
});

// 3. User Profile - Protected from data exfiltration
app.get('/api/users/profile', (req, res) => {
  const { username } = req.query;
  
  // Input validation
  if (!username || typeof username !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  
  // Use parameterized query with limited columns
  const query = `
    SELECT username, email
    FROM users 
    WHERE username = ?
  `;
  
  db.get(query, [username], (err, user) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  });
});

app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});