const express = require('express');
const app = express();

// Importar rutas de los 3 módulos
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const clientRoutes = require('./routes/client.routes');

app.use(express.json());

// Registrar rutas
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/clientes', clientRoutes);

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));

