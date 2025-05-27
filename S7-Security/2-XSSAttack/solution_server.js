// server.js
const express = require('express');
const sqlite3 = require('sqlite3');
const path = require('path');
const app = express();

// Use security libraries
const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const purify = DOMPurify(window);
const helmet = require('helmet');
const escape = require('escape-html');

// Set-Cookie: jwt=eyJhbGciOi...; HttpOnly; Secure;


```
fetch("/api/user", {
  method: "GET",
  credentials: "include", 
});


CSP: [fonts.google.om, cdn.akamai.com]
```



//Security middleware
// app.use(helmet()); // Adds various HTTP headers for security. It should be the first


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

const db = new sqlite3.Database(':memory:');

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
    (1, 'Welcome to our blog!', 'This is our first post. Feel free to test comment!')`);
});

// Vulnerable Routes

// 1. Search - Protected from Reflected XSS
app.get('/api/search', (req, res) => {
  const searchTerm = req.query.q;
  // Vulnerable: Search term reflected without sanitization
  db.all(`
    SELECT blog_posts.*, users.username 
    FROM blog_posts 
    JOIN users ON blog_posts.user_id = users.id 
    WHERE title LIKE ?`, 
    [`%${searchTerm}%`], 
    (err, posts) => {
      if (err) return res.status(500).json({ error: err.message });
       const escapedSearchTerm = escape(searchTerm);
       console.log(searchTerm, escapedSearchTerm);
       // Escape all user-provided data before inserting into HTML
       const safeHtml = `
       <h2>Search Results for: ${escapedSearchTerm}</h2>
       <div>${posts.map(post => `
         <div>
           <h3>${escape(post.title)}</h3>
           <p>By: ${escape(post.username)}</p>
         </div>
       `).join('')}</div>
     `;
     
     res.send(safeHtml);
    });
});

// 2. Comment submission - Protected from Stored XSS
app.post('/api/posts/:postId/comments', (req, res) => {
  const { userId, content } = req.body;
  const postId = req.params.postId;
  
  // Sanitize the comment content
  const sanitizedContent = purify.sanitize(content, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
    ALLOWED_ATTR: []
  });

  console.log(content, sanitizedContent);
  db.run('INSERT INTO comments (post_id, user_id, content) VALUES (?, ?, ?)',
    [postId, userId, sanitizedContent], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true });
  });
});

// 4. Get post with comments - Protected from XSS
app.get('/api/posts/:id', (req, res) => {
    const postId = req.params.id;
    
    db.get('SELECT * FROM blog_posts WHERE id = ?', [postId], (err, post) => {
      if (err) return res.status(500).json({ error: err.message });
      
      db.all(`
        SELECT comments.*, users.username 
        FROM comments 
        JOIN users ON comments.user_id = users.id 
        WHERE post_id = ?`, 
        [postId], 
        (err, comments) => {
          if (err) return res.status(500).json({ error: err.message });
          
          // Sanitize post and comment content before sending
          const sanitizedPost = {
            ...post,
            title: escape(post.title),
            content: purify.sanitize(post.content)
          };
          
          const sanitizedComments = comments.map(comment => ({
            ...comment,
            username: escape(comment.username),
            content: purify.sanitize(comment.content)
          }));
          
          res.json({
            post: sanitizedPost,
            comments: sanitizedComments
          });
        });
    });
  });

app.listen(3000, () => {
  console.log('Server running on port 3000');
});