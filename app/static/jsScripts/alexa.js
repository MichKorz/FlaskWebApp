window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let alexa = new SpeechRecognition()
let  przycisk = document.querySelector('Input')
const ss = window.speechSynthesis;
let ssu = new SpeechSynthesisUtterance;
let glosy = [];

function sluchaj(event){
    alert('Przekarze to')
    console.dir(event.results[0][0].transcript)
    alexaJobs(event.results[0][0].transcript)
}

alexa.addEventListener('result', sluchaj);
//alexa.addEventListener('end', alexa.strart)//

przycisk.addEventListener('click', function(e){
    e.preventDefault();
    alert('Dzwonie po prawnika')
    alexa.start()
})

alexa.addEventListener('end', ()=>{
    console.log('alexa end')
})

ss.addEventListener('voiceschanged', ()=>{
    glosy = ss.getVoices();
    console.dir(glosy);
})

function alexaJobs(text){
    text = text.toLowerCase()
     // fnukcja includes zwraca true albo false

//Polski
     if(text.includes("witaj")){
         //tu coś będzie
         ssu.text = "Witaj przyjacielu"
         ssu.lang = glosy[0];
         ss.speak(ssu)
     }

//Angielski

     else if(text.includes("hello")){
        window.open('https://www.youtube.com/watch?v=kJQP7kiw5Fk', '_blank');
    }
}