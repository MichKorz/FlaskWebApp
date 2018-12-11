window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let alexa = new SpeechRecognition()
let  przycisk = document.querySelector('Input')

function sluchaj(e){
    alert('Przekarze to')
    console.dir(e.results[0][0].transcript)
}

alexa.addEventListener('result', sluchaj);
//alexa.addEventListener('end', alexa.strart)//

przycisk.addEventListener('click', function(e){
    e.preventDefault();
    alert('Dzwonie po prawnika')
    alexa.start()
})