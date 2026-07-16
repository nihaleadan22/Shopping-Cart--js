// DOM Selection
const productList = document.querySelector("#productList");
const cartItems = document.querySelector("#cartItems");
const totalItems = document.querySelector("#totalItems");
const grandTotal = document.querySelector("#grandTotal");

//classes
class Product{
constructor(id,name,price,image){
this.id = id;
this.name = name;
this.price = price;
this.image = image;
this.quantity = 0;
}
}
//shopping cart class
class ShoppingCart{
constructor() {
this.items = [];//cart is initially empty
this.wishlist = [];
}
renderProducts() {
let html = "";
productStore.forEach(function(product){
html += `
<div class="col-md-6 col-xl-4">
<div class="card product-card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
<div class="card-body text-center p-4">
<img
src="${product.image}"
class="card-img-top"
style="height:220px; object-fit:cover;">
<h5 class="fw-bold mt-3">
${product.name}
</h5>
<p class="text-success fw-bold">
Rs. ${product.price}
</p>
 <button
class="btn btn-primary w-100 rounded-pill"
onclick="cart.addItem(${product.id})">
Add To Cart
 </button>

<button
class="btn btn-outline-secondary  rounded-pill w-100 mt-2"
onclick="cart.addToWishlist(${product.id})">
♡ Wishlist
</button>
</div>
</div>
</div>
`;
});
productList.innerHTML = html; 
}
//add items
addItem(productId){
//to find selected item from store
const selectedProduct = productStore.find(function(product){
return product.id === productId;
    });

    // Check if already exists in cart
const existingProduct = this.items.find(function(item){
return item.id === productId;
    });
if(existingProduct){
existingProduct.quantity++;
    }
else{

const newProduct = new Product(
        selectedProduct.id,
        selectedProduct.name,
        selectedProduct.price,
        selectedProduct.image
    );
newProduct.quantity = 1;
this.items.push(newProduct);
}
this.renderCart();
this.saveCart();
}
//render cart
renderCart(){
let html = ""; //empty string
let totalQuantity = 0;
let totalPrice = 0;
this.items.forEach(function(item){
html += `
<div class="border rounded p-3 mb-3">
<h6>${item.name}</h6>
<p class="text-success mb-1">
Rs. ${item.price}
</p>

<p>
 Quantity : ${item.quantity}
     </p>
 <p class="fw-bold">
Subtotal : Rs. ${item.price * item.quantity}
    </p>
<button
class="btn btn-danger btn-sm "
onclick="cart.removeItem(${item.id})">
Remove
</button>

<div class="d-flex justify-content-center align-items-center gap-2 my-2">

<button
class="btn btn-outline-danger btn-sm"
onclick="cart.decreaseQuantity(${item.id})">
-
</button>

<span class="fw-bold">
${item.quantity}
</span>

<button
class="btn btn-outline-success btn-sm"
onclick="cart.increaseQuantity(${item.id})">
+
</button>

</div>
</div>
        `;
totalQuantity += item.quantity;
totalPrice += item.price * item.quantity;
    });
if(this.items.length===0){
cartItems.innerHTML = `
<p class="text-center text-muted">
Your cart is empty.
    </p>
`;
}
else{
cartItems.innerHTML = html; 
}
totalItems.textContent = totalQuantity;
grandTotal.textContent = totalPrice;
}
//remove item from cart
removeItem(productId){
this.items = this.items.filter(function(item){
return item.id !== productId;
    });
//to update the cart
this.renderCart(); 
this.saveCart();  
}

//increase qunatity
increaseQuantity(productId){
const item = this.items.find(function(item)
 {
return item.id === productId ;
});

 if(item){
    item.quantity++;
 }
this.renderCart();
this.saveCart();
}

//decrease quantity
decreaseQuantity(productId){
const item = this.items.find(function(item){
return item.id === productId;
});
if(item){
item.quantity--;
}
if(item && item.quantity <=0){
    this.removeItem(productId);
    return;
}
this.renderCart();
this.saveCart();
}
//save cart
saveCart(){
const cartData = JSON.stringify(this.items);
localStorage.setItem("shoppingCart",cartData);
}
//load cart
loadCart(){
const savedData = localStorage.getItem("shoppingCart");
if(savedData){
 this.items = JSON.parse(savedData);
}
this.renderCart();
}
//add to wishlist
addToWishlist(productId){
const selectedProduct = productStore.find(function(product){
return product.id === productId;
    });
const existingProduct = this.wishlist.find(function(item){
return item.id === productId;
    });
if(existingProduct){
alert("Already in Wishlist.");
return;
    }
this.wishlist.push(selectedProduct);
alert("Added to Wishlist.");
}
//clear cart
clearCart(){
this.items = [];
this.renderCart();
this.saveCart();
}
} 

//product objects
const laptop = new Product(
 1,
"Laptop",
150000,
"https://picsum.photos/id/48/150/150"
);
//mobile
const mobile = new Product(
 2,
"Mobile",
50000,
"https://picsum.photos/id/160/150/150"
);
//headphones
const headphones = new Product(
 3,
"Headphones",
15000,
 "https://picsum.photos/id/1082/150/150"
);
//smartphones
const smartwatch = new Product(
 4,
"Smartwatch",
3000,
"https://picsum.photos/id/26/150/150"
);
//tablet
const tablet = new Product(
 5,
"Tablet",
45000,
"https://picsum.photos/id/96/150/150"
);
//powerbank
const powerbank = new Product(
 6,
"Powerbank",
9000,
"https://picsum.photos/id/119/150/150"
);

//product store
const productStore = [
laptop,
mobile,
headphones,
smartwatch,
tablet,
powerbank
];

const cart = new ShoppingCart();

cart.loadCart();
cart.renderProducts();