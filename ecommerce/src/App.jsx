import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
    // Shopping cart functionality
    // let cart = [];
    // const cartCount = document.getElementById('cart-count');
    // const cartItems = document.getElementById('cart-items');
    // const subtotal = document.getElementById('subtotal');
    // const total = document.getElementById('total');
    // const cartSidebar = document.getElementById('cart-sidebar');
    // const backdrop = document.getElementById('backdrop');
    // const closeCartBtn = document.getElementById('close-cart');
    
    // // Toggle cart sidebar
    // document.querySelectorAll('.fa-shopping-cart').forEach(icon => {
    //   icon.closest('button').addEventListener('click', () => {
    //     cartSidebar.classList.remove('translate-x-full');
    //     backdrop.classList.remove('hidden');
    //     renderCart();
    //   });
    // });
    
    // closeCartBtn.addEventListener('click', () => {
    //   cartSidebar.classList.add('translate-x-full');
    //   backdrop.classList.add('hidden');
    // });
    
    // backdrop.addEventListener('click', () => {
    //   cartSidebar.classList.add('translate-x-full');
    //   backdrop.classList.add('hidden');
    // });
    
    // // Add to cart functionality
    // document.querySelectorAll('.add-to-cart').forEach(button => {
    //   button.addEventListener('click', function() {
    //     const productCard = this.closest('.product-card');
    //     const productName = productCard.querySelector('h3').textContent;
    //     const productPrice = parseFloat(productCard.querySelector('.text-lg').textContent.replace('$', ''));
    //     const productId = productCard.querySelector('.text-gray-500').textContent;
    //     const productImage = productCard.querySelector('img').src;
        
    //     // Check if product already in cart
    //     const existingItem = cart.find(item => item.id === productId);
        
    //     if (existingItem) {
    //       existingItem.quantity += 1;
    //     } else {
    //       cart.push({
    //         id: productId,
    //         name: productName,
    //         price: productPrice,
    //         image: productImage,
    //         quantity: 1
    //       });
    //     }
        
    //     updateCartCount();
        
    //     // Show feedback
    //     const originalText = this.innerHTML;
    //     this.innerHTML = '<i class="fas fa-check mr-1"></i> Added';
    //     this.classList.add('bg-green-500', 'hover:bg-green-600');
    //     setTimeout(() => {
    //       this.innerHTML = originalText;
    //       this.classList.remove('bg-green-500', 'hover:bg-green-600');
    //     }, 2000);
    //   });
    // });
    
    // Update cart count in header
    // function updateCartCount() {
    //   const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    //   cartCount.textContent = count;
    // }
    
    // Render cart items
    // function renderCart() {
    //   if (cart.length === 0) {
    //     cartItems.innerHTML = `
    //       <div class="text-center py-8 text-gray-500">
    //         <i class="fas fa-robot text-4xl mb-2"></i>
    //         <p>Your cart is empty</p>
    //       </div>
    //     `;
        
    //     subtotal.textContent = '$0.00';
    //     total.textContent = '$5.99';
    //     return;
    //   }
      
      // cartItems.innerHTML = '';
      // let subtotalAmount = 0;
      
      // cart.forEach(item => {
      //   const itemTotal = item.price * item.quantity;
      //   subtotalAmount += itemTotal;
        
      //   cartItems.innerHTML += `
      //     <div class="cart-item flex items-start gap-4 p-3 bg-gray-50 rounded-lg">
      //       <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
      //       <div class="flex-grow">
      //         <h4 class="font-medium">${item.name}</h4>
      //         <p class="text-sm text-gray-500">$${item.price.toFixed(2)}</p>
      //         <div class="flex items-center gap-2 mt-2">
      //           <button class="quantity-btn minus px-2 bg-gray-200 rounded hover:bg-gray-300" data-id="${item.id}">-</button>
      //           <span class="quantity">${item.quantity}</span>
      //           <button class="quantity-btn plus px-2 bg-gray-200 rounded hover:bg-gray-300" data-id="${item.id}">+</button>
      //         </div>
      //       </div>
      //       <button class="cart-item__remove text-gray-400 hover:text-red-500" data-id="${item.id}">
      //         <i class="fas fa-times"></i>
      //       </button>
      //     </div>
      //   `;
      // });
      
      // 
      // Add event listeners to quasubtotal.textContent = `$${subtotalAmount.toFixed(2)}`;
      // total.textContent = `$${(subtotalAmount + 5.99).toFixed(2)}`;
      // updateCartCount();ntity and remove buttons
    //   document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
    //     btn.addEventListener('click', function() {
    //       const id = this.getAttribute('data-id');
    //       const item = cart.find(item => item.id === id);
    //       if (item.quantity > 1) {
    //         item.quantity -= 1;
    //         renderCart();
    //       }
    //     });
    //   });
      
    //   document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
    //     btn.addEventListener('click', function() {
    //       const id = this.getAttribute('data-id');
    //       const item = cart.find(item => item.id === id);
    //       item.quantity += 1;
    //       renderCart();
    //     });
    //   });
      
    //   document.querySelectorAll('.cart-item__remove').forEach(btn => {
    //     btn.addEventListener('click', function() {
    //       const id = this.getAttribute('data-id');
    //       cart = cart.filter(item => item.id !== id);
    //       updateCartCount();
    //       renderCart();
    //     });
    //   });
    // }
    
    // // Category filter functionality
    // document.querySelectorAll('.category-btn').forEach(btn => {
    //   btn.addEventListener('click', function() {
    //     document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active', 'bg-primary', 'text-white'));
    //     this.classList.add('active', 'bg-primary', 'text-white');
    //   });
    // });

  return (
    <>
<body className="min-h-screen flex flex-col">
  {/* <!-- Navigation --> */}
  <header className="bg-darker text-black shadow-lg">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <i className="fas fa-robot text-2xl gradient-text"></i>
        <h1 className="text-2xl font-bold">RoboTech</h1>
        <span className="text-sm bg-secondary px-2 py-1 rounded-full">PRO</span>
      </div>

      <nav className="hidden md:flex space-x-6">
        <a href="#" className="font-medium hover:text-primary transition">Shop</a>
        <a href="#" className="font-medium hover:text-primary transition">Components</a>
        <a href="#" className="font-medium hover:text-primary transition">Kits</a>
        <a href="#" className="font-medium hover:text-primary transition">Support</a>
      </nav>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <i className="fas fa-shopping-cart text-xl text-gray-600"></i>
          <span id="cart-count" className="absolute -top-2 -right-2 bg-secondary text-blue-700 text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
        </button>
        <button className="md:hidden">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  </header>

  {/* <!-- Hero Section --> */}
  <section className="gradient-bg text-white">
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Build the Future with Robotics</h2>
        <p className="text-lg md:text-xl mb-8">Premium components for makers, educators and professionals</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-darker font-semibold px-6 py-3 rounded-lg hover:bg-opacity-90 transition shadow-lg">
            Shop Now <i className="fas fa-arrow-right ml-2"></i>
          </button>
          <button className="bg-transparent border-2 border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:bg-opacity-10 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- Category Tabs --> */}
  <div className="container mx-auto px-4 py-8 sticky top-0 bg-white shadow-sm z-10">
    <div className="flex overflow-x-auto space-x-4 pb-2">
      <button className="category-btn active px-4 py-2 rounded-full bg-primary text-white font-medium whitespace-nowrap">All Products</button>
      <button className="category-btn px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 font-medium whitespace-nowrap">Microcontrollers</button>
      <button className="category-btn px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 font-medium whitespace-nowrap">Sensors</button>
      <button className="category-btn px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 font-medium whitespace-nowrap">Motors</button>
      <button className="category-btn px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 font-medium whitespace-nowrap">Kits</button>
      <button className="category-btn px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 font-medium whitespace-nowrap">Tools</button>
    </div>
  </div>

  {/* <!-- Products Grid --> */}
  <main className="container mx-auto px-4 py-8 flex-grow">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* Product 1 */}
      <div className="product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
        <div className="relative">
          <img src="https://placehold.co/600x400?text=Arduino+Mega" alt="Arduino Mega 2560 R3 microcontroller board with USB cable" className="w-full h-48 object-cover"/>
          <span className="absolute top-2 right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">BESTSELLER</span>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">Arduino Mega 2560</h3>
            <span className="text-gray-500 text-sm">#ROB-001</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">Advanced microcontroller board</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-lg">$29.99</span>
            <button className="add-to-cart bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition">
              <i className="fas fa-cart-plus mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product 2 --> */}
      <div className="product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
        <div className="relative">
          <img src="https://placehold.co/600x400?text=Raspberry+Pi+4" alt="Raspberry Pi 4 Model B single board computer with accessories" className="w-full h-48 object-cover"/>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">Raspberry Pi 4 (4GB)</h3>
            <span className="text-gray-500 text-sm">#ROB-002</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">Powerful single-board computer</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-lg">$64.99</span>
            <button className="add-to-cart bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition">
              <i className="fas fa-cart-plus mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product 3 --> */}
      <div className="product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
        <div className="relative">
          <img src="https://placehold.co/600x400?text=Robotic+Arm" alt="5DOF robotic arm kit with servo motors and controller" className="w-full h-48 object-cover"/>
          <span className="absolute top-2 right-2 bg-yellow-500 text-white text-xs px-2 py-1 rounded-full">NEW</span>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">5DOF Robotic Arm Kit</h3>
            <span className="text-gray-500 text-sm">#ROB-003</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">Precision control robotic arm</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-lg">$89.99</span>
            <button className="add-to-cart bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition">
              <i className="fas fa-cart-plus mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product 4 --> */}
      <div className="product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
        <div className="relative">
          <img src="https://placehold.co/600x400?text=LIDAR+Sensor" alt="360-degree LIDAR distance measurement sensor module" className="w-full h-48 object-cover"/>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">360° LIDAR Sensor</h3>
            <span className="text-gray-500 text-sm">#ROB-004</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">High-precision distance measurement</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-lg">$124.99</span>
            <button className="add-to-cart bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition">
              <i className="fas fa-cart-plus mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product 5 --> */}
      <div className="product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
        <div className="relative">
          <img src="https://placehold.co/600x400?text=DC+Gear+Motors" alt="Set of 4 DC gear motors with rubber wheels" className="w-full h-48 object-cover"/>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">DC Gear Motor Set</h3>
            <span className="text-gray-500 text-sm">#ROB-005</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">Set of 4 motors with wheels</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-lg">$24.99</span>
            <button className="add-to-cart bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition">
              <i className="fas fa-cart-plus mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product 6 --> */}
      <div className="product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
        <div className="relative">
          <img src="https://placehold.co/600x400?text=LED+Matrix" alt="8x8 RGB LED matrix panel with rainbow color display" className="w-full h-48 object-cover"/>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">8x8 RGB LED Matrix</h3>
            <span className="text-gray-500 text-sm">#ROB-006</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">Bright colorful display panel</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-lg">$14.99</span>
            <button className="add-to-cart bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition">
              <i className="fas fa-cart-plus mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product 7 --> */}
      <div className="product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
        <div className="relative">
          <img src="https://placehold.co/600x400?text=ESP32+Dev+Kit" alt="ESP32 development board with WiFi and Bluetooth" className="w-full h-48 object-cover"/>
          <span className="absolute top-2 right-2 bg-secondary text-white text-xs px-2 py-1 rounded-full">BESTSELLER</span>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">ESP32 Development Kit</h3>
            <span className="text-gray-500 text-sm">#ROB-007</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">WiFi & Bluetooth enabled</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-lg">$19.99</span>
            <button className="add-to-cart bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition">
              <i className="fas fa-cart-plus mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Product 8 --> */}
      <div className="product-card bg-white rounded-xl overflow-hidden shadow-md transition duration-300">
        <div className="relative">
          <img src="https://placehold.co/600x400?text=UltraSonic+Sensor" alt="HC-SR04 ultrasonic distance measurement sensor" className="w-full h-48 object-cover"/>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg">Ultrasonic Sensor</h3>
            <span className="text-gray-500 text-sm">#ROB-008</span>
          </div>
          <p className="text-gray-600 text-sm mt-1">Distance measurement module</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="font-bold text-lg">$3.99</span>
            <button className="add-to-cart bg-primary hover:bg-blue-700 text-white px-3 py-1 rounded-lg text-sm transition">
              <i className="fas fa-cart-plus mr-1"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>

  {/* <!-- Shopping Cart Sidebar --> */}
  <div id="cart-sidebar" className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-lg transform translate-x-full transition-transform duration-300 z-50 overflow-y-auto">
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">
          <i className="fas fa-shopping-cart mr-2"></i> Your Cart
        </h2>
        <button id="close-cart" className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-times"></i>
        </button>
      </div>

      <div id="cart-items" className="space-y-4">
        {/* <!-- Cart items will be dynamically inserted here --> */}
        <div className="text-center py-8 text-gray-500">
          <i className="fas fa-robot text-4xl mb-2"></i>
          <p>Your cart is empty</p>
        </div>
      </div>

      <div id="cart-summary" className="mt-8 pt-6 border-t border-gray-200">
        <div className="flex justify-between mb-2">
          <span>Subtotal:</span>
          <span id="subtotal">$0.00</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping:</span>
          <span>$5.99</span>
        </div>
        <div className="flex justify-between font-bold text-lg mb-6">
          <span>Total:</span>
          <span id="total">$5.99</span>
        </div>
        <button className="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition">
          Checkout Now
        </button>
      </div>
    </div>
  </div>
  
  {/* <!-- Backdrop --> */}
  <div id="backdrop" className="fixed inset-0 bg-black bg-opacity-50 z-40 hidden"></div>

  {/* <!-- Footer --> */}
  <footer className="bg-darker text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <i className="fas fa-robot mr-2"></i> RoboTech
          </h3>
          <p className="text-gray-400">Premium robotics components for makers, educators and professionals.</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Shop</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">All Products</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">New Arrivals</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Best Sellers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Special Offers</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Shipping Info</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Returns</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>© 2025 RoboTech Inc. All rights reserved.</p>
      </div>
    </div>
  </footer>

 
</body>

    </>
  )
}

export default App;
