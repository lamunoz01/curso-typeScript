(() => {
  let userId: string | number;

  userId = 21485;
  userId = 'lbahumada';

  //El tipado es dinamico segun la condición
  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting('Laura');
  greeting(2176148);
})();
