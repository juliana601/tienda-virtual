const express = require('express');
const router = express.Router();

// Rutas CRUD de Productos
router.get('/', (req, res) => res.send('Lista de productos'));
router.post('/', (req, res) => res.send('Producto creado'));

module.exports = router;