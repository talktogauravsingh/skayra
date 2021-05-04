console.log("Js file included!");

// new speech recognition object
var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var recognition = new SpeechRecognition();

// var myContinuous = recognition.continuous;
// recognition.continuous = true;
            
// This runs when the speech recognition service starts
recognition.onstart = function() {
    document.getElementById("skayraListening").innerHTML = "I am listening. Please, try speaking into the microphone...";
    console.log("I am listening. Try speaking into the microphone.");
};

recognition.onspeechend = function() {
    // when user is done speaking
    console.log("user done");
    recognition.stop();
}
              
// This runs when the speech recognition service returns result
recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    var confidence = event.results[0][0].confidence;

    console.log(transcript);

};
              
// start recognition
recognition.start();

