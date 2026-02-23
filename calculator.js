var displace = document.querySelector('#display');
var butt = document.querySelectorAll('button');

butt.forEach((button) =>{
    button.addEventListener("click", function(){
        var answer = button.textContent;
        // console.log(answer);

        if(answer === 'C'){
            clear();
        }else if(answer === '='){
            calculate();
        }else{
            addvalues(answer);
        }
    });
}) 

function clear(){
    display.answer = '';
}
function addvalues(answer){
    display.answer += answer ;
}
function calculate(){
    try {
        display.answer = eval(display.answer);
    } catch (error) {
        display.answer = 'Err'
    }
}