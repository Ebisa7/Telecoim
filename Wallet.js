// Initialize Telegram WebApp SDK
const telegram = window.Telegram.WebApp;

// Set the user's name and profile picture
const userName = telegram.initDataUnsafe.user.first_name;
const userProfilePic = telegram.initDataUnsafe.user.photo_url;

document.getElementById('user-name').innerText = userName;
document.getElementById('user-photo').src = userProfilePic || 'default-profile-pic.png'; // Fallback to a default image if no profile pic

// Referral count, initially set to 0
let referralCount = 0;

// Function to copy the referral code (user's Telegram ID)
document.getElementById('copy-referral-btn').addEventListener('click', function() {
  const referralCode = telegram.initDataUnsafe.user.id;
  navigator.clipboard.writeText(referralCode.toString()).then(function() {
    alert('Referral code copied to clipboard!');
  }, function(err) {
    alert('Failed to copy referral code.');
  });
});

// Update the referral count (This part can be dynamic when integrated with backend)
function updateReferralCount(newCount) {
  referralCount = newCount;
  document.getElementById('referral-number').innerText = referralCount;
}

// Example: Simulate updating the referral count
// In a real app, this would be fetched from the server
setTimeout(() => {
  updateReferralCount(5); // Example of referral count update
}, 2000);
