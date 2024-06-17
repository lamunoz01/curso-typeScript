//Cuando una función tiene muchos parametros, es mejor encapsularla en un objeto, ya que en este se envia solo 1 param y no importa el orden de estos.
(() => {
  const login = (data: { email: string; password: string }) => {
    console.log(data.email, data.password);
  };

  login({
    email: 'user@mail.com',
    password: 'aBc123',
  });

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = []; //Solo por este caso usaremos any

  const addProduct = (data: {
    title: string;
    createDate: Date;
    stock: number;
    size?: Sizes;
  }) => {
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

  console.log(products);
})();
