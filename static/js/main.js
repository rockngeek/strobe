const b = document.querySelector('body');
const l = document.querySelector('#logo');

//define background classes in css 
var backgroundClasses = ['black-bg', 'white-bg', 'red-bg']; 
var logoBgClasses = ['black-logo', 'white-logo', 'red-logo'];

function changeBackground(seconds) {
  var nOfBackgrounds = backgroundClasses.length;
  var i=0; 

  setInterval(function() {
    b.classList.remove(backgroundClasses[i]);
    l.classList.remove(logoBgClasses[i]);
    var newClass = (i+1) % nOfBackgrounds;
    b.classList.add(backgroundClasses[newClass]);
    l.classList.add(logoBgClasses[newClass]);
    i = newClass;
  }, seconds * 1000);
};
