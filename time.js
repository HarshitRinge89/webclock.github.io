function startTime(){
  const today = new Date();
  let h=today.getHours();
  let m=today.getMinutes();
  let s=today.getSeconds();
  let day=today.getDay();
  let date=today.getDate();
  let month=today.getMonth();
  let year=today.getFullYear();
  let utch = today.getUTCHours();
  let utcm = today.getUTCMinutes();
  let utcs = today.getUTCSeconds();
  m = checkTime(m);
  s = checkTime(s);
  utcm=checkTime(utcm);
  utcs=checkTime(utcs);
  document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
  switch (day) {
    case 0:day = "Sunday";break;
    case 1:day = "Monday";break;
    case 2:day = "Tuesday";break;
    case 3:day = "Wednesday";break;
    case 4:day = "Thursday";break;
    case 5:day = "Friday";break;
    case 6:day = "Saturday";break;
  }
  month+=1;
  document.getElementById('dayndate').innerHTML= date + "-" + month + "-" + year + "," + day;
  document.getElementById('utc').innerHTML = "The UTC Time is: "+  utch + ":" + utcm + ":" + utcs;
  setTimeout(startTime, 1000);
}
function checkTime(i) {if(i<10){i="0"+i};return i;}
function checkDate(){
  const tday= new Date();
  let date= tday.getFullYear();
  document.getElementById('date').innerHTML = date;
}
setInterval(() => {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let hourdeg = (30 * hours) + (0.5 * minutes);
  let mindeg = 6 * minutes;
  let secdeg = 6 * seconds;
  hourhand.style.transform =`translate(-50%,-100%) rotate(${hourdeg}deg)`
  minutehand.style.transform =`translate(-50%,-100%) rotate(${mindeg}deg)`
  secondhand.style.transform =`translate(-50%,-100%) rotate(${secdeg}deg)`
});
function displayElement() {
  let analog = document.getElementById("clock");
  let digi=document.getElementById("digiclk");
  if (digi.style.display !== "none") {digi.style.display = "none";analog.style.display = "block";}
  else {digi.style.display = "block";analog.style.display = "none";}
}
