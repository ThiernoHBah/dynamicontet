const productNameInput = document.getElementById("productName");
const productPriceInput = document.getElementById("productPrice");
const addProductButton = document.getElementById("addProduct");
const cart = document.getElementById("cart");
const totalPriceSpan = document.getElementById("totalPrice");
let totalPrice = 0;

// Update total price display
function updateTotalPriceDisplay() {
  totalPriceSpan.textContent = totalPrice.toFixed(2);
}

addBtn.addEventListener("click", function() {
  let name = productNameInput.value;
  let price = parseFloat(productPriceInput.value);
