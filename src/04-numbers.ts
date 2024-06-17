(() => {
  //Forma implicita
  let productPrice = 100;
  productPrice = 50;
  console.log('productPrice ', productPrice);

  //Forma Explicita
  let customerAge: number = 27;
  customerAge = customerAge + 1;
  console.log('customerAge ', customerAge);

  let productStock: number; //Forma de definir pero sin incializar la variable debe ser obligatoriamente explicita
  console.log('productStock ', productStock); //NaN Es parte del conjunto de tipado number

  if (productStock > 5) {
    console.log('is greater');
  }

  let discount = parseInt('Not_isNumber_IsString'); //Por inferencia lo declara como tipado numerico
  console.log('discount', discount);
  if (discount <= 30) {
    console.log('Apply');
  } else {
    console.log('xxxx Discount - Not apply xxxx');
  }

  let hex = 0xff;
  console.log('hex', hex);

  let binario = 0b001010100; //-> solo recibe 1 y 0 si detecta otro muestra error a pesar de ser numeros ... 0b Indica que es un binario
  console.log('binario ', binario);
})();
