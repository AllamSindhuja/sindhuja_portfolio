document.addEventListener('DOMContentLoaded', function () {
    // Check user's color scheme preference and stored theme in local storage
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const themeSwitch = document.getElementById('theme-switch');

    // Apply dark mode if user prefers or if it's stored in local storage
    if (storedTheme === 'dark' || (!storedTheme && userPrefersDark)) {
        document.body.classList.add('dark-mode');
        themeSwitch.checked = true;
    }

    // Event listener for dark mode toggle switch
    themeSwitch.addEventListener('change', function () {
        // Toggle dark mode class on the body
        document.body.classList.toggle('dark-mode');
        // Save the current theme preference to local storage
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
    });

    // Functions for modal display and close
    window.showDetails = function () {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    };

    window.closeDetails = function () {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    };

    // Functions for experience modal display and close
    window.showExperienceDetails = function (company, role, time, description) {
        const experienceModal = document.getElementById('experience-modal');
        const companyElement = document.getElementById('experience-company');
        const roleElement = document.getElementById('experience-role');
        const timeElement = document.getElementById('experience-time');
        const descriptionElement = document.getElementById('experience-description');

        // Set content for experience modal
        companyElement.textContent = company;
        roleElement.textContent = `Role: ${role}`;
        timeElement.textContent = `Time: ${time}`;
        descriptionElement.textContent = description;

        experienceModal.style.display = 'block';
    };

    window.closeExperienceDetails = function () {
        const experienceModal = document.getElementById('experience-modal');
        experienceModal.style.display = 'none';
    };
});
