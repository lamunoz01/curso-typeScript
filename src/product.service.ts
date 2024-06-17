//.services como nombre indica que en el archivo se tratan a los datos ... No afecta en ts, es una guia de nombramiento para el dev

import { Product } from "./products/product.model"; //Permite usar el tipado definido en el archivo .model

export const products: Product[] = []; 
  
export const addProduct = (data:Product) => {
  products.push(data);
};

export const calcStock = (): number =>{
    let total = 0;
    products.forEach((item)=>{
        total+= item.stock;
    })
    return total;
};