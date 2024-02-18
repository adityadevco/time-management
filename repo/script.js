document.addEventListener('DOMContentLoaded', function() {
    const studyForm = document.getElementById('study-form');
    const reminderList = document.getElementById('reminder-list');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    studyForm.addEventListener('submit', function(event) {
        event.preventDefault();
        // Get form values
        const studyTime = parseInt(document.getElementById('study-time').value);
        const deadline = document.getElementById('deadline').value;
        const focusTechniques = document.getElementById('focus-techniques').value;

        // Simulate AI optimization (for demonstration)
        const optimizedSchedule = optimizeSchedule(studyTime, deadline, focusTechniques);
        console.log(optimizedSchedule);

        // Clear form inputs
        studyForm.reset();

        // Update progress bar
        updateProgress(optimizedSchedule.progress);

        // Update reminder list
        updateReminders(optimizedSchedule.reminders);
    });

    // Function to simulate AI optimization
    function optimizeSchedule(studyTime, deadline, focusTechniques) {
        // Simulated data
        const progress = Math.floor(Math.random() * 101); // Random progress value
        const reminders = generateReminders(deadline); // Generate reminders based on deadline
        return { progress, reminders };
    }

    // Function to generate reminders based on deadline
    function generateReminders(deadline) {
        const reminders = [];
        // Generate reminders (for demonstration, actual implementation may vary)
        reminders.push(`Complete assignment: ${deadline}`);
        reminders.push(`Review notes: ${getRandomDate(deadline, -2)}`);
        reminders.push(`Practice problems: ${getRandomDate(deadline, -3)}`);
        return reminders;
    }

    // Function to get random date before the deadline
    function getRandomDate(deadline, daysBefore) {
        const date = new Date(deadline);
        date.setDate(date.getDate() + daysBefore);
        return date.toISOString().split('T')[0]; // Format as YYYY-MM-DD
    }

    // Function to update progress bar
    function updateProgress(progress) {
        progressBar.value = progress;
        progressText.textContent = `Current progress: ${progress}%`;
    }

    // Function to update reminder list
    function updateReminders(reminders) {
        reminderList.innerHTML = ''; // Clear existing reminders
        reminders.forEach(function(reminder) {
            const li = document.createElement('li');
            li.textContent = reminder;
            reminderList.appendChild(li);
        });
    }
});
