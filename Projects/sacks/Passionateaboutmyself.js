// Data for the timeline events
const timelineData = [
  {
  title: "Profile",
  content: "Strategic and analytical thinker...[more]",
  details: "I am a strategic and analytical thinker with a robust background in engineering and project management, characterized by a balanced approach to teamwork and quality control. My ability to engage assertively yet harmoniously with teams drives projects to success with a focus on high standards and efficiency. With experience spanning hands-on technical roles to strategic business development, I am adept at fostering innovative solutions and ensuring scalability in dynamic environments. Eager to apply my skills to new challenges, I leverage strategic planning, operational efficiency, and people engagement abilities to contribute to organizational growth...."
  },
  {
  title: "Education",
  content: "MBA, MSc, BSc...[more]",
  details: "MBA, The Hague University of Applied Sciences, Netherlands; MSc, Software Engineering, Coventry University, United Kingdom; BSc, Systems Engineering, University of Lagos, Nigeria..."
  },
  {
  title: "Professional Experience",
  content: "Entrepreneurship, Instrumentation Engineer, Project Controls Engineer, Human Resources Analyst...[more]",
  details: "As an Entrepreneur at Forward·Inc, Amsterdam (08/22-Current), partnered with emerging food startups to amplify their growth trajectories through strategic planning, market research, and business development. Offered extensive business and technical consultancy, focusing on enhancing operational efficiency and ensuring scalability. Achieved enhanced efficiency and scalability. As an Instrumentation and Controls Engineer at Chevron Corporation, Nigeria (01/16 – 06/20), enhanced operational efficiency and safety by managing instrumentation and control systems, ensuring precision and reliability. Reduced equipment failure rate by 20% through predictive maintenance. As an Instrumentation Engineer / Design Engineer at NNPC, Nigeria (01/13 – 11/15), conducted gap assessments and updated documentation to ensure accuracy and reflect recent changes, enhancing documentation efficiency by 30%. As a Project Controls Engineer at Chevron Corporation, Lagos, Nigeria (11/11 – 09/12), ensured strategic alignment of project objectives with business goals, fostering a culture of continuous improvement and reducing execution schedule slippage by 15%. As a Human Resources Analyst at Chevron Corporation, Nigeria (01/11 – 11/11), implemented strategic staffing initiatives and training programs, enhancing employee engagement and optimizing HR processes..."
  },
  // Add more timeline events for other experiences and skills
  ];
  
  // Function to create a timeline event element
  function createTimelineEvent(eventData) {
  const eventElement = document.createElement('div');
  eventElement.classList.add('timeline-event');
  
  const titleElement = document.createElement('h3');
  titleElement.textContent = eventData.title;
  eventElement.appendChild(titleElement);
  
  const contentElement = document.createElement('p');
  contentElement.textContent = eventData.content;
  eventElement.appendChild(contentElement);
  
  const detailsElement = document.createElement('div');
  detailsElement.classList.add('details');
  detailsElement.textContent = eventData.details;
  eventElement.appendChild(detailsElement);
  
  return eventElement;
  }
  
  // Wait for the DOM to fully load before running the script
  document.addEventListener('DOMContentLoaded', () => {
  // Get the timeline container element by its ID
  const timelineContainer = document.getElementById('timeline-container');
  
  // Check if the timeline container exists
  if (timelineContainer) {
  // If it exists, loop through the timeline data and create timeline events
  timelineData.forEach(eventData => {
  // Create a timeline event element
  const eventElement = createTimelineEvent(eventData);
  // Append the event element to the timeline container
  timelineContainer.appendChild(eventElement);
  });
  } else {
  // If the timeline container doesn't exist, log an error message
  console.error('Timeline container not found');
  }
  });