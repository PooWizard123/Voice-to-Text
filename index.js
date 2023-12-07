const texts = document.getElementById('convert-text');


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();


recognition.interimResults = true;


recognition.onresult = function(event) {

    
    texts.value = event.results[0][0].transcript;


}

recognition.addEventListener('end', ()=> {
    recognition.start();
})

recognition.start();

