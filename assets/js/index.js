'use strict';

let alarmTime = null;
const alarmSound = new Audio('assets/audio/iphone_alarm.mp3'); 

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.querySelector('#clock').textContent = `${hours}:${minutes}`;

  if (alarmTime && `${hours}:${minutes}` === alarmTime) {
    playAlarm();
    document.querySelector('#alarmMessage').textContent = "Alarm ringing!";
    alarmTime = null; // Reset alarm after it rings
  }
}

function setAlarm() {
  const alarmHour = parseInt(document.querySelector('#alarmHour').value, 10);
  const alarmMinute = parseInt(document.querySelector('#alarmMinute').value, 10);

  if (alarmHour && alarmMinute && alarmHour >= 0 && alarmHour <= 23 && alarmMinute >= 0 && alarmMinute <= 59) {
    alarmTime = `${String(alarmHour).padStart(2, '0')}:${String(alarmMinute).padStart(2, '0')}`;
    document.querySelector('#alarmMessage').textContent = `Alarm set for ${alarmTime}`;
    } else {
        alert("Please enter a valid time for the alarm!");
    }
}

function playAlarm() {
  alarmSound.play().catch(error => {
    console.error("Playback failed:", error);
    // Handle the error (e.g., show a message to the user)
    alert("Unable to play the alarm sound. Please check the file path or format.");
  });
}

setInterval(updateClock, 200); // Update the clock every second