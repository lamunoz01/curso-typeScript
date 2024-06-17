(() => {
  // let myNumber: number = undefined; //No entra en los conjuntos de datos string o numericos
  // let myString: string = null;

  let myNull = null;
  let myUndefined = undefined;

  //Manera de forzar que un tipo numerico se inicialice en nulo.
  let myNumber: number | null = null;
  myNumber = 2;

  //Manera de forzar que un tipo numerico se inicialice en inidefinido.
  let myString: string | undefined = undefined;
  myString = 'aassdd';

  //Estos dos casos se pueden dar en el momento de inicialización de la app con componentes dinamicos que inicialmente no tendran un valor definido.

  function hi(name:string|null) {
    let hello = 'Hola';
    if (name) {
        hello += ' '+name;
    } else {
        hello += ' Nadie'
    }
    console.log(hello);
    
  }

  function hiv2(name:string|null) {
    let hello = 'Hola';
    hello += name?.toLowerCase() || 'nobody'; // Al llamar la función se agrega el ?, ya que no está dentro de una validación. 
                                              //Este simbolo ? permite validar si no existe devuelve un null si no devuelve el texto. Cumple el mismo objetivo que el if del ej anterior.
    console.log(hello);
    
  }

  // hi('Pedro');
  // hi(null);

  hiv2('Pedro');
  hiv2(null);
  
}) ();
