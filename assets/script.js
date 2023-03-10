var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM, Do"));

var container = $(".container")

var currentHour = currentDate.hour()
var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]


hours.forEach(function (time, index) {


    var timeZone = index + 9

    var timeBlock = $("<div>").addClass("time-block");
    // variables declared for each part of dynamically generated html
    var currentTime = $("<div>").addClass("hour");
    var textArea = $("<textarea>").attr("id", index).addClass("description");
    var button = $("<button>").addClass("saveBtn");

    // adding classes for styling to be implemented
    timeBlock.addClass("row");
    currentTime.addClass("col-1")
    textArea.addClass("col-10")
    button.addClass("col-1")
    button.addClass("fas fa-save");

    if (timeZone === currentHour) {
        textArea.addClass("present");
    } else if (timeZone < currentHour) {
        textArea.addClass("past");
    } else {
        textArea.addClass("future")
    };

    // looping array to set work hours so they can be changed by other developers
    currentTime.text(time);

    // apending all dynamic elements in correct order
    timeBlock.append(currentTime)
    timeBlock.append(textArea);
    timeBlock.append(button);
    container.append(timeBlock);

    var savedText = localStorage.getItem(index)

    textArea.text(savedText);

    button.on("click", function (event) {
        event.preventDefault();

        var text = textArea.val();

        localStorage.setItem(index, text);

        console.log(text)
    })
})