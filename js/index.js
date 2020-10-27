window.addEventListener('load', () =>{
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
});

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //... your code goes here
  const price = product.querySelector('.price span').innerText;

  const quantity = product.querySelector('.quantity input').value;
  const multiply = price * quantity;
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = multiply;
  return multiply;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const multiplesProducts = document.querySelectorAll('.product');
  let totalPrize = 0;
  multiplesProducts.forEach((product) => {
    totalPrize += updateSubtotal(product);
  });
  console.log(totalPrize);
  // ITERATION 3
  //... your code goes here
  const total = document.querySelector('#total-value span');
  total.innerHTML = totalPrize;
}

// ITERATION 4

window.addEventListener('load', () =>{
  const removeButton = document.getElementsByClassName('btn-remove');
  const removeButtonArray = [...removeButton];
  removeButtonArray.forEach((remove) =>{
    remove.addEventListener('click', removeProduct);
  });
});

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  this.parentNode.parentNode.remove();
   
   const total = document.getElementById('calculate');
   total.click();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
