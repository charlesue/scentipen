document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function () {
    const productName = this.getAttribute('data-name');
    const productPrice = this.getAttribute('data-price');

    // Get current cart from localStorage or create empty array
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add new product to cart
    cart.push({ name: productName, price: productPrice });

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Show notification message
    showNotification(productName + " added to cart!");
  });
});

// Function to show notification
function showNotification(message) {
  // Create notification div
  const notification = document.createElement('div');
  notification.innerText = message;
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.backgroundColor = 'black';
  notification.style.color = 'white';
  notification.style.padding = '10px 20px';
  notification.style.borderRadius = '5px';
  notification.style.zIndex = 1000;
  notification.style.opacity = 1;
  notification.style.transition = 'opacity 0.5s ease';

  // Add notification to body
  document.body.appendChild(notification);

  // Fade out after 3 seconds
  setTimeout(() => {
    notification.style.opacity = 0;
    setTimeout(() => {
      notification.remove();
    }, 500);
  }, 3000);
}
