function toggleTextToSpeech() {
    const isChecked = document.getElementById('textToSpeech').checked;
    if (isChecked) {
        // Logic for enabling text-to-speech
        document.body.addEventListener('click', speakText);
    } else {
        document.body.removeEventListener('click', speakText);
    }
}

function speakText() {
    const utterance = new SpeechSynthesisUtterance(document.body.innerText);
    speechSynthesis.speak(utterance);
}
