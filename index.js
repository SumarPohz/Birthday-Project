// Show the payment popup
function showPaymentPopup() {
  document.getElementById("payment-popup").style.display = "block";
}

// Close the payment popup
function closePaymentPopup() {
  document.getElementById("payment-popup").style.display = "none";
}

// Disable form submission until the payment button is clicked
document.getElementById("registration-form").addEventListener("submit", function(event) {
  // Check if the payment button is required and clicked
  if (!document.getElementById("payment-btn").clicked) {
    event.preventDefault();
    alert("Please make the payment before submitting the form.");
  }
});
