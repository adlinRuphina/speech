let btn = document.querySelector('#btn'); //connecting html
//console.log(btn);
btn.addEventListener('click', speech);
function speech() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition; //statement

  let recognition = new SpeechRecognition(); //constructor

  recognition.interimResults = true;

  let p = document.createElement('p');
  let words = document.querySelector('.words');
  words.appendChild(p);

  //call dom events
  recognition.addEventListener('result', (e) => {
    let transcript = [...e.results]
      .map((result) => result[0])
      .map((result) => result.transcript)
      .join(' ');
    p.textContent = transcript;

    //final result
    if (e.results[0].isFinal) {
      p = document.createElement('p');
      words.appendChild(p);
    }

    //console.log(transcript);
  });
  //to restart recognition
  recognition.addEventListener('end', recognition.start);
  //to start recognition
  recognition.start(); //built in function
}
