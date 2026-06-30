// Get body
const body = document.querySelector("body");
body.style.gap = "1rem";
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.minHeight = "100vh";
body.style.backgroundColor = "rgb(205, 235, 114)";
body.style.fontFamily = "Cabin Sketch, Roboto";


// Set vars to track numbers of rows and cols
// const gridSize = 16;


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
descriptionDiv.style.paddingBottom = "1rem";
// Append descriptionDiv to body
body.appendChild(descriptionDiv);


// Create borderDiv for gridDiv
const borderDiv = document.createElement("div");
// Append borderDiv to body
body.appendChild(borderDiv);


//==== Create grid using Flexbox ====//

function renderGrid(gridSize = 16) {

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
	for (let i = 0; i < gridSize; i++) {
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
		for (let i = 0; i < gridSize; i++) {
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

	enableOpacityForGrid();

};

// Create basic grid 16x16 at first load
renderGrid();

//=======================//


//==== Logic to increase oppacity in items by 10% with mouseover ====//

function enableOpacityForGrid() {
	// Get divItems
	const divItems = document.querySelectorAll(".divItem");
	// Convert to array to be able to use the forEach method
	const divItemsArray = [...divItems]


	// Iterate over the divItems and add an anonymous function to increase
	// oppacity by 10% each time the mouseover occurs
	divItemsArray.forEach(element => {
		element.onmouseover = function() {
			// parseFloat() is used becase the value of opacity
			// is a string, so we need to convertid to float number
			element.style.opacity = parseFloat(element.style.opacity) + 0.1;
		};
	});
};

//=======================//

//==== Set grid size ====//

// Add gridSizeDiv
const gridSizeDiv = document.createElement("div");
// Append gridSizeDiv to body
body.appendChild(gridSizeDiv);
gridSizeDiv.style.display = "flex";
gridSizeDiv.style.gap = "1rem";


// Create "Grid size" text, input and button divs
const gridSizeTextDiv = document.createElement("div");
const gridSizeInputDiv = document.createElement("div");
gridSizeInputDiv.style.display = "flex";
gridSizeInputDiv.style.flexDirection = "column";
gridSizeInputDiv.style.justifyContent = "center";
const gridSizeButtonDiv = document.createElement("div");
gridSizeButtonDiv.style.display = "flex";
gridSizeButtonDiv.style.flexDirection = "column";
gridSizeButtonDiv.style.justifyContent = "center";


// Append "Grid size" text, input and button divs to gridSizeDiv
gridSizeDiv.appendChild(gridSizeTextDiv);
gridSizeDiv.appendChild(gridSizeInputDiv);
gridSizeDiv.appendChild(gridSizeButtonDiv);


// Add content to "Grid size" text, input and button divs
const textGridSize = document.createElement("p");
textGridSize.textContent = "Grid size (Max 100):"

const gridSizeInput = document.createElement("input");
gridSizeInput.type = "number";
gridSizeInput.min = "1";
gridSizeInput.max = "100";
gridSizeInput.style.backgroundColor = "rgb(205, 235, 114)";
gridSizeInput.style.border = "0";
gridSizeInput.style.outline = "0";
gridSizeInput.style.borderBottom = "1px solid black";
gridSizeInput.style.fontFamily = "Cabin Sketch, Roboto";

const gridSizeButton = document.createElement("button");
gridSizeButton.textContent = "Apply";
gridSizeButton.style.fontFamily = "Cabin Sketch, Roboto";
gridSizeButton.style.backgroundColor = "rgb(205, 235, 114)";
gridSizeButton.style.padding = "0.5rem";
gridSizeButton.style.border = "2px solid";
gridSizeButton.style.borderRadius = "255px 10px 155px 10px / 10px 255px 10px 255px";
gridSizeButton.style.cursor = "pointer";


//Append content to "Grid size" text, input and button divs
gridSizeTextDiv.appendChild(textGridSize);
gridSizeInputDiv.appendChild(gridSizeInput);
gridSizeButtonDiv.appendChild(gridSizeButton);


// Add event listener to hightlight Apply button
gridSizeButton.addEventListener('mouseover', () => {
	gridSizeButton.style.backgroundColor = "grey";
	gridSizeButton.style.color = "white";
});

gridSizeButton.addEventListener('mouseout', () => {
	gridSizeButton.style.backgroundColor = "rgb(205, 235, 114)";
	gridSizeButton.style.color = "black";
});


// Add an event listener to take the input when the 'Apply' button is pressed,
// validate the input and 
gridSizeButton.addEventListener('click', () => {
	const gridInput = document.querySelector("input");
	if (gridInput.value >= 1 && gridInput.value <= 100) {
		borderDiv.replaceChildren();
		renderGrid(gridInput.value);
	};
	// Clear input value
	gridInput.value = "";
});

//=======================//


//==== Randomize colors ====//

// Function to pick random rgb colors
// Example of expected output: "rgb(205, 235, 114)"
function pickRandomRGBColor () {
	// Define random values using Math.floor and Math.random
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	// Return color
	return `rgb(${r}, ${g}, ${b})`;
};

// Div and button to randomize colors
const randomizeColorsDiv = document.createElement("div");
randomizeColorsDiv.style.display = "flex";
randomizeColorsDiv.style.gap = "1rem";
randomizeColorsDiv.style.paddingTop = "0.5rem";
body.appendChild(randomizeColorsDiv);

const randomizeColorsText = document.createElement("div");
randomizeColorsText.textContent = "Randomize Colors:";
randomizeColorsDiv.appendChild(randomizeColorsText);
randomizeColorsDiv.style.alignItems = "center";

const randomizeColorsButton = document.createElement("button");
randomizeColorsButton.textContent = "ON";
randomizeColorsDiv.appendChild(randomizeColorsButton);
randomizeColorsButton.style.backgroundColor = "rgb(205, 235, 114)";
randomizeColorsButton.style.padding = "0.5rem";
randomizeColorsButton.style.border = "2px solid";
randomizeColorsButton.style.borderRadius = "255px 10px 155px 10px / 10px 255px 10px 255px";
randomizeColorsButton.style.cursor = "pointer";

// Add event listener to hightlight 'Randomize Colors' button
randomizeColorsButton.addEventListener('mouseover', () => {
	randomizeColorsButton.style.backgroundColor = "grey";
	randomizeColorsButton.style.color = "white";
});

randomizeColorsButton.addEventListener('mouseout', () => {
	randomizeColorsButton.style.backgroundColor = "rgb(205, 235, 114)";
	randomizeColorsButton.style.color = "black";
});

//=======================//