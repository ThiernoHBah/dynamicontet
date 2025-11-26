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

  if (name === "") {
    alert("Please enter a product name");
    return;
  }

  if (isNaN(price) || price <= 0) {
    alert("Please enter a valid price");
    return;
  }

  // create list item
  let li = document.createElement("li");
  li.className = "cart-item";
  li.setAttribute("data-price", price);

   // product text
  let span = document.createElement("span");
  span.textContent = name + " - $" + price.toFixed(2);

  // remove button
  let removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";

// add everything to the li
  li.appendChild(span);
  li.appendChild(document.createTextNode(" Qty: "));
  li.appendChild(qtyInput);
  li.appendChild(removeBtn);

  // add li to the cart
  cart.appendChild(li);

  // update total
  total += price * 1;
  showTotal();

  // when quantity changes
  qtyInput.addEventListener("input", function() {
    if (qtyInput.value < 1) {
      qtyInput.value = 1;
    }

    let newQty = parseInt(qtyInput.value);

    // recalculate total manually
    let allItems = document.querySelectorAll(".cart-item");
    let newTotal = 0;

    allItems.forEach(function(item) {
      let pr = parseFloat(item.getAttribute("data-price"));
      let q = parseInt(item.querySelector(".quantity-input").value);
      newTotal += pr * q;
    });

    total = newTotal;
    showTotal();
  });

  // when remove is clicked
  removeBtn.addEventListener("click", function() {
    li.remove();

    // recalc total after removal
    let allItems = document.querySelectorAll(".cart-item");
    let newTotal = 0;

    allItems.forEach(function(item) {
      let pr = parseFloat(item.getAttribute("data-price"));
      let q = parseInt(item.querySelector(".quantity-input").value);
      newTotal += pr * q;
    });

    total = newTotal;
    showTotal();
  });

  // clear inputs
  productNameInput.value = "";
  productPriceInput.value = "";
});