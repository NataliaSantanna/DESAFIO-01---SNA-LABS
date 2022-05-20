function Calcular(){

   // Pegar o número
   let calcularNumero = prompt('Digite um número:') 


   // Validacão se não for um número ele manda um Alert pedindo para digitar um número, retornando novamente o prompt para o usuário digitar
   if(isNaN(calcularNumero)){
       alert("Digite um número")
       Calcular()
       return
       
   }


   //Calculo do dobro
   var dobro = calcularNumero * 2


   //Calculo da metade
   var metade = calcularNumero / 2 


   // Manda a reposta
   let res = document.getElementById('resultado')
   res.innerHTML = ` <p> O numero é ${calcularNumero} o dobro é ${dobro}  e a metade é ${metade}<p/>`
};

