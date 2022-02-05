const button = document.getElementById("button");
const colorNameBox = document.getElementById("colorName");
const hexCodeBox = document.getElementById("hexCode");
const cmykCodeBox = document.getElementById("cmykCode");
const rgbCodeBox = document.getElementById("rgbCode");
const xyzCodeBox = document.getElementById("xyzCode");

let color = "";
let colorName = "";
let colorHexCode = "";
let rgbCode = "";
let cmykCode = "";
let xyzCode = "";

//change color
let changeColor = async () => {
  // generate random color
  let r = () => Math.floor(Math.random() * 255);
  color = `rgb(${r()}, ${r()}, ${r()})`;

  //call the color api to get the color name and hex code
  let res = await fetch(`https://www.thecolorapi.com/id?rgb=${color}`);
  let body = await res.json();
  console.log(body);
  console.log(body.hex.value, body.name.value);

  // update colorName,colorHexCode,rgb value
  colorName = body.name.value;
  colorHexCode = body.hex.value;
  rgbCode = color;
  cmykCode = body.cmyk.value;
  xyzCode = body.XYZ.value;

  // update document with new color
  document.body.style.background = color;
  colorNameBox.textContent = ` ${colorName}`;
  hexCodeBox.textContent = ` ${colorHexCode}`;
  rgbCodeBox.textContent = ` ${rgbCode}`;
  cmykCodeBox.textContent = ` ${cmykCode}`;
  xyzCodeBox.textContent = ` ${xyzCode}`;
};

// call color change first time on refresh
changeColor();

//function to change color
button.addEventListener("click", changeColor);

// show toast message after copy
let showToast = (color) => {
  Toastify({
    text: `${color} copied to clipboard`,
    className: "info",
    style: {
      background: "#2222222a",
      boxShadow: "0 0 0 0",
      borderRadius: "2px",
    },
  }).showToast();
};

//add event listners to all the color detail boxes to copy the code
hexCodeBox.addEventListener("click", () => {
  navigator.clipboard.writeText(colorHexCode);
  showToast(colorHexCode);
});
rgbCodeBox.addEventListener("click", () => {
  navigator.clipboard.writeText(rgbCode);
  showToast(rgbCode);
});
cmykCodeBox.addEventListener("click", () => {
  navigator.clipboard.writeText(cmykCode);
  showToast(cmykCode);
});
xyzCodeBox.addEventListener("click", () => {
  navigator.clipboard.writeText(xyzCode);
  showToast(xyzCode);
});
