const containerElement = document.getElementById('container')

let chooseNumber= parseInt(prompt("Inserisci un numero da 1 a 100"))

if (isNaN(chooseNumber)){
    alert('il numero non è valido')
    chooseNumber= parseInt(prompt("Inserisci un numero da 1 a 100"))
}
for (let i= 1; i <= chooseNumber; i++){
    
    if ((i%3==0) && (i%5==0)){
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

