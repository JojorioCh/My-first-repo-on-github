myBlurFunction = function (state) {
  const containerElement = document.getElementById("main_container");
  const overlayEle = document.getElementById("overlay");

  if (state) {
    overlayEle.style.display = "block";
    containerElement.setAttribute("class", "blur");
  } else {
    overlayEle.style.display = "none";
    containerElement.setAttribute("class", null);
  }
};
const items = ["Apple", "Banana", "Orange", "Mango"];

const list = document.getElementById("list");

for (let i = 0; i < items.length; i++) {
  const li = document.createElement("li");
  li.textContent = items[i];
  list.appendChild(li);
}
