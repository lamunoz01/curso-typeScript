(() => {
  //Forma Implicita
  let prices = [100, 200, 50, 2365, 250]; //Queda definido como array numerico.

  //Formas erroneas
  //   prices.push('abc');
  //   prices.push(true);
  //   prices.push({});
  //Forma Correcta
  prices.push(15630);

  let otherArray = [100605, 25, 'Azul', true]; //Admite diferentes tipos

  //Forma Explicita
  let mixedArray: (number | boolean | string | object)[] = [true, 'Juan'];

  mixedArray.push(15);
  mixedArray.push('ABC');
  mixedArray.push(false);
  mixedArray.push({});
  mixedArray.push([]);

  let numbers = [1, 2, 3, 4, 5, 6];
  numbers.map((item) => item * 2);
})();
