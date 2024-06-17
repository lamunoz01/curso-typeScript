//Objetos como tipos
(() => {
    type Sizes = 'S' | 'M' | 'L' | 'XL';
  
    type Product = {
        title: string;
        createDate: Date;
        stock: number;
        size?: Sizes;
    }

    const products: Product[] = []; 
  
    const addProduct = (data: Product) => {
      products.push(data);
    };
  
    addProduct({
      title: 'Prod1',
      createDate: new Date(1993, 1, 1),
      stock: 25,
    });
  
    addProduct({
      title: 'Prod1',
      createDate: new Date(1993, 1, 1),
      stock: 25,
      size: 'L'
    });

    products.push({
        title:'Prod3',
        createDate: new Date(1996,5,1),
        stock: 10,
        size:'M'
    });
  
    console.log(products);
  })();
  