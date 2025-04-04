// JavaScript: Interactivity, functionality, behavior //
//Save the theme to local storage
localStorage.setItem('theme', 'dark');

// Retrieve the theme when the user comes back
const userTheme = localStorage.getItem('theme');
document.body.classList.add(userTheme); // Applies the 'dark' theme