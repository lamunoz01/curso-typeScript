/*
->  Any / cualquier cosa. Se recomienda no usarla, se indica como mala practica
->  No tengo contexto para desplegar ayudas de autocompletar como funciones operadores, etc (ej: .fixed(), .toUpperCase()).
->  El tipo de dato any "desactiva" el tipado de TS (En una variable en particular, no en todo el sistema), volviendo de cierta forma a JS.
->  No es recomendado usar any. Sin embargo, puede ser útil cuando estamos migrando código JS a TS.
->  Podemos convertir de any a cualquier otro tipo de dato con el as operator.
    Este se usa de la siguiente forma.

    let foo: any = null;
    foo = "My name"

    const name = (foo as string)
    De esta forma, podemos acceder a los métodos de "string" desde la variable name
*/

(()=>{
    let myDinamicVar: any;
    myDinamicVar = 100;
    myDinamicVar = null;
    myDinamicVar = {};
    myDinamicVar = '';

    myDinamicVar='Hola';
    const rta = (myDinamicVar as string).toLowerCase(); //Manera de como volver any a otro tipo de dato con as. eso me devuelve la ayuda de las funciones y operadores para el tipo de dato.
    console.log('rta',rta);

    myDinamicVar=1212;
    const rta2 = (<number>myDinamicVar).toFixed(); //Otra manera de hacer lo mismo del punto anterior
    console.log('rta2',rta2);
    
})();
