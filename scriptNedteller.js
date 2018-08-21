const output = document.querySelector('#output');
const start = document.querySelector('.startbutton');
const reset = document.querySelector('.resetbutton');


const container = document.querySelector('.buttons');

container.addEventListener('click', function(event) {
    const element = event.target;
    const outputNumber = element.textContent;
    console.log('OutputNumber' + outputNumber)
   
    if(output.textContent === "0"){             //Kombinere to tall for nedtelling
        output.textContent=element.textContent;
    }
    else{
        output.textContent += element.textContent;  
    }
    
    console.log(element.textContent); // => BUTTON eller DIV
});
function countDown(id) {  
    if (output.textContent > '0'){
        output.textContent -= '1';      //Teller nedover
        console.log('Jeg printer til konsollet');
    }
    
    
    if(output.textContent === '0'){
        clearInterval(id);
        console.log(id);
    }
}

const startbutton = document.querySelector('.startbutton');
startbutton.addEventListener('click', function(event) {
    const id = setInterval (() => countDown(id), 1000);  //setter intervallet for nedtelling
   
});

const resetbutton = document.querySelector('.resetbutton'); 
resetbutton.addEventListener('click', function(event){
    output.textContent = '0';                           // nullstill output-feltet
})

//const nummer = element.textContent;
const currentNumber = output.textContent;

//console.log(nummer);
//console.log(outputNumber);


//clearInterval(id);