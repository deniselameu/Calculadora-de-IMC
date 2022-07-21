function meuEscopo () {
    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas =[ ]; 
  
    function recebeEventoForm (evento) {
        evento.preventDefault();
        
        const nome = formulario.querySelector ('.nome');
        const  peso = formulario.querySelector ('.peso');
        const altura = formulario.querySelector ('.altura');

        const soma = peso.value / (altura.value * altura.value); 
    
        pessoas.push({ 
            nome:nome.Value,
            peso: Number(peso.value), 
            altura: Number(altura.value) 

        });
        console.log(pessoas);
        
function validacao (){
    if (soma <= 18.5){
        resultado.innerHTML += `<p>${nome.value} seu índice de massa corporal é de ${soma.toFixed(2)} você está Abaixo do Peso</p>`;
    
    }else if (soma >=18.5 && soma <=24.9){
        resultado.innerHTML += `<p>${nome.value} seu índice de massa corporal é de ${soma.toFixed(2)} você está com Peso normal</p>`;
       
    
    }else if (soma >=25 && soma <=29.9){
        resultado.innerHTML += `<p>${nome.value} seu índice de massa corporal é de ${soma.toFixed(2)} você está com Sobrepeso</p>`;
        
    
    }else if (soma >=30 && soma <=34.9){
        resultado.innerHTML += `<p>${nome.value} seu índice de massa corporal é de ${soma.toFixed(2)} você está com Obesidade grau 1</p>`;
        
    
    }else if (soma >=35 && soma <=39.9){
        resultado.innerHTML += `<p>${nome.value} seu índice de massa corporal é de ${soma.toFixed(2)} você está com Obesidade grau 2</p>`;
        
    }else if (soma >=40){
        resultado.innerHTML += `<p>${nome.value} seu índice de massa corporal é de ${soma.toFixed(2)} você está com Obesidade grau 3</p>`;
       
    }else{
        resultado.innerHTML += `<p>Digite um valor válido</p>`
        
    }
    
}
validacao();
    }

    formulario.addEventListener('submit', recebeEventoForm);
}

meuEscopo( );
