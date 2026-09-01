const express = require('express');
const router = express.Router();

// Vista del Login
router.get('/login', (req, res) => {
  res.render('login', { titulo: 'Iniciar Sesión' });
});

// Vista de Registro
router.get('/registro', (req, res) => {
  res.render('registro', { titulo: 'Registro de Usuario' });
});

module.exports = router;