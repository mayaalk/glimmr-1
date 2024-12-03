"use strict";

// JavaScript to dynamically load data into the preview page
document.getElementById("backButton").addEventListener("click", function() {
  window.history.back();
});

document.getElementById("editButton").addEventListener("click", function() {
  window.location.href = "editProfile.html"; // Redirect to the edit page
});

// Function to display profile data in preview fields
function loadProfileData() {
  // Assuming data is stored in localStorage or passed as a JavaScript object
  const profileData = JSON.parse(localStorage.getItem("profileData")); // Replace with actual data source

  // Profile Picture
  document.getElementById("profilePicturePreview").src = profileData.profilePicture || "#"; // Default to a placeholder if no picture

  // Fill the profile details
  document.getElementById("namePreview").textContent = profileData.name || "N/A";
  document.getElementById("agePreview").textContent = profileData.age || "N/A";
  document.getElementById("genderPreview").textContent = profileData.gender || "N/A";
  document.getElementById("locationPreview").textContent = profileData.location || "N/A";
  document.getElementById("heightPreview").textContent = profileData.height || "N/A";
  document.getElementById("bodyTypePreview").textContent = profileData.bodyType || "N/A";
  document.getElementById("educationPreview").textContent = profileData.education || "N/A";
  document.getElementById("religionPreview").textContent = profileData.religion || "N/A";
  document.getElementById("politicalViewsPreview").textContent = profileData.politicalViews || "N/A";
  document.getElementById("petsPreview").textContent = profileData.pets || "N/A";
  document.getElementById("smokingPreview").textContent = profileData.smoking || "N/A";
  document.getElementById("drinkingPreview").textContent = profileData.drinking || "N/A";
  document.getElementById("activityLevelPreview").textContent = profileData.activityLevel || "N/A";
  document.getElementById("datingPreferencePreview").textContent = profileData.datingPreference || "N/A";
  document.getElementById("relationshipTypePreview").textContent = profileData.relationshipType || "N/A";
  document.getElementById("familyPlansPreview").textContent = profileData.familyPlans || "N/A";
  document.getElementById("relationshipStylePreview").textContent = profileData.relationshipStyle || "N/A";
  document.getElementById("bioPreview").textContent = profileData.bio || "N/A";
  document.getElementById("interestsPreview").textContent = profileData.interests || "N/A";
}

// Load profile data when the page is ready
window.onload = loadProfileData;
