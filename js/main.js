document.addEventListener('DOMContentLoaded', () => { //wait until everything loaded

  let i = 0;
  let speed = 100;
  let txt = "it's portuguese :)"


  function typeWriter() {
    if (i <= txt.length) {
      console.log(txt.length);
      document.getElementById("typewriting").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }


  setTimeout(typeWriter, 1500);


let reveal = document.getElementById('reveal');
let box = document.getElementById("box");
let front = document.getElementById("front");
let submit = document.getElementById('submit');


  reveal.addEventListener("click", function(e){
        console.log('I clicked here')
        box.style.transform = "rotateX(90deg)";
  });

  submit.addEventListener("click", function(e){
    document.getElementById('hi').innerHTML = 'Nice to meet you!!🤩'
  });




});
