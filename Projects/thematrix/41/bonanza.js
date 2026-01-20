$(document).ready(function() {
    // .click function example
    $('#myButton').click(function() {
    alert('Button clicked!');
    });
    
    // .fadeIn and .fadeOut function examples
    $('#fadeInButton').click(function() {
    $('#myDiv').fadeIn();
    });
    $('#fadeOutButton').click(function() {
    $('#myDiv').fadeOut();
    });
    
    // .addClass function example
    $('#addClassButton').click(function() {
    $(this).addClass('active');
    });
    
    // .append function example
    $('#appendButton').click(function() {
    $('#myList').append('<li>New Item</li>');
    });
    
    // .html function example
    $('#htmlButton').click(function() {
    $('#myDiv').html('<strong>New HTML content</strong>');
    });
    
    // .text function example
    $('#textButton').click(function() {
    $('#myDiv').text('New text content');
    });
    
    // .val function example
    $('#valButton').click(function() {
    var inputValue = $('#myInput').val();
    alert(inputValue);
    });
    
    // .hide and .show function examples
    $('#hideButton').click(function() {
    $('#myDiv').hide();
    });
    $('#showButton').click(function() {
    $('#myDiv').show();
    });
    
    // .slideDown function example
    $('#slideDownButton').click(function() {
    $('#myDiv').slideDown();
    });
    
    // Add up to 3 functions of your choice here
    });