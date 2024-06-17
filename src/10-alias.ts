(() => {
  //Crear nuestro propio tipo - type/ palabra reservada/ se usa PascalCase
  type UserID = string | number;

  let userId: UserID;

  //Literal types
  /* Permite que cuando se usen se asigne un valor que pertenezca uicamente al conjunto definido, y debe ser exactamente igual (Es case sensitive) Es muy seguro*/
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes;
  shirtSize = 'L';
  shirtSize = 'M';
  shirtSize = 'S';
  shirtSize = 'XL';

  function greeting(userId: UserID, size: Sizes) {
    if (typeof userId === 'string') {
      console.log(`
      Usuario: ${userId.toLowerCase()} 
      Talla camisa: ${size}`);
    }
  }

  greeting('Laura', 'L');
})();
