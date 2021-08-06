//VARIBALE Declarations
var hr7 = $("#7");
var hr8 = $("#8");
var hr9 = $("#9");
var hr10 = $("#10");
var hr11 = $("#11");
var hr12 = $("#12");
var hr13 = $("#13");
var hr14 = $("#14");
var hr15 = $("#15");
var hr16 = $("#16");
var hr17 = $("#17");
var hr18 = $("#18");
var savebtn = $(".savebtn");
var date = $("#currentDay");
var today = moment();
var TimeofDay = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18"];



//setting current time and date.
function setDate() {
  $("#currentDay").text(
    ["Today's Date Is: "] + today.format("dddd MMM Do, YYYY")
  );
}
//Update time of day:
function UpdateTime() {
  var currentTime = moment().format("H");
  //varibale of current time on the hour
  for(var i = 0; i< TimeofDay.length; i++){
   // if timeofday is > the current time then style a box a certain way.
   if(TimeofDay > currentTime){
       $("#" + TimeofDay[i]).attr("style", "background-color:#77dd77");
        // else if timeof day is < currentTime then style box certain way.
   } else if (TimeofDay < currentTime){
       $("#" + TimeofDay[i]).attr("style", "backgorund-color: #d3d3d3" );
       //else if timeof Day == currentTime then style back ground like this. 
   } else (TimeofDay == currentTime){
       $("#" + TimeofDay[i]).attr("style", "background-color: #77dd77");
   }
   
};
}

//local stroage to save user input
function saveSched() {
  //want a variable that equals the users in put. 
  //will i need this for each hour? 
  //use .val to get input. 
  //we will need ot get item to display to user. 
}

//Call Functions
setDate()
savebtn.on("click", saveSched)