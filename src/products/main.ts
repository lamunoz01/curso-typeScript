import { addProduct, calcStock, products } from "../product.service"; //Llamado a los servicios definidos en el archivo .service

addProduct({
    title:'Prod1',
    createDate: new Date(2020, 10, 5),
    stock: 10
})

addProduct({
    title:'Prod2',
    createDate: new Date(2024, 11, 10),
    stock: 15,
    size:'M'
})

console.log(products);

const total = calcStock();
console.log(`Stock: ${total}`);

