console.log("IN JS");

//GLOBAL VARIABLES//
var colorArray = [];
var red = 0;
var yellow = 0;
var green = 0;
var blue = 0;


//BEGIN DOCUMENT READY//
$(document).ready (function(){
console.log("in JQ");

enableButtons();

});
//END DOC READY//

//***FUNCTIONS***//

function enableButtons (){
  $(document).on('click', '.color-button', buttonClick)
};//end enable buttons

function buttonClick (){
  var clickColor = $(this).data().color
  console.log(clickColor);

  colorArray.push(clickColor);
  displayBox(colorArray);
  displayTotals( );
}; //end button click

//BEGIN DISPLAY FUNCTIONS//
function displayBox (array){
  var cubeDiv = $(".container")
  var outputText = "";
  array.forEach(function(color){
    if (color == "red"){
    outputText += '<div class = "color-cube red"></div>'
  } else if (color == "yellow"){
    outputText += '<div class = "color-cube yellow"></div>'
  } else if (color == "green"){
    outputText += '<div class = "color-cube green"></div>'
  } else {
    outputText += '<div class = "color-cube blue"></div>'
  }
  });//end for each color array
  cubeDiv.html(outputText);
}; //end display buttons

function displayTotals (array){
  colorArray.forEach(function(color){
  if(color == "red"){
    red += 1;
  } else if (color == "yellow"){
    yellow += 1;
  } else if (color == "green"){
    green += 1;
  } else {
    blue += 1;
  }
});
};

//END DISPLAY FUNCTIONS
