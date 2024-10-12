// Initialize Telegram WebApp SDK
const telegram = window.Telegram.WebApp;

// Check if the user data is available
if (telegram.initDataUnsafe && telegram.initDataUnsafe.user) {
  const user = telegram.initDataUnsafe.user;

  // Use 'username' if available, otherwise fallback to 'first_name'
  const userName = user.username ? '@' + user.username : user.first_name;
  document.getElementById('user-name').innerText = userName;

  // Use profile picture if available, otherwise fallback to a default image
  const userProfilePic = user.photo_url || 'default-profile-pic.png'; // Replace with your default image URL
  document.getElementById('user-photo').src = userProfilePic;
} else {
  console.error('User data not available');
}

// Function to copy the referral code (user's Telegram ID)
document.getElementById('copy-referral-btn').addEventListener('click', function() {
  const referralCode = telegram.initDataUnsafe.user.id;

  // Attempt to copy using the Clipboard API
  if (navigator.clipboard) {
    navigator.clipboard.writeText(referralCode.toString()).then(function() {
      alert('Referral code copied to clipboard!');
    }).catch(function() {
      fallbackCopyTextToClipboard(referralCode);
    });
  } else {
    // Fallback for older browsers
    fallbackCopyTextToClipboard(referralCode);
  }
});

// Fallback copy function for older browsers
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    alert('Referral code copied to clipboard!');
  } catch (err) {
    alert('Failed to copy referral code.');
  }
  document.body.removeChild(textArea);
}

// Example: Update the referral count dynamically
function updateReferralCount(newCount) {
  document.getElementById('referral-number').innerText = newCount;
}

// Simulate updating the referral count after 2 seconds
setTimeout(() => {
  updateReferralCount(5); // Example referral count
}, 2000);
