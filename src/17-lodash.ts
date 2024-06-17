//Librerias sin soporte typeScript
import _ from 'lodash';

const data = [
  {
    username: 'Pedro',
    role: 'admin',
  },
  {
    username: 'Mariana',
    role: 'seller',
  },
  {
    username: 'Santiago',
    role: 'seller',
  },
  {
    username: 'Samara',
    role: 'customer',
  },
];

const rta= _.groupBy(data, (item)=>item.role); //Usando función que agrupa por los roles de cada item
console.log(rta);
