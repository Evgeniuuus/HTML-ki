let spec_price = document.querySelector('.special')
let tiny_price = document.querySelector('.tiny')
let huge_price = document.querySelector('.huge')
let sum = 2*spec_price.innerHTML + +tiny_price.innerHTML + +huge_price.innerHTML;
console.log('Итого за 4 товара: ' + sum)