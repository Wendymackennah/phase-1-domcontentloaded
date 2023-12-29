// Your code goes here

document.addEventListener('DOMContentLoaded', function () {
    // Target the paragraph element with id="text"
    var textParagraph = document.getElementById('text');

    // Check if the element is found before trying to manipulate it
    if (textParagraph) {
        // Replace the text content with "This is really cool!"
        textParagraph.textContent = "This is really cool!";
    } else {
        console.error("Element with id='text' not found.");
    }
});
