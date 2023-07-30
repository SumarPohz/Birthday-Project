let paymentButtonClicked = false;
let paymentScreenshotUploaded = false;

// Show the payment popup
function showPaymentPopup() {
  document.getElementById("payment-popup").style.display = "block";
}

// Close the payment popup
function closePaymentPopup() {
  document.getElementById("payment-popup").style.display = "none";
}

// Handle payment button click
document.getElementById("payment-btn").addEventListener("click", function() {
  paymentButtonClicked = true;
});

// Handle payment screenshot upload
document.getElementById("payment-screenshot").addEventListener("change", function() {
  paymentScreenshotUploaded = this.files.length > 0;
});
