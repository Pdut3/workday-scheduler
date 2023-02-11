
$(document).ready(function () {
  // Save button listener
  $(".saveBtn").on("click", function () {
      var userText = $(this).siblings(".description").val()
      var time = $(this).parent().attr("id")
      // Saves to local storage
      localStorage.setItem(time, userText)
 })
  $("#hour07 .description").val(localStorage.getItem("hour07"))
  $("#hour08 .description").val(localStorage.getItem("hour08"))
  $("#hour09 .description").val(localStorage.getItem("hour09"))
  $("#hour10 .description").val(localStorage.getItem("hour10"))
  $("#hour11 .description").val(localStorage.getItem("hour11"))
  $("#hour12 .description").val(localStorage.getItem("hour12"))
  $("#hour13 .description").val(localStorage.getItem("hour13"))
  $("#hour14 .description").val(localStorage.getItem("hour14"))
  $("#hour15 .description").val(localStorage.getItem("hour15"))
  $("#hour16 .description").val(localStorage.getItem("hour16"))
  $("#hour17 .description").val(localStorage.getItem("hour17"))
  $("#hour18 .description").val(localStorage.getItem("hour18"))
  $("#hour19 .description").val(localStorage.getItem("hour19"))

  function timeChecker() {
   // Gets the current hour
   var currentTime = dayjs().hour()

   // Loops through each hour
   $(".time-block").each(function () {
       var currentHour = parseInt($(this).attr("id").split("hour")[1])
       // Checks time and removes or adds class accordingly
       if (currentHour < currentTime) {
           $(this).addClass("past")
           $(this).removeClass("present")
           $(this).removeClass("future")
       }
       else if (currentHour === currentTime) {
           $(this).removeClass("past")
           $(this).addClass("present")
           $(this).removeClass("future")
       }
       else {
           $(this).removeClass("past")
           $(this).removeClass("present")
           $(this).addClass("future")
       }
   })
}
timeChecker()
})

// Displays today's date
var currentDate = dayjs().format('dddd, MMMM DD YYYY')
$("#currentDay").html(currentDate)
