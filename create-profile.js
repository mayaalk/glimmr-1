"use strict";

document.getElementById('previewButton').addEventListener('click', function() {
  window.location.href = 'previewProfile.html';
});

document.getElementById('backButton').addEventListener('click', function() {
  // Redirect to previewProfile.html when the Preview button is clicked
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
