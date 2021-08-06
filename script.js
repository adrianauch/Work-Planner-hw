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
var savebtn = $(".saveBtn");
var date = $("#currentDay");
var today = moment();

//setting current time and date.
function setDate() {
  $("#currentDay").text(
    ["Today's Date Is: "] + today.format("dddd MMM Do, YYYY")
  );
  UpdateTime(); //calls function for colro coding and retrieving from local storage.
}
//Update time of day and added in graabing from loal storage into my for loop.
function UpdateTime() {
  //varibale of current time on the hour
  var currentTime = moment().format("H");
  //for loop iterating data between 7- 18 for the hours that my daily planner is showing.
  for (var i = 7; i <= 18; i++) {
    // if timeofday is > the current time then style background according to CSS
    if (i > currentTime) {
      $("#" + i).addClass("future");
      // else if timeof day is < currentTime then style background according to CSS
    } else if (i < currentTime) {
      $("#" + i).addClass("past");
      //else if timeof Day == currentTime then style background according to CSS
    } else if (i == currentTime) {
      $("#" + i).addClass("present");
    }
    //pulling into local storage my key ids.
    $("#t" + i).val(localStorage.getItem("s" + i));
  }
}

//Call Functions
setDate();

//event Listner for saving data to local storage.
savebtn.on("click", function () {
  //setting variable for text area that receives user input (value).
  var text = $(this).siblings("textarea").val();
  //pulling the idea from which button is pressed.
  var btnid = $(this).attr("id");
  //storing the data with the button id as key and the text as the value.
  localStorage.setItem(btnid, text);
});
