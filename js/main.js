document.addEventListener('DOMContentLoaded', () => { //wait until everything loaded

  let i = 0;
  let speed = 80;
  let txt = "it's Portuguese!"

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
  let emojis = document.getElementsByClassName('emoji')

  reveal.addEventListener("click", function(e){
        document.getElementById('hi').style.height = '500px';
        box.style.transform = "rotateX(90deg)"
  });

  submit.addEventListener("click", function(e){
    document.getElementById('hi').style.height = '100px';
    document.getElementById('hi').innerHTML = '<h2>Nice to meet you!!🤩</h2>'
  });

  hamburger.addEventListener("click", function(e){
    dropdown.classList.add('expanded');
  });

  document.addEventListener("click", function(e){
    if(e.target !== hamburger ){
      dropdown.classList.remove('expanded');
    }
  });

  for (let i = 0; i <= 4; i+=1) {
    emojis[i].classList.add('rotating');
  }

});
