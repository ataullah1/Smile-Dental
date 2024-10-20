// Get the elements, not just the inner text
let hourElem = document.getElementById("hour_time");
let minuteElem = document.getElementById("minute_time");
let secondElem = document.getElementById("second_time");
let periodElem = document.getElementById("period");

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
// Convert 24-hour format to 12-hour format
let period = nowHour >= 12 ? "PM" : "AM";
periodElem.innerHTML = period;
nowHour = nowHour % 12 || 12; // Convert hour "0" to "12" for 12 AM

hourElem.innerHTML = nowHour;
minuteElem.innerHTML = nowMinutes;
secondElem.innerHTML = nowSecond;

let hour_intervel = nowHour;
let minute_intervel = nowMinutes;
let second_intervel = nowSecond;

// Main Function start
setInterval(() => {
  second_intervel++;

  secondElem.innerHTML = second_intervel;
  if (second_intervel.toString().length < 2) {
    const second_zro = "0" + second_intervel;
    secondElem.innerHTML = second_zro;
  }

  if (second_intervel == 60) {
    second_intervel = 0;
    minute_intervel++;
    minuteElem.innerHTML = minute_intervel;
    if (minute_intervel.toString().length < 2) {
      const minute_zro = "0" + minute_intervel;
      minuteElem.innerHTML = minute_zro;
    }
    if (minute_intervel == 60) {
      periodElem.innerHTML = period;
      minute_intervel = 0;
      hour_intervel++;
      hourElem.innerHTML = hour_intervel;
      if (hour_intervel.toString().length < 2) {
        const hour_zro = "0" + hour_intervel;
        hourElem.innerHTML = hour_zro;
      }
      if (hour_intervel == 12) {
        hour_intervel = 1;
      }
    }
  }
}, 1000);
