(()=>{
    let productTitle = 'Super-Product3000';

    //Formas erroneas
    // productTitle=null;
    // productTitle=() => {};
    // productTitle=1250;

    productTitle= 'New product5000'
    console.log('productTitle', productTitle);

    // Forma Explicita
    let productName: string = 'Super producto unico';

    const productDescription = "Uso comilla doble cuando voy a usar una comilla sencilla en el texto, por ejemplo texto en inglés I'm Laura";
    console.log('Description: ', productDescription);

    let productPrice = 100;
    let isNew: boolean = false;

    const summary = `
    Lo uso cuando quiero escribir todo un bloque o estructura asi:
    title: ${productTitle}
    name: ${productName}
    description: ${productDescription}
    price: ${productPrice}
    isNew: ${isNew}
    `;
    console.log('============');
    console.log(summary);
    console.log('============');    
})();