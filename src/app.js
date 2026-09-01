const express = require('express');
const app = express();
const productRoutes = require('./routes/product.routes');

app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(3000, () => console.log('Servidor corriendo en puerto 3000'));