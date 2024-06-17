(()=> {
    const calcTotal=(prices:number[]): string =>{ //: tipo de dato, tambien se puede tipar el retorno.
        let total = 0;
        prices.forEach((item)=>{
            total += item;
        });

        return total.toString();
    };

    // const rta = calcTotal([1,2,10,5]);
    // console.log(rta);
    
    //Funciones sin retorno (void) - puede dejarse con inferencia o tiparse especificamente con void
    const printTotal = (prices:number[]): void => {
        const rta =  calcTotal(prices);
        console.log(`El total calculado desde la funcion es: ${rta}`);
    }
    printTotal ([1,2,10,5]);
})();