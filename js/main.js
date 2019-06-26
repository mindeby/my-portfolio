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
let hamburger = document.getElementById('hamburger');
let dropdown = document.getElementById('dropdown');


  reveal.addEventListener("click", function(e){
        console.log('I clicked here')
        box.style.transform = "rotateX(90deg)";
  });

  submit.addEventListener("click", function(e){
    document.getElementById('hi').innerHTML = '<h2>Nice to meet you!!🤩</h2>'
  });

  hamburger.addEventListener("click", function(e){
    dropdown.style.display ='block';
  });

  document.addEventListener("click", function(e){
    if(e.target !== hamburger ){
      dropdown.style.display ='none';
    }
  });





});
