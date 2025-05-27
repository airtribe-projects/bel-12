// server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');

const app = express();
const db = new sqlite3.Database(':memory:');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Database setup
db.serialize(() => {
  // Create tables
  db.run(`CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT UNIQUE,
    email TEXT,
    profile_bio TEXT
  )`);
  
  db.run(`CREATE TABLE blog_posts (
    id INTEGER PRIMARY KEY,
    user_id INTEGER,
    title TEXT,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);
  
  db.run(`CREATE TABLE comments (
    id INTEGER PRIMARY KEY,
    post_id INTEGER,
    user_id INTEGER,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY(post_id) REFERENCES blog_posts(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
  )`);

  // Add sample data
  db.run(`INSERT INTO users (username, email, profile_bio) VALUES 
    ('admin', 'admin@example.com', 'Site Administrator'),
    ('john_doe', 'john@example.com', 'Regular blogger')`);
    
  db.run(`INSERT INTO blog_posts (user_id, title, content) VALUES 
    (1, 'Welcome to our blog!', 'This is our first post. Feel free to comment!'),
    (2, 'Our new blog!', 'This is our Second post. Feel free to comment!')`);
});


app.get('/api/search', (req, res) => {
  const searchTerm = req.query.q;
  db.all(`
    SELECT blog_posts.*, users.username 
    FROM blog_posts 
    JOIN users ON blog_posts.user_id = users.id 
    WHERE title LIKE ?`, 
    [`%${searchTerm}%`], 
    (err, posts) => {
      if (err) return res.status(500).json({ error: err.message });
      res.send(`
        <h2>Search Results for: ${searchTerm}</h2>
        <div>${posts.map(post => 
          `<div>
            <h3>${post.title}</h3>
            <p>By: ${post.username}</p>
          </div>`
        ).join('')}</div>
      `);
    });
});

app.post('/api/posts/:postId/comments', (req, res) => {
  const { userId, content } = req.body;
  const postId = req.params.postId;
  db.run('INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)',
    [postId, userId, content], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

app.get('/api/posts/:id', (req, res) => {
  const postId = req.params.id;
  db.get('SELECT * FROM blog_posts WHERE id = ?', [postId], (err, post) => {
    if (err) return res.status(500).json({ error: err.message });
    db.all('SELECT comments.*, users.username FROM comments JOIN users ON comments.user_id = users.id WHERE post_id = ?', 
      [postId], 
      (err, comments) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ post, comments });
      });
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});