document.addEventListener("DOMContentLoaded", function() {
    // Function to get current UTC time adjusted for West Africa Time (UTC+1)
    function getCurrentTimeUTC() {
        const now = new Date();
        const utcTime = now.getUTCHours() + 1 + ":" + now.getUTCMinutes().toString().padStart(2, '0') + ":" + now.getUTCSeconds().toString().padStart(2, '0');
        return utcTime;
    }

    // Function to update time every second
    function updateTime() {
        const utcTime = getCurrentTimeUTC();
        document.getElementById('utc-time').textContent = utcTime;
    }

    // Function to get current day of the week
    function getCurrentDay() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();
        const dayOfWeek = days[now.getUTCDay()];
        return dayOfWeek;
    }

    // Display current UTC time and day of the week
    updateTime(); // Initial display
    document.getElementById('utc-day').textContent = getCurrentDay();

    // Update time every second
    setInterval(updateTime, 1000);
});
