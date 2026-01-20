// Data structure to hold the CV details
const cvData = {
    '2011-11': 'Human Resources Analyst, Chevron Corporation, Nigeria',
    '2012-09': 'Project Controls Engineer, Chevron Corporation, Lagos, Nigeria',
    '2013-01': 'Instrumentation Engineer / Design Engineer, NNPC, Nigeria',
    // Add more dates and job titles as needed
    };
    
    window.addEventListener('DOMContentLoaded', (event) => {
    const timelineContainer = document.getElementById('timeline-container');
    
    // Create year slider
    const yearSlider = document.createElement('input');
    yearSlider.setAttribute('type', 'range');
    yearSlider.setAttribute('min', '2011'); // Set the minimum year
    yearSlider.setAttribute('max', '2023'); // Set the maximum year
    yearSlider.setAttribute('value', '2011'); // Set the default value
    yearSlider.setAttribute('step', '1');
    yearSlider.id = 'yearSlider';
    timelineContainer.appendChild(yearSlider);
    
    // Create month slider
    const monthSlider = document.createElement('input');
    monthSlider.setAttribute('type', 'range');
    monthSlider.setAttribute('min', '1'); // Set the minimum month
    monthSlider.setAttribute('max', '12'); // Set the maximum month
    monthSlider.setAttribute('value', '1'); // Set the default value
    monthSlider.setAttribute('step', '1');
    monthSlider.id = 'monthSlider';
    timelineContainer.appendChild(monthSlider);
    
    const output = document.createElement('div');
    output.id = 'output';
    timelineContainer.appendChild(output);
    
    // Function to update the display as the sliders move
    function updateOutput() {
    const year = yearSlider.value;
    const month = monthSlider.value.padStart(2, '0');
    const key = `${year}-${month}`;
    output.textContent = cvData[key] || 'No data for this year and month';
    }
    
    // Event listeners for sliders
    yearSlider.oninput = updateOutput;
    monthSlider.oninput = updateOutput;
    
    // Initialize the display
    updateOutput();
    });