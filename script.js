var date = $("#currentDay");
var today = moment();

//setting current time and date.
$("#currentDay").text(
  ["Today's Date is: "] + today.format(" dddd MMM Do, YYYY")
);
