(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL';

    function createProductToJson(
        title: string,
        createDate: Date, //Unico caso que no genera error por la inicial mayuscula
        stock: number,
        size: Sizes
    ){
        return{
            title,
            createDate,
            stock,
            size
        }
    }

    const producto1 = createProductToJson('P1', new Date(),12, 'L');
    console.log(producto1);
    console.log(producto1.stock);
    console.log(producto1.title);

    //Versión usando arrow function
    const createProductToJsonV2 = (
        title: string,
        createDate: Date, //Unico caso que no genera error por la inicial mayuscula
        stock: number,
        size?: Sizes //Indica que esta variable es opcional y en caso de no enviarla no debe arrojar ningun error.
    )=>{
        return{
            title,
            createDate,
            stock,
            size
        }
    }

    const producto2 = createProductToJsonV2('P2', new Date(),12);
    console.log(producto2);
    console.log(producto2.stock);
    console.log(producto2.title);
    console.log(producto2.size); //En este caso devuelve undefined
}) ();