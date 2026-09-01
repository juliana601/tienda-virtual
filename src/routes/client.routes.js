const express = require('express');
const router = express.Router();

// Ruta para que el cliente vea el catálogo de productos
router.get('/catalogo', (req, res) => {
  res.send('Vista del catálogo de productos para clientes');
});

module.exports = router;