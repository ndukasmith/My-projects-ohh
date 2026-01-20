// Sample data
const workExperiences = [
  "Instrumentation and Controls Engineer",
  "Project Controls Engineer",
  "Human Resources Analyst",
  ];
  
  // Function to add work experiences from the input field
  function addNewExperience() {
  const newExperience = document.getElementById("newExperience").value;
  if (newExperience) {
  workExperiences.push(newExperience);
  updateWorkExperienceList();
  document.getElementById("newExperience").value = ''; // Clear the input field
  }
  }
  
  // Function to update the work experience list
  function updateWorkExperienceList() {
  const workExperienceList = document.getElementById("workExperience");
  workExperienceList.innerHTML = ''; // Clear the list
  workExperiences.forEach((experience) => {
  const listItem = document.createElement("li");
  listItem.textContent = experience;
  workExperienceList.appendChild(listItem);
  });
  }
  
  // Function to toggle the visibility of the work experience list
  function toggleExperiences() {
  const workExperienceList = document.getElementById("workExperience");
  workExperienceList.style.display = workExperienceList.style.display === 'none' ? 'block' : 'none';
  }
  
  // Event listener to call the functions when the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
  updateWorkExperienceList(); // Initial update of the list
  });