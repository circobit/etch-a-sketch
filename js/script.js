// Get body
const body = document.querySelector("body");
body.style.gap = "2rem";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.minHeight = "100vh";
body.style.backgroundColor = "rgb(205, 235, 114)";
body.style.fontFamily = "Cabin Sketch, Roboto";

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

// Create borderDiv for gridDiv
const borderDiv = document.createElement("div");
// Append borderDiv to body
body.appendChild(borderDiv);

// Create grid div
const gridDiv = document.createElement("div");
gridDiv.className = "gridDiv";
gridDiv.style.width = "600px";
gridDiv.style.height = "600px";
gridDiv.style.display = "flex";
gridDiv.style.flexDirection = "column";
gridDiv.style.flexShrink = "0";
gridDiv.style.border = "2px solid";
gridDiv.style.padding = "1rem";
// border-radius: [horizontal] / [vertical]
// Inside each grounp, the values go in this order:
// top-left   top-right   bottom-right   bottom-left
// The objective is to create irregular corners to resemble a hand drawing
gridDiv.style.borderRadius = "255px 10px 155px 10px / 10px 255px 10px 255px";
// Append gridDiv to body
borderDiv.appendChild(gridDiv);

// Create rows within gridDiv
for (let i = 0; i < rows; i++) {
	const divToCreate = document.createElement("div");
	divToCreate.className = "divRow";
	divToCreate.style.display = "flex";
	divToCreate.style.flex = "1";
	gridDiv.appendChild(divToCreate);
};

// Get rows divs
const rowsDivs = document.querySelectorAll(".divRow");
// Convert to array to be able to use the forEach method
const rowsDivsArray = [...rowsDivs]

// Create divs that imitates columns within the rows
rowsDivsArray.forEach(element => {
	// Iterate over the rows and create the divs inside (Items)
	for (let i = 0; i < columns; i++) {
		const divToCreate = document.createElement("div");
		divToCreate.className = "divItem";
		divToCreate.style.flex = "1";
		// border-box: The width and height properties include the content, 
		// padding, and border, but do not include the margin.
		// Note: It is often useful to set box-sizing to border-box to lay out 
		// elements. This makes dealing with the sizes of elements much easier, 
		// and generally eliminates a number of pitfalls you can stumble on while 
		// laying out your content.
		// Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-sizing
		divToCreate.style.boxSizing = "border-box";
		// Add oppacity = 0 to each divItem. If it's not set, it cannot be changed.
		divToCreate.style.backgroundColor = "black";
		divToCreate.style.opacity = "0";
		element.appendChild(divToCreate);
	};
});

// Get divItems
const divItems = document.querySelectorAll(".divItem");
// Convert to array to be able to use the forEach method
const divItemsArray = [...divItems]

// Iterate over the divItems and add an anonymous function to increase
// oppacity by 10% each time the mouseover occurs
divItemsArray.forEach(element => {
	// Iterate over the rows and create the divs inside (Items)
	element.onmouseover = function() {
		element.style.opacity = parseFloat(element.style.opacity) + 0.1;
	};
});