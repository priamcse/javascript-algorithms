const product1 = { id: 1, title: "Pizza", price: 10, quantity: 1 };
const product2 = { id: 2, title: "Burger", price: 12, quantity: 1 };

const cart = [];
let cartCount = 0;
let totalCartCount = 0;
let totalAmount = 0;

function addToCart(product) {
  const productExist = cart.findIndex((item) => item.id === product.id);
  const existProduct = cart[productExist];

  if (existProduct) {
    const updatedItem = {
      ...existProduct,
      quantity: existProduct.quantity + product.quantity,
    };
    cart[productExist] = updatedItem;
  } else {
    cart.push(product);
  }

  cartAccounting();
}

function removeCart(id) {
  const productExist = cart.findIndex((item) => item.id === id);
  const existProduct = cart[productExist];
  if (existProduct.quantity === 1) {
    cart.splice(productExist, 1);
  } else {
    const updatedItem = {
      ...existProduct,
      quantity: existProduct.quantity - 1,
    };
    cart[productExist] = updatedItem;
  }

  cartAccounting();
}

// Cart count

function cartAccounting() {
  cartCount = cart.length;

  totalCartCount = cart.reduce(
    (acumulator, current) => acumulator + current.quantity,
    0
  );

  totalAmount = cart.reduce(
    (acumulator, current) => acumulator + current.price * current.quantity,
    0
  );
}

addToCart(product1);
addToCart(product1);
addToCart(product1);
addToCart(product2);
removeCart(product1.id);
// addToCart(product2);
// addToCart(product2);
// addToCart(product2);
// addToCart(product2);
// addToCart(product1);

console.log(cart);
console.log(cartCount);
console.log(totalCartCount);
console.log(totalAmount);
