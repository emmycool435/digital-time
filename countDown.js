const hourEl = document.getElementById("hour");
const minuteEl= document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");
const dayEl =document.getElementById("day");

let deadline = new Date("Jan 1, 2024 00:00:00").getTime();

let x = setInterval(function(){
    let now = new Date().getTime();

let t = deadline - now;

document.getElementById("day").innerHTML = Math.floor(t/( 1000 * 60 * 60 * 24));
document.getElementById("hour").innerHTML = Math.floor((t%( 1000 * 60 * 60 * 24 )) / ( 1000 * 60 * 60 ));
document.getElementById("minutes").innerHTML = Math.floor((t%(1000 * 60 * 60 ) / (1000 * 60)));
document.getElementById("seconds").innerHTML = Math.floor(( t% ( 1000 * 60 )) / 1000 );

if (t<0){
    clearInterval(x);
    document.getElementById("hour").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
    document.getElementById("day").innerHTML = "00"
    document.getElementById("ampm").innerHTML = "HAPPY NEW YEAR CHRIST THE WAY ASSEMBLY";
}



}, 1000)

