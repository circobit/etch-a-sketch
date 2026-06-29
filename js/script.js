// Get body
const body = document.querySelector("body");

// Set vars to track numbers of rows and cols
const rows = 16;
const columns = 16;

// Create title div
const titleDiv = document.createElement("div");
titleDiv.className = "titleDiv";
titleDiv.textContent = "Etch-A-Sketch";
titleDiv.style.fontSize = "45px";
titleDiv.style.fontWeight = "700";

// Append titleDiv to body
body.appendChild(titleDiv);

// Create description div
const descriptionDiv = document.createElement("div");
descriptionDiv.className = "titleDiv";
descriptionDiv.textContent = "Move your mouse over the canvas to draw something";
descriptionDiv.style.fontSize = "20px";

// Append descriptionDiv to body
body.appendChild(descriptionDiv);

// Create grid div
const gridDiv = document.createElement("div");
gridDiv.className = "gridDiv";
gridDiv.style.width = "600px";
gridDiv.style.height = "600px";
gridDiv.style.display = "flex";
gridDiv.style.flexDirection = "column";
gridDiv.style.flexShrink = "0";

// Append gridDiv to body
body.appendChild(gridDiv);

// Create rows within gridDiv
for (let i = 0; i < rows; i++) {
	const divToCreate = document.createElement("div");
	divToCreate.className = "divRow";
	divToCreate.style.display = "flex";
	divToCreate.style.flex = "1";
	gridDiv.appendChild(divToCreate);
};