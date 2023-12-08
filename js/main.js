
//// function of Change Quotes When i Click on the Button


var quotes = [
  `"The only limit to our realization of will be our doubts of today." <br> -- Franklin D. Roosevelt`,
  `"In the middle of difficulty lies opportunity." <br> -- Albert Einstein`,
  `"Do not wait to strike till the iron is hot, but make it hot by striking." <br> -- William Butler Yeats`,
  `"You miss 100% of the shots you don't take." <br> -- Wayne Gretzy`,
  `"Resentment is like drinking waiting for your enemies to die." <br> -- Nelson Mandela`,
  `"To live is the rarest thing in the world. Most people exist, that is all  that is all." <br> -- Oscar Wilde`,
  `"It is better to be hated for what you are than to be loved for what you are not." <br> -- Andre Gide,Autumn Leaves`
]


function showQuote() {
            
  var cartona = Math.floor(Math.random() * quotes.length);

  
 document.getElementById("demo"). innerHTML= quotes[cartona];
}



//// function of Change Color of Paragraphs(Quotes)


var col = ['red','crimson','brown' , 'blue' , 'green' , 'darkred' , 'darkblue ' , 'oranged' , 'white' , 'yellow']

function changeColor() {


  var changeCol = Math.floor(Math.random() * col.length);

  document.getElementById("demo"). style.color= col[changeCol];

}


//// function of Change Color of Background of Button on Click


var buttonColor = ['crimson','brown' , 'blue' , 'green' , 'darkred' , 'darkblue ' , 'oranged' , 'indigo']


function changeButtonColor() {
  var changeButtonCol = Math.floor(Math.random() * buttonColor.length);

  document.getElementById("colorButton"). style.background= buttonColor[changeButtonCol];
}