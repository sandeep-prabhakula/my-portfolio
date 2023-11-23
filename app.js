//typewriter
var app = document.getElementById('text');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(100)
  .typeString('Engineer')
  .pauseFor(300)
  .deleteChars(10)
  .typeString('Android App Developer')
  .pauseFor(300)
  .deleteChars(22)
  .typeString('Backend Developer')
  .pauseFor(100)
  .start();

// Navbar toggeling logic
document.querySelectorAll('.nav-item').forEach(function (element) {
    element.addEventListener('click', function () {
        // Close the navbar when a menu item is clicked
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

// key disable logic
document.onkeydown = function(e) {
    if(e.key === 'F12') {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.key === 'I'){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.key === 'J'){
     return false;
    }
    if(e.ctrlKey && e.key === 'u'){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.key === 'C'){
     return false;
    }      
 }

 function onMouseDown(e)
{
    if (e.which === 1 || e.button === 0)
    {
        console.log('"Left" at ' + e.clientX + 'x' + e.clientY);
    }

    if (e.which === 2 || e.button === 1)
    {
        console.log('"Middle" at ' + e.clientX + 'x' + e.clientY);
    }

    if (e.which === 3 || e.button === 2)
    {
        // console.log('"Right" at ' + e.clientX + 'x' + e.clientY);
        return false
    }

    if (e.which === 4 || e.button === 3)
    {
        console.log('"Back" at ' + e.clientX + 'x' + e.clientY);
    }

    if (e.which === 5 || e.button === 4)
    {
        console.log('"Forward" at ' + e.clientX + 'x' + e.clientY);
    }
}

window.addEventListener('mousedown', onMouseDown);
document.addEventListener('contextmenu', e => e?.cancelable && e.preventDefault());