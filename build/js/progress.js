function getProgressYear() {
    var now = moment();
    var startOfYear = moment().startOf('year');
    var endOfYear = moment().endOf('year');
    var totalMilliseconds = endOfYear.diff(startOfYear);
    var progressYear = now.diff(startOfYear) / totalMilliseconds;
    return progressYear;
}

function getProgressDay() {
    var now = moment();
    var startOfDay = moment().startOf('day');
    var endOfDay = moment().endOf('day');
    var totalMilliseconds = endOfDay.diff(startOfDay);
    var progressDay = now.diff(startOfDay) / totalMilliseconds;
    return progressDay;
}



window.onload = function () {
    var progressYear = getProgressYear();
    var progressDay = getProgressDay();
    document.getElementById("progress-day").style.width = (progressDay * 100) + "%";
    document.getElementById("progress-day").innerHTML = (progressDay * 100).toFixed(4) + "%";
    document.getElementById("progress-year").style.width = (progressYear * 100) + "%";
    document.getElementById("progress-year").innerHTML = (progressYear * 100).toFixed(4) + "%";
}

setInterval(function(){
    var progressYear = getProgressYear();
    var progressDay = getProgressDay();
    document.getElementById("progress-day").style.width = (progressDay * 100) + "%";
    document.getElementById("progress-day").innerHTML = (progressDay * 100).toFixed(4) + "%";
    document.getElementById("progress-year").style.width = (progressYear * 100) + "%";
    document.getElementById("progress-year").innerHTML = (progressYear * 100).toFixed(4) + "%";
}, 360);