// alert("loaded"); 


/*
	multi line comment
*/



var phoneBook = {	//  bos bir js objesi 
	
	"ali" : "1234567123",
	"ozan" : "2324341123",
	"doruk" : "312312321"


};		

function sayHi(name) {
	var i = 0;
	while(i < array.length){
	console.log("Hi" + array[i++]};

	};


}

function changeColor(query) {

// ask user

var color = prompt("what color?");

var isValid = validate(color);

	while(!isValid){
		color = prompt("what color?");
		isValid = validate(color);

}

var elements = document.querySelectorALL(query);

elements = Array.prototype.slice.call(elements);
	for (var i = 0; i < elements.length; i ++) {
	var e = elements[i];
	// change color of e
	e.style.color= color;

	
};

}


				// COLOR ORNEK 


function validate(color) {
	// color array
	var colorArray = ["orange", "red", "blue"]; 


	for (var i in colorArray){
		var validColor = colorArray[i];
		
	
		if(validColor == color){
			return true;
	 		}  	
 		}
		
		return false;
	}
		

 validate("orange");

validate("yellow");

console.log(validate("orange"));


				// ORNEK BITIS









