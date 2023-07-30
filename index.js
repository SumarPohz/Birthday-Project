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

// Handle form submission
document.getElementById("registration-form").addEventListener("submit", function(event) {
  // Check if the payment button is clicked and screenshot is uploaded
  if (!paymentButtonClicked || !paymentScreenshotUploaded) {
    event.preventDefault();
    alert("Please make the payment and upload the screenshot before submitting the form.");
  } else {
    // Form validation passed, proceed with form submission
    // You can also add further processing here if needed
  }
});
