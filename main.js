const d = new Date();
let tekst = document.getElementById("tekst");
let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();

tekst.innerHTML = hours + ":" + minutes + ":" + seconds;