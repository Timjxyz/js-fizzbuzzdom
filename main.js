const containerElement = document.getElementById('container')

let frizz='frizz'

for (let i= 1; i <= 100; i++){
    
    if (i%3==0 && i%5==0){
        containerElement.innerHTML+='<div class="box box-red">' + "FizzBuzz" + '</div>';
    }
    else if(i%5==0){
        containerElement.innerHTML+='<div class="box box-yellow">' + "Buzz" + '</div>';
    }
    else if( i % 3==0){
        
        containerElement.innerHTML+='<div class="box box-green">' + "Fizz" + '</div>';
    }
    else{
        containerElement.innerHTML+='<div class="box">' + i + '</div>';
    }
}