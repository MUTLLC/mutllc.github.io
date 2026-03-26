// script.js

// Function to display the current date and time in UTC
function displayCurrentDateTime() {
    const now = new Date();
    const utcDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
    document.getElementById('datetime').textContent = utcDateTime;
}

// Call the function every second to update the time
setInterval(displayCurrentDateTime, 1000);

// Initial call to display time immediately
displayCurrentDateTime();