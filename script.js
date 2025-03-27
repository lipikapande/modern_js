// import {
//   addToCart,
//   totalPrice as price,
//   totalQuantity,
// } from './shoppingCart.js';
// ('./shoppingCart.js');
// console.log('importing module');
// addToCart('bread', 5);

// console.log(price, totalQuantity);

import shoppingCart, * as ShoppingCart from './shoppingCart.js';
ShoppingCart.addToCart('bread', 25);
console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js';
add('pizza', 2);
