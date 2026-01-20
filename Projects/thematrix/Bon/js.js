$(document).ready(function() {
    // Click Function
    $('#clickButton').click(function() {
      alert('Button clicked!');
    });

    // Fade In/Out Function
    $('#fadeInButton').click(function() {
      $('#fadeText').fadeIn();
      
    });
    $('#fadeInButton').click(function() {
   
      $('#fadeText').fadeOut();
    });
    

    // Append Function
    $('#appendButton').click(function() {
      $('#appendList').append('<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit</li>');
    });

  

    // Val Function
    $('#valButton').click(function() {
      const value = $('#valInput').val();
      alert('Input Value: ' + value);
    });

    // Hide/Show Function
    $('#hideButton').click(function() {
      $('#hideShowText').hide();
    });
    $('#showButton').click(function() {
      $('#hideShowText').show();
    });

    // Slide Down Function
    $('#slideDownButton').click(function() {
      $('#slideDownContent').slideDown();
    });
  });

  $(document).ready(function() {
    // Function to toggle text color
    function toggleTextColor() {
      var paragraph = $("#paragraph-change-color");
      // Check the current color and toggle it
      if (paragraph.css("color") === "rgb(255, 0, 0)") {
        // If the color is red, change it to the default color (black or your desired color)
        paragraph.css("color", "");
      } else {
        // If the color is not red, change it to red
        paragraph.css("color", "red");
      }
    }

    // Add click event handler for the "read more" button
    $("#appendButton1").click(function() {
      // Call the toggleTextColor function when the button is clicked
      toggleTextColor();
    });
  });