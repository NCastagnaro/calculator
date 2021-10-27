const one = document.querySelector('.one');.
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const input = document.querySelector('.input');
const plus = document.querySelector('.plus');
const equals = document.querySelector('.equals');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const divide = document.querySelector('.divide');
const clear = document.querySelector('.clear');
const decimal = document.querySelector('.decimal');




//input.value = 0;


zero.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        return;
    }
    else{
    input.value = (input.value) + 0;
    }
})
one.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        input.value ='';
    }
    input.value = (input.value) + 1;
})
two.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        input.value ='';
    }
    input.value = input.value + 2;
})
three.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        input.value ='';
    }
    input.value = input.value + 3;
})
four.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        input.value ='';
    }
    input.value = input.value + 4;
})
five.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        input.value ='';
    }
    input.value = (input.value) + 5;
})
six.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        input.value ='';
    }
    input.value = input.value + 6;
})
seven.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        input.value ='';
    }
    input.value = input.value + 7;
})
eight.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        input.value ='';
    }
    input.value = input.value + 8;
})
nine.addEventListener('click',function(){
    if(input.value.length == 1 && input.value == '0'){
        input.value ='';
    }
    input.value = input.value + 9;
})
decimal.addEventListener('click',function(){
    input.value = input.value + '.';
})

/*plus_minus.addEventListener('click',function(){
    if(input.value)
})*/




//when + is clicked, it apears as ' + ' with a space on each side
//to make the formula look neater. So, we need to check that if 
//input.value[input.value.length - 2] == '+', which it should 
//because total length -2 should give us the + sign, then we will just 
//return, which will never give the program the chance to chain addition
//signs on to one another. The same principle will apply for all other arithmetic symbols

//' + ' ------> space == index 1, + == index 2, space == index 3
//input.value.length - 2, no matter what the length of the string, will give you the + sign to check for 
//e.g 5000 + -----> input.value.length == 7, 7-2 ==5. input.value[5] == '+'  

plus.addEventListener('click',function(){
    if((input.value[input.value.length - 2] == '*') || (input.value[input.value.length - 2] == '/')||
    (input.value[input.value.length - 2] == '+') || (input.value[input.value.length - 2] == '-') || (input.value =='')){
        return;
    }
input.value = input.value + ' + ';
})

subtract.addEventListener('click',function(){
    if((input.value[input.value.length - 2] == '*') || (input.value[input.value.length - 2] == '/')||
    (input.value[input.value.length - 2] == '+') || (input.value[input.value.length - 2] == '-')){
        return;
    }
input.value = input.value + ' - ';
})


multiply.addEventListener('click',function(){
    if((input.value[input.value.length - 2] == '*') || (input.value[input.value.length - 2] == '/')||
    (input.value[input.value.length - 2] == '+') || (input.value[input.value.length - 2] == '-') || (input.value =='')){
        return;
    }
input.value = input.value + ' * ';
})

divide.addEventListener('click',function(){
    if((input.value[input.value.length - 2] == '*') || (input.value[input.value.length - 2] == '/')||
    (input.value[input.value.length - 2] == '+') || (input.value[input.value.length - 2] == '-')|| (input.value =='')){
        return;
    }
input.value = input.value + ' / ';
})

clear.addEventListener('click',function(){
    input.value = '';
})

//converts string to number, with the help of mathjs library
equals.addEventListener('click', function(){
    input.value = math.evaluate(input.value);
})



