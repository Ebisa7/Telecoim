// Check if Telegram WebApp is available
if (window.Telegram && window.Telegram.WebApp) {
    const telegram = window.Telegram.WebApp;

    // Wait until the Telegram WebApp is ready
    telegram.ready();

    // Log the init data for debugging
    console.log("Telegram WebApp init data:", telegram.initDataUnsafe);

    // Get the user information
    const user = telegram.initDataUnsafe.user;

    // Check if the user data is available
    if (user) {
        // Set the user's name (using username or first_name)
        const userName = user.username ? '@' + user.username : user.first_name;
        document.getElementById('user-name').innerText = userName;

        // Set the user's profile picture, if available
        const userProfilePic = user.photo_url || 'default-profile-pic.png'; // Use your default image URL if no profile picture
        document.getElementById('user-photo').src = userProfilePic;

    } else {
        console.error('User data not available');
        document.getElementById('user-name').innerText = 'Error loading user data';
    }
} else {
    console.error('Telegram WebApp not available');
    document.getElementById('user-name').innerText = 'Error: Telegram WebApp not available';
}
