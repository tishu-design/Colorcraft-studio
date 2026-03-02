const textInput = document.getElementById("textInput");
const colorPicker = document.getElementById("colorPicker");
const fontSize = document.getElementById("fontSize");
const designText = document.getElementById("designText");
const productSelect = document.getElementById("productSelect");
const productImage = document.getElementById("productImage");

textInput.addEventListener("input", function() {
  designText.innerText = textInput.value;
});

colorPicker.addEventListener("input", function() {
  designText.style.color = colorPicker.value;
});

fontSize.addEventListener("input", function() {
  designText.style.fontSize = fontSize.value + "px";
});

productSelect.addEventListener("change", function() {
  if (this.value === "tshirt") {
    productImage.src = "https://i.imgur.com/9Xn4K6I.png";
  } 
  else if (this.value === "phone") {
    productImage.src = "https://i.imgur.com/JYUB0m3.png";
  } 
  else if (this.value === "keychain") {
    productImage.src = "https://i.imgur.com/7vQD0fPs.png";
  }
});
