const typedTextSpan = document.querySelector(".home-content h3");
const cursorSpan = document.createElement("span");

const textArray = ["Developer", "Designer", "Engineer"];
let typingDelay = 200;
let erasingDelay = 100;
let newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

cursorSpan.classList.add("cursor");
cursorSpan.textContent = "|";
typedTextSpan.appendChild(cursorSpan);

function type() {
   if (charIndex < textArray[textArrayIndex].length) {
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
   } else {
      setTimeout(erase, newTextDelay);
   }
}

function erase() {
   if (charIndex > 0) {
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
   } else {
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
   }
}

document.addEventListener("DOMContentLoaded", function () {
   setTimeout(type, newTextDelay + 250);
});
