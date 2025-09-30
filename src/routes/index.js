const express = require('express');
const router = express.Router();

// Importar versiones de ruta 
const v1Routes = require('./v1');

//ruta base para informacion de la API
router.get('/', (req, res) =>{
    res.json({
        message: 'Workout Tracker API',
        versions: ['v1'],
        endpoints: {
            v1: '/api/v1'
        }
    });
});


//Configuracion rutas versionadas
router.use('/v1', v1Routes);

module.exports = router;
