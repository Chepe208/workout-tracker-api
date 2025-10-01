// Estado en memoria (simulación)
let users = [
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27611",
    name: "Carlos Navia",
    email: "carlos@example.com",
    role: "admin",
    fechaRegistro: "2025-09-12T12:00:00Z"
  },
  {
    id: "b42f53fa-7b30-4b91-8d36-dc1c6ef27620",
    name: "Fabricio Gomez",
    email: "Fabricio@example.com",
    role: "user",
    fechaRegistro: "2025-09-12T12:00:00Z"
  }
];

// Controladores
const userController = {
  // GET /users/:id
  getUserById: (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === id);

    if (!user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    res.status(200).json(user);
  },

  // GET /users - buscar por rol y nombre
  getUsers: (req, res) => {
    const { role, search } = req.query;
    let result = users;

    if (role) {
      result = result.filter(u => u.role === role);
    }

    if (search) {
      result = result.filter(u =>
        u.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    res.status(200).json(result);
  },

  // POST /users
  createUser: (req, res) => {
    const { name, email, role } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name y email son requeridos' });
    }

    // Verificar si el email ya existe
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      return res.status(409).json({ error: 'El email ya está registrado' });
    }

    const newUser = {
      id: `b42f53fa-7b30-4b91-8d36-dc1c6ef2${Date.now().toString().slice(-6)}`,
      name,
      email,
      role: role || 'user',
      fechaRegistro: new Date().toISOString()
    };

    users.push(newUser);
    res.status(201).json(newUser);
  },

  // PUT /users/:id
  updateUser: (req, res) => {
    const { id } = req.params;
    const { name, email, role } = req.body;

    const index = users.findIndex(u => u.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    if (!name || !email) {
      return res.status(400).json({ error: 'Name y email son requeridos' });
    }

    // Verificar si el email ya existe en otro usuario
    const emailExists = users.some(u => u.email === email && u.id !== id);
    if (emailExists) {
      return res.status(409).json({ error: 'El email ya está en uso por otro usuario' });
    }

    users[index] = {
      ...users[index],
      name,
      email,
      role: role || users[index].role
    };

    res.status(200).json(users[index]);
  },

  // DELETE /users/:id
  deleteUser: (req, res) => {
    const { id } = req.params;
    const index = users.findIndex(u => u.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const deletedUser = users.splice(index, 1);
    res.status(200).json({ 
      message: 'Usuario eliminado correctamente',
      deleted: deletedUser[0].id 
    });
  },
};

module.exports = userController;