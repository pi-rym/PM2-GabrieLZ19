const CarritoCompra = require("../index");
const carrito = new CarritoCompra();
const producto = {
  name: "papas",
  precio: 100,
  cantidad: 2,
};

const producto2 = {
  name: "gaseosa",
  precio: 600,
  cantidad: 1,
};
carrito.agregarProducto(producto);
carrito.agregarProducto(producto2);

describe("La funcion carritoCompra ", () => {
  // it("No debe ser nula", () => {
  //   expect(carrito.carrito).toEqual("");
  // });
  it("Debe agregar un producto", () => {
    expect(carrito.carrito[0]).toEqual(producto);
  });

  it("Debe calcular el total de la compra", () => {
    expect(carrito.calcularTotal()).toEqual(800);
  });

  it("Debe aplicar un descuento", () => {
    expect(carrito.aplicarDescuento(90)).toEqual(720);
  });
});
