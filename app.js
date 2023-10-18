var _CONTENT = [
    "Hi,I'm Sandeep",
    "Engineer",
    "Android App Developer",
    "Backend Developer"
];
var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;
var _ELEMENT = document.querySelector("#text");
var _CURSOR = document.querySelector("#cursor");
function Type() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;
    if (text === _CONTENT[_PART]) {
        _CURSOR.style.display = 'none';

        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

function Delete() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;
    if (text === '') {
        clearInterval(_INTERVAL_VAL);
        if (_PART == (_CONTENT.length - 1))
            _PART = 0;
        else
            _PART++;

        _PART_INDEX = 0;
        setTimeout(function () {
            _CURSOR.style.display = 'inline-block';
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}
_INTERVAL_VAL = setInterval(Type, 100);

// popup logic 
const popup = document.querySelector('.full-screen');

setTimeout(showPopup, 1750);
function showPopup() {
    popup.classList.remove('hidden');

}
function closePopup() {
    popup.classList.add('hidden');

}


document.onkeydown = function(e) {
    if(e.key === 123) {
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