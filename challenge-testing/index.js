class CarritoCompra {
  constructor() {
    this.carrito = [];
  }
  agregarProducto(producto) {
    this.carrito.push(producto);
  }

  calcularTotal() {
    let total = 0;
    for (let item of this.carrito) {
      total += item.cantidad * item.precio;
    }
    return total;
  }

  aplicarDescuento(porcentaje) {
    const total = this.calcularTotal();

    return (total * porcentaje) / 100;
  }
}

module.exports = CarritoCompra;
