function firstChar(text) {
  // your code here
	let copy=text.trim();
	return copy.charAt(0);
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
 