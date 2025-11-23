document.addEventListener('DOMContentLoaded', () => {
    console.log("Community Page Loaded");
});

// Copy Link Functionality
function copyLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        showToast("Invite Link Copied! 📋");
    }).catch(err => {
        console.error('Failed to copy: ', err);
        showToast("Failed to copy link ❌");
    });
}

// Toast Notification Helper
function showToast(message) {
    // Check if toast exists, if not create it
    let toast = document.getElementById('toast-notification');
    
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'toast-notification';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    // Hide after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}