function ProductList({ products, onSelect }) {
  return (
    <div className="row">
      {products.map(product => (
        <div key={product._id} className="col-md-4 mb-3">
          <div
            className="card h-100"
            onClick={() => onSelect(product)}
            style={{ cursor: 'pointer' }}
          >
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">💰 ${product.price}</p>
              <p className="card-text">
                <small className="text-muted">{product.category}</small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
