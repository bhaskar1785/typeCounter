
const textInput = document.getElementById('text-input');
const characterCount = document.getElementById('character-count');
const wordCount = document.getElementById('word-count');

textInput.addEventListener('input', function() {
    const text = this.value;
    const characters = text.length;
    characterCount.textContent = characters;

    const words = text.trim().split(/\s+/).filter(Boolean).length;
    wordCount.textContent = words;
});
