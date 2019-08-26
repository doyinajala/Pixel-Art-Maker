// Select color input

let table = document.getElementById("pixelCanvas");
let color = document.getElementById("colorPicker");
let height = document.getElementById("inputHeight").value;
let width = document.getElementById("inputWidth").value;
 makeGrid(height,width);


// Select size input
let size = document.getElementById("sizePicker");

sizePicker.addEventListener("click", function(event) {
 event.preventDefault();
 table.firstChild.remove();
 let height = document.getElementById("inputHeight").value;
 let width = document.getElementById("inputWidth").value;
 makeGrid(height,width);
});
// When size is submitted by the user, call makeGrid()
function makeGrid(height,width) {
 // console.log(height,width);
 for (let x =0; x<=height;x++){
 let row = table.insertRow(x);
 for (let y = 0; y<=width;y++){
 let cell = row.insertCell(y);
 cell.addEventListener("click", function(event){
 console.log(event);
 cell.style.backgroundColor=color.value;
 });
 }
 }
 }
// Your code goes here!




