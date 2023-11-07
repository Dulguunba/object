let startinsert = new Date("October 21, 2023 13:15:00");
let finishinsert = new Date("October 21, 2023 13:45:30");
let starthour = startinsert.getHours();
let startminu = startinsert.getMinutes();
let finishhour = finishinsert.getHours();
let finishminu = finishinsert.getMinutes();
let startsec = startinsert.getSeconds();
let finishsec = finishinsert.getSeconds();
let durationmin =
  (finishhour - starthour) * 60 +
  (finishminu - startminu) +
  (finishsec - startsec) / 60;
const fee = 1000;

function payment(x) {
  if (x % 60 <= 30) {
    return Math.floor(x / 60) * fee;
  } else {
    return (Math.floor(x / 60) + 1) * fee;
  }
}

console.log(payment(durationmin));

//function zarlaad terendee huvisagchaa oruulaad date uud hasaad milesecond oo sec bolgood teged 3600 huvaah zamar bodno tegel 7-10 mur code bichne
