//.model como nombre indica que el archivo tiene modelado de datos(definición de tipos, etc) ... No afecta en ts, es una guia de nombramiento para el dev

export type Sizes = 'S' | 'M' | 'L' | 'XL'; //con la palabra export indico que estos tipos son exportados y pueden ser usados en otros archivos solo importandolos.
  
export type Product = {
    title: string;
    createDate: Date;
    stock: number;
    size?: Sizes;
};