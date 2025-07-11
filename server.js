require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI 

app.use(cors());
app.use(express.json());
app.use('/products', productRoutes);

app.get('/', (req, res) => {
  res.send('API funcionando 🟢');
});

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('✅ MongoDB conectado');
  
  app.listen(PORT, () => {
  console.log(`🚀 Servidor en http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ El puerto ${PORT} ya está en uso.`);
    process.exit(1);
  } else {
    console.error('❌ Error al iniciar el servidor:', err);
  }
});
;
})
.catch(err => {
  console.error('❌ Error al conectar con MongoDB:', err.message);
  process.exit(1);
});
