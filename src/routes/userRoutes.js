const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas GET (Para mostrar las vistas)
router.get('/login', userController.mostrarLogin);
router.get('/registro', userController.mostrarRegistro);

// Rutas POST (Para procesar los datos enviados por los formularios)
router.post('/login', userController.loginUsuario);
router.post('/registro', userController.registrarUsuario);

module.exports = router;