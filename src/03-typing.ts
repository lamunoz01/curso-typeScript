//Función anonima auto ejecutada
(() => {
  //Tipado implicito - motor de inferencia
  let productName = 'Producto 1';

  //Tipado explicito
  let productPrice: number = 25000;

  //Cada tipo de dato ofrece funciones u opciones de operar diferentes y unicas para su tipo
  productName = 'Change name';
  productName.toLowerCase();

  productPrice.toFixed();

  const productStock = 100;
  const productCode = 'ABC1521';
})();
