function ProductDetail({ product }) {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h4 className="card-title">Detalle del Producto</h4>
        <p><strong>Nombre:</strong> {product.name}</p>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Categoría:</strong> {product.category}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
