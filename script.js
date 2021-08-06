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

//setting current time and date.
function setDate() {
  $("#currentDay").text(
    ["Today's Date Is: "] + today.format("dddd MMM Do, YYYY")
  );
  UpdateTime();
}
//Update time of day and added in graabing from loal storage into my for loop.
function UpdateTime() {
  var currentTime = moment().format("H");
  //varibale of current time on the hour
  for (var i = 7; i <= 18; i++) {
    // if timeofday is > the current time then style a box a certain way.
    if (i > currentTime) {
      $("#" + i).addClass("future");
      // else if timeof day is < currentTime then style box certain way.
    } else if (i < currentTime) {
      $("#" + i).addClass("past");
      //else if timeof Day == currentTime then style back ground like this.
    } else if (i == currentTime) {
      $("#" + i).addClass("present");
    }
    $("#t" + i).val(localStorage.getItem("s" + i));
  }
}

//local stroage to save user input

//want a variable that equals the users in put.
//will i need this for each hour?
//use .val to get input.
//we will need ot get item to display to user.

//Call Functions
setDate();

savebtn.on("click", function () {
  var text = $(this).siblings("textarea").val();
  var btnid = $(this).attr("id");
  localStorage.setItem(btnid, text);
});
