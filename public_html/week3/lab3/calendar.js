
var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

$(document).ready(function () {

    var d = new Date();
    var mth = d.getMonth() + 1;
    var yr = d.getFullYear();

    $("#month").val(mth);
    $("#year").val(yr);
    showCalendar(mth, yr);

    $("#month,#year").change(function (e) {
        showCalendar($("#month").val(), $("#year").val());
    });
    
    
    //changes all dav div background colors
    $("#yes").click(function(){
        $('div.day').css("background-color", "green");
    });
    $("#no").click(function(){
        $('div.day').css("background-color", "red");
    });
});


function daysInMonth(anyDateInMonth) {
    return new Date(anyDateInMonth.getYear(), anyDateInMonth.getMonth() + 1, 0).getDate();
}


function showCalendar(mth, yr) {


    var firstDayOfMonth = mth + "/1/" + yr;
    var d = new Date(firstDayOfMonth);
    var numberOfDaysInMonth = daysInMonth(d);
    var firstDayOfWeek = d.getDay();
    var dayCount = 1;
    var totalDisplay = numberOfDaysInMonth + firstDayOfWeek;



    /* loop that first adds a row and then add 7 divs within the row*/
    var str = '<div class="row">';
    for (var i = 1; i <= totalDisplay; i++) {
        //adds day number if count is greater than first day of the week
        if (i > firstDayOfWeek)
        {
            str += '<div class="day">' + dayCount + '</div>';
            dayCount++;
            /*if the count is less than first day of the week it will add blank days */
        } else {
            str += '<div class="day"></div>';
        }
        if ((i % 7) === 0) {
            str += '</row><div class="row">';
        }
    }
    str += '</div>';

    $("#results").html(str);


    //changes the background of the selected day div
    $("div.day").click(function () {
        var color = $(this).css("background-color");
        console.log(color);
        if (color === 'rgba(0, 0, 0, 0)' || color === 'rgb(255, 255, 255)') {
            $(this).css("background-color", "green");
        }
        if (color === 'rgb(0, 128, 0)') {
            $(this).css("background-color", "red");
        }
        if (color === 'rgb(255, 0, 0)') {
            $(this).css("background-color", "white");
        }              
    }); 
}




