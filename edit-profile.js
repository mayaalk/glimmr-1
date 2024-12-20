"use strict"

const DOMNavProfile = document.querySelector(".js-nav-profile");
const DOMNavSwipe = document.querySelector(".js-nav-swipe");

DOMNavProfile.addEventListener("click", () => {
  sessionStorage.page = "profile";
});

DOMNavSwipe.addEventListener("click", () => {
  sessionStorage.page = "swipe";
});

document.getElementById('previewButton').addEventListener('click', function() {
  window.location.href = 'preview-profile.html';
});

document.getElementById('backButton').addEventListener('click', function() {
  // Redirect to preview-profile.html when the Preview button is clicked
  window.location.href = 'decision.html';
});

// Logic for photo preview
function previewPhoto(event) {
  const photoPreview = document.getElementById('photoPreview');
  photoPreview.innerHTML = ''; // Clear previous preview
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      photoPreview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
}
document.getElementById('photo').addEventListener('change', previewPhoto);

document.getElementById('hideProfile').addEventListener('click', () => {
  alert('Your profile is now hidden.');
  document.querySelector('.container').style.display = 'none';
});

document.getElementById('deleteProfile').addEventListener('click', () => {
  if (confirm('Are you sure you want to delete your profile? This action cannot be undone.')) {
    alert('Your profile has been deleted.');
  }
});
