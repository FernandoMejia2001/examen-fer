import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
  const [products, setProducts] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error al obtener productos', err));
  }, []);

  const filteredProducts = filteredCategory
    ? products.filter(p => p.category === filteredCategory)
    : products;

  return (
    <div className="container py-4">
      <h1 className="mb-4">Lista de Productos</h1>

      <div className="mb-3">
        <label className="form-label">Filtrar por categoría:</label>
        <select
          className="form-select"
          value={filteredCategory}
          onChange={e => setFilteredCategory(e.target.value)}
        >
          <option value="">Todas</option>
          {[...new Set(products.map(p => p.category))].map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <ProductList products={filteredProducts} onSelect={setSelectedProduct} />

      {selectedProduct && (
        <ProductDetail product={selectedProduct} />
      )}
    </div>
  );
}

export default App;
