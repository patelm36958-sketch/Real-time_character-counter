const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");
const maxLength = 50; 

textInput.addEventListener("input", () => {
  let content = textInput.value;
  let currentLength = content.length;

 
  if (currentLength > maxLength) {
    textInput.value = content.substring(0, maxLength);
    currentLength = maxLength;
  }

  
  charCount.innerText = `Character Count: ${currentLength}/${maxLength}`;

  
  if (currentLength >= maxLength) {
    charCount.style.color = "red";
  } else {
    charCount.style.color = "black"; 
  }
});
