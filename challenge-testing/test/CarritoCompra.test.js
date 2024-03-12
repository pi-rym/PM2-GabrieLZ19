const CarritoCompra = require("../index");

describe("La funcion carritoCompra ", () => {
  let carrito;
  let producto;
  let producto2;
  beforeEach(() => {
    carrito = new CarritoCompra();

    producto = {
      name: "papas",
      precio: 100,
      cantidad: 2,
    };

    producto2 = {
      name: "gaseosa",
      precio: 600,
      cantidad: 1,
    };
    carrito.agregarProducto(producto);
    carrito.agregarProducto(producto2);
  });
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
