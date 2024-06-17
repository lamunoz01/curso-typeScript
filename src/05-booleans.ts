(() => {
  //Froma implicita
  let isEnable = true;
  isEnable = false;

  //Formas erroneas
  // isEnable='add';
  // isEnable=2407;

  //Forma Explicita
  let isNew: boolean = false;
  console.log('isNew',isNew);
  
  isNew = true;
  console.log('isNew',isNew);

  const random = Math.random();
  console.log('random', random);
  //isNew = random >=0.5 ? 'true' : 'false'; //Condicionales tipados erroneos.
  isNew = random >=0.5 ? true : false;
  console.log(isNew);
  
//   **boolean ** es un tipo primitivo --Siempre usar este
//   **Boolean ** es un objeto
  
})();
