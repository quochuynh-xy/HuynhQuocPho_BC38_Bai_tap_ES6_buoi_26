const colorList = [
  "pallet",
  "viridian",
  "pewter",
  "cerulean",
  "vermillion",
  "lavender",
  "celadon",
  "saffron",
  "fuschia",
  "cinnabar",
];
let changeColor = () => {
 for (let i = 0; i< colorList.length; i++) {
    let color = colorList[i];
    let newBtn = document.createElement("button");
    newBtn.classList = `color-button ${colorList[i]}`;
    document.getElementById('colorContainer').appendChild(newBtn);
    newBtn.onclick = () => {
        document.querySelector('#house').className = `house ${color}`;
    }
}
}
window.onload = changeColor;