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
  let name_field = document.getElementById('name');
  let email_field = document.getElementById('Email_Address');
  let message_field = document.getElementById('message');

  reveal.addEventListener("click", function(e){
    document.getElementById('hi').style.height = '470px';
    box.style.transform = "rotateX(90deg)"
  });

  /*submit.addEventListener("click", function(e){
    if(name_field.value && email_field.value && message_field.value) {
      document.getElementById('hi').style.height = '100px';
      document.getElementById('hi').innerHTML = "<h3>👉 Nice to meet you, I'll get back to you soon!</h3>"
    }
  });*/

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
