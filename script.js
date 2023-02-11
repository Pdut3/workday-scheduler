$(document).ready(function () {
  // Save button listener
  $(".saveBtn").on("click", function () {
      var userText = $(this).siblings(".description").val()
      var time = $(this).parent().attr("id")
      // Saves to local storage
      console.log(time, userText)
      localStorage.setItem(time, userText)
 })

  $("#hour-7 .description").val(localStorage.getItem("hour-7"))
  $("#hour-8 .description").val(localStorage.getItem("hour-8"))
  $("#hour-9 .description").val(localStorage.getItem("hour-9"))
  $("#hour-10 .description").val(localStorage.getItem("hour-10"))
  $("#hour-11 .description").val(localStorage.getItem("hour-11"))
  $("#hour-12 .description").val(localStorage.getItem("hour-12"))
  $("#hour-13 .description").val(localStorage.getItem("hour-13"))
  $("#hour-14 .description").val(localStorage.getItem("hour-14"))
  $("#hour-15 .description").val(localStorage.getItem("hour-15"))
  $("#hour-16 .description").val(localStorage.getItem("hour-16"))
  $("#hour-17 .description").val(localStorage.getItem("hour-17"))
  $("#hour-18 .description").val(localStorage.getItem("hour-18"))
  $("#hour-19 .description").val(localStorage.getItem("hour-19"))

  function timeChecker() {
   // Gets the current hour
   var currentTime = dayjs().hour()

   // Loops through each hour
   $(".time-block").each(function () {
       var currentHour = parseInt($(this).attr("id").split("-")[1])
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
