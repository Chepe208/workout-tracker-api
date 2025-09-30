const express = require('express');
const router = express.Router();

// Estado en memoria (simulación)
let users = [
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    name: "Carlos Navia",
    email: "carlos@example.com",
    fechaRegistro: "2025-09-12T12:00:00Z"
  },
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27620",
    name: "Fabricio Gomez",
    email: "Fabricio@example.com",
    fechaRegistro: "2025-09-12T12:00:00Z"
  }
];

router.get('/', (req, res) => {
    res.status(200).json(users);
});

// GET /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params;   // 1
  const user = users.find(u => u.id === id);   // 2

  if (!user) {   // 3
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.status(200).json(user);   // 4
});

module.exports = router;