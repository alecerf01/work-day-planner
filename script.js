var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM, Do"));

var container = $(".container")


var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

// for (var i = 0; i < hours.length; i++) {
    
// var timeBlock = $("div")

// timeBlock.text(hours[i])

// timeBlock.attr("class", "time-block")

// container.append(timeBlock)

// }

hours.forEach(function(time, index){
    
    var timeBlock = $("<div>").attr("id", index).addClass("time-block")
// timeBlock.addClass("col-12")
// timeBlock.addClass(index)
timeBlock.addClass("row")

timeBlock.text(time)

var button = $("<button>").addClass("saveBtn")
// button.addClass("col-6")

timeBlock.append(button)
// timeBlock.attr("class", "time-block")

container.append(timeBlock)
})