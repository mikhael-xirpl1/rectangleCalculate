var widthInput = document.querySelector(".width-input-field");
var heightInput = document.querySelector(".height-input-field");
var calculateButton = document.querySelector(".calculate")
var result = document.querySelector(".result")
var wide, height, width;

function myFunction(){
    width = widthInput.value;
    height = heightInput.value;
    wide = width*height;
    alert("And the wide is :" + wide)
}