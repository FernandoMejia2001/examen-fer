const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// GET /products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// GET /products/:id
router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});

// POST /products
router.post('/', async (req, res) => {
  const { name, price, category } = req.body;
  const newProduct = new Product({ name, price, category });
  await newProduct.save();
  res.status(201).json(newProduct);
});

// PUT /products/:id
router.put('/:id', async (req, res) => {
  const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE /products/:id
router.delete('/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ message: 'Producto eliminado' });
});

module.exports = router;
