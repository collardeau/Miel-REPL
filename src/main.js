var miel = require('miel')

document.querySelector('textarea').value = "var add2 = (num) => {-}\n\treturn num + 2;\n\nadd2(2);";
var button = document.querySelector('button');

button.onclick = function(e) {
  var input = document.querySelector('textarea').value
  var output = miel(input);
  document.querySelector('pre').innerText = output 
  e.preventDefault()
}

document.querySelector("textarea").addEventListener('keydown',function(e) {
    if(e.keyCode === 9) { // tab was pressed
        // get caret position/selection
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var target = e.target;
        var value = target.value;

        // set textarea value to: text before caret + tab + text after caret
        target.value = value.substring(0, start)
                    + "\t"
                    + value.substring(end);

        // put caret at right position again (add one for the tab)
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        e.preventDefault();
    }
},false);

