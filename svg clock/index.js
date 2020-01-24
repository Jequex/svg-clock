var ampm = document.getElementById("clockface");
var clocked = document.getElementById("clock");
var clockDate = document.getElementById("date");
var hourly = document.getElementById("hour-hand");
var minutely = document.getElementById("minute-hand");
var secondly = document.getElementById("second-hand");
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

function clock() {
  let time = new Date()

  hours = time.getHours()
  minutes = time.getMinutes()
  seconds = time.getSeconds()

  if (hours > 12){
    hours = hours - 12;
    ampm.setAttribute("fill", "black")
  }
  hour = (1/120)*((hours * 3600) + (minutes * 60) + (seconds))
  minute = 0.1 * ((minutes * 60) + seconds)
  second = 6 * seconds
  hourly.setAttribute("transform", "rotate(" + hour + ", 600, 270)");
  minutely.setAttribute("transform", "rotate(" + minute + ", 600, 270)");
  secondly.setAttribute("transform", "rotate(" + second + ", 600, 270)");
  clockDate.innerHTML = `${time.getUTCDate()} ${months[time.getMonth()]} ${time.getFullYear()}`;
}

function fun() {
  myArray = ["blue", "green", "yellow", "slateblue", "violet", "tan", "white", "magenta", "lime", "gold"]
  var rand = myArray[Math.floor(Math.random() * myArray.length)]
  clocked.setAttribute("fill", rand)
  ampm.setAttribute("stroke", rand)
}

setInterval(clock, 1000)
setInterval(fun, 2000)


