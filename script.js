const button = document.getElementById("button");
const colorCode = document.getElementById("colorName");
const copyBtn = document.getElementById("button_copy");

let color = "";
let colorName = "";
let colorHexCode = "";

//change color
let changeColor = async () => {
  // generate random color
  let r = () => Math.floor(Math.random() * 255);
  color = `rgb(${r()}, ${r()}, ${r()})`;

  //call the color api to get the color name and hex code
  let res = await fetch(`https://www.thecolorapi.com/id?rgb=${color}`);
  let body = await res.json();
  console.log(body.hex.value, body.name.value);

  // update colorName and colorHexCode
  colorName = body.name.value;
  colorHexCode = body.hex.value;

  // update document with new color
  document.body.style.background = color;
  colorCode.textContent = `${colorHexCode} [${colorName}]`;
};

// call color change first time on refresh
changeColor();

//function to change color
button.addEventListener("click", changeColor);

//when copy code button pressed copy color code to clipboard
copyBtn.addEventListener("click", function () {
  navigator.clipboard.writeText(colorHexCode);
  alert(`Copied ${colorHexCode}`);
});
