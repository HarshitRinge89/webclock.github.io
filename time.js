function startTime(){
  const today = new Date();
  let h=today.getHours();
  let m=today.getMinutes();
  let s=today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
function checkTime(i) {
  if(i<10){i="0"+i};
  return i;
}
function checkDate(){
  const tday= new Date();
  let date= tday.getFullYear();
  document.getElementById('date').innerHTML = date;
}

/*Analog */

// function analog() {
//   let now = new Date();
//   let seconds= now.getSeconds();
//   let minutes= now.getMinutes();
//   let hours=now.getHours();
//   let secdeg=seconds*6;
//   let mindeg= minutes*6;
//   let hourdeg= 30*hours + (0.5 * minutes);
//   setTimeout(startTime, 1000);
//   hourhand.style.transform =`translate(-50%,-100%) rotate(${hourdeg}deg)`
//   minutehand.style.transform =`translate(-50%,-100%) rotate(${mindeg}deg)`
//   secondhand.style.transform =`translate(-50%,-85%) rotate(${secdeg}deg)`
//   setTimeout(startTime, 1000);
// }
setInterval(() => {
  let now = new Date()
  let hours = now.getHours()
  let minutes = now.getMinutes()
  let seconds = now.getSeconds()
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
  if (digi.style.display !== "none") {
        digi.style.display = "none";
        analog.style.display = "block";
      } else {
        digi.style.display = "block";
        analog.style.display = "none";
      }
}