// Show/Hide Modals
document.getElementById('loginButton').onclick = () => document.getElementById('loginModal').style.display = 'flex';
document.getElementById('uploadButton').onclick = () => document.getElementById('uploadModal').style.display = 'flex';

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function closeUploadModal() {
    document.getElementById('uploadModal').style.display = 'none';
}

function openVideoModal(videoUrl) {
    document.getElementById('videoModal').style.display = 'flex';
    document.getElementById('videoPlayer').src = videoUrl;
}

function closeVideoModal() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('videoPlayer').src = ''; // Stop the video when modal closes
}

// Login Function (Mock)
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    alert(`Logged in as: ${username}`);
    closeLoginModal();
}

// Upload Video Function (Mock)
function uploadVideo() {
    const fileInput = document.getElementById('fileUpload');
    const videoTitle = document.getElementById('videoTitle').value;
    if (fileInput.files.length > 0) {
        alert(`Video "${videoTitle}" uploaded!`);
    } else {
        alert('Please select a video file.');
    }
    closeUploadModal();
}
