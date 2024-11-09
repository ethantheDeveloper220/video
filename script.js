// Sample public videos data
const publicVideos = [
    {
        title: "Public Video 1",
        thumbnail: "thumbnail1.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    {
        title: "Public Video 2",
        thumbnail: "thumbnail2.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
    },
    // Add more video data as needed
];

// Load public videos into the public video feed
function loadPublicVideos() {
    const publicVideoFeed = document.getElementById('publicVideoFeed');
    publicVideos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <img src="${video.thumbnail}" alt="${video.title} Thumbnail">
            <h3>${video.title}</h3>
        `;
        videoCard.onclick = () => openVideoModal(video.url);
        publicVideoFeed.appendChild(videoCard);
    });
}

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

// Load public videos on page load
window.onload = loadPublicVideos;
