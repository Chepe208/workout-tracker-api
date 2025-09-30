const express = require('express');
const router = express.Router();

// Importar rutas especificas 
const userRoutes = require('./users.routes');

// Configurar las rutas
router.use('/users', userRoutes);

module.exports = router;