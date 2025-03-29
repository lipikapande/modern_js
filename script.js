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

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();
  // console.log(data);
  return { title: data.id, text: data.completed };
};

//not clean
// const lastPost = getLastPost(); //will return promise
// console.log(lastPost);

// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
