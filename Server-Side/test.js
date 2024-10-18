let hour = document.getElementById("hour_time").innerText;
let minute = document.getElementById("minute_time").innerText;
let second = document.getElementById("second_time").innerText;

console.log(hour, minute, second);

// Get the current time in UTC
let currentTimeUTC = new Date();

// Calculate the time offset for GMT+6 (6 hours * 60 minutes * 60 seconds * 1000 milliseconds)
let offsetInMilliseconds = 6 * 60 * 60 * 1000;

// Add the offset to the UTC time
let gmtPlus6Time = new Date(currentTimeUTC.getTime() + offsetInMilliseconds);

// Extract the hour, minute, and second
let nowHour = gmtPlus6Time.getUTCHours().toString().padStart(2, "0");
let nowMinutes = gmtPlus6Time.getUTCMinutes().toString().padStart(2, "0");
let nowSecond = gmtPlus6Time.getUTCSeconds().toString().padStart(2, "0");

let hour_intervel = nowHour;
let minute_intervel = nowMinutes;
let second_intervel = nowSecond;

setInterval(() => {
  second_intervel++;
  if (second_intervel == 61) {
    second_intervel = 0;
    minute_intervel++;
    if (minute_intervel == 61) {
      minute_intervel = 0;
      hour_intervel++;
      if (hour_intervel == 13) {
        hour_intervel = 1;
      }
    }
  }
  console.log(second_intervel);
  console.log(minute_intervel);
  console.log(hour_intervel);
}, 1000);
