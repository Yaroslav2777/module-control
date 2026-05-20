const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
const TOKEN_EXPIRES_IN = '1h';

const users = [
  {
    id: 1,
    email: 'admin@example.com',
    passwordHash: bcrypt.hashSync('AdminPass123!', 10),
    role: 'admin'
  },
  {
    id: 2,
    email: 'user@example.com',
    passwordHash: bcrypt.hashSync('UserPass123!', 10),
    role: 'regular'
  }
];

function createToken(user) {
  return jwt.sign({ userId: user.id, role: user.role }, JWT_SECRET, {
    expiresIn: TOKEN_EXPIRES_IN
  });
}

function authenticate(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token = header.split(' ')[1];
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid or expired token' });
    }
    req.user = payload;
    next();
  });
}

function authorize(requiredRole) {
  return (req, res, next) => {
    if (!req.user || req.user.role !== requiredRole) {
      return res.status(403).json({ error: 'Forbidden: insufficient role' });
    }
    next();
  };
}

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const user = users.find((u) => u.email === email);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash);
  if (!passwordMatches) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = createToken(user);
  res.json({ accessToken: token });
});

app.get('/admin', authenticate, authorize('admin'), (req, res) => {
  res.json({ message: 'Welcome, admin user!', user: req.user });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Auth service running on port ${port}`);
});

module.exports = { app, authenticate, authorize, createToken };
