let products = [
    { name: 'Macbook', price: 1300, quantity: 40, colors: ['silver', 'black', 'white'] },
    { name: 'Iphone', price: 1000, quantity: 50, colors: ['silver', 'red', 'white'] },
    { name: 'Pendrive', price: 10, quantity: 10, colors: [] },
    { name: 'Headset', price: 50, quantity: 0, colors: ['black'] },
    { name: 'Mouse', price: 20, quantity: 5, colors: ['white', 'black', 'blue'] },
    { name: 'Tablet', price: 500, quantity: 20, colors: ['white', 'black'] },
    { name: 'USB adaptor', price: 5, quantity: 0, colors: [] },
    { name: 'Keyboard', price: 30, quantity: 35, colors: ['white'] },
    { name: 'Gamepad', price: 30, quantity: 25, colors: ['black', 'silver'] },
    { name: 'Monitor', price: 200, quantity: 3, colors: [] },
];

    /* 1. Agregarle un id único a cada producto empezando en 1. */

//FALTA
products.forEach(item => item.id += 1);

//console.table(products);

/* 2. Imprimir en consola el nombre de cada uno de los productos.*/

//products.forEach(item => console.log(item.name));

/**3. Imprimir en consola el producto con el id 3. */
//FALTA

/**4. Imprimir en consola los productos con color “black”. */

console.table(products.filter(item => item.colors.filter(item => item == 'black')));

