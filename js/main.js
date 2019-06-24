document.addEventListener('DOMContentLoaded', () => { //wait until everything loaded

  let i = 0;
  let txt = 'and no “h", it’s Portuguese :)';
  let speed = 60;

  function typeWriter() {
    if (i <= txt.length) {
      document.getElementById("typewriting").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  setTimeout(typeWriter,2000);






});
