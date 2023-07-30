let paymentButtonClicked = false;
let paymentScreenshotUploaded = false;

function showPaymentPopup() {
  document.getElementById("payment-popup").style.display = "block";
}

function closePaymentPopup() {
  document.getElementById("payment-popup").style.display = "none";
}

document.getElementById("payment-btn").addEventListener("click", function() {
  paymentButtonClicked = true;
});
 
document.getElementById("payment-screenshot").addEventListener("change", function() {
  paymentScreenshotUploaded = this.files.length > 0;
});

