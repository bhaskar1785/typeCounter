// Selecting elements from the DOM
const textInput = document.getElementById('text-input');
const characterCount = document.getElementById('character-count');
const wordCount = document.getElementById('word-count');

// Event listener for input in the textarea
textInput.addEventListener('input', function() {
    // Get the input value
    const text = this.value;
    // Counting characters (including spaces)
    const characters = text.length;
    characterCount.textContent = characters;

    // Counting words
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    wordCount.textContent = words;
});
