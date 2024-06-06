class Validator{

    constructor(){
        this.validations = [
            "data-required",
            "data-min-length",
            "data-max-length",
            "data-email-validate",
            "data-only-letters",
            "data-password-validate",
        ]
    }
    //Inicia a validação do formulário
    validate(form){

        //Resgata todas as validações
        let currentValidations = document.querySelectorAll("form.error-validation");
        if(currentValidations.length > 0){
            this.cleanValidations(currentValidations);
        }
        //Seleciona os input        
        let inputs = form.getElementsByTagName("input");

        //Transforma uma HTMLCollection -> array            
        let inputsArray = [...inputs];

    //Loop nos inputs e validação do que for encontrado
        inputsArray.forEach(function(input){

            //Loop de todas as validações existentes            
            for(leti = 0; this.validations.length > input; i++){

                //Verifica se a validação atual existe no input                
                if(input.getAtribute(this.validations[i]) != null){

                    //Limpando a string para virar um método                     
                    let method = this.validations[i].replace("data-","").replace("-","");
                    
                    //Valor do input
                    let value = input.getAtribute(this.validations[i]);

                    //Invocar método
                    this[method](input, value);
                    
                }
            }
        }, this);
    }

//verificação do input minimo de caracteres 
minlength(input, minValue){
    let inputLength = input.value.length;

    let errorMessage = `O campo precisa ter pelo menos ${minValue}`;
    if (inputLength < minValue)
        this.printMessage(input, errorMessage);
}
//verificação do input com o maximo de caracteres
maxlength(input, maxValue){
    let inputLength = input.value.length;

    let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;
    if (inputLength > maxValue)
        this.printMessage(input, errorMessage);
}
//Método que valida o email
emailValidate(input){

    let re = /\S+@\S+\.\S+/;
    let email = input.value;
    let errorMessage = `Insira um email com o padrão enzokenta@gmail.com`
    if(!re.test(email)){
        this.errorMessage(input. errorMessage);
    }

}

//verifica se o input é requerido
required(input){
    let inputValue = input.value;
    if(inputValue === ""){
        let errorMessage = `Este campo é obrigatório`;

        this.printMessage(input, errorMessage);
    }
}
//Validase o campo tem apenas letras
onlyLetter(input){
    let re = /^[A-Za-Z]+$/;
    input = input.value;
    let errorMessage = `Este campo não aceita números nem caracteres especiais`;
    if(!re,test(inputValue)){
        this.printMessage(input, errorMessage);
    }
}

//Valida o campo de senha
passwordValidate(input){

    //String em array
    let charArr = inputvalue.split("");
    let uppercases = 0;
    let numbers = 0;

    for(let i = 0; charArr.length > i; i++){
        if(charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))){
            uppercases++;
        }else if(!isNaN(parseInt(charArr))){
            numbers++
            
        }
    }
    if(uppercases === 0 || numbers === 0){
        let errorMessage = `A senha precisa de um número`;
        this.printMessage(input, errorMessage);
    }

}
//Método para imprimir erros na tela
printMessage(input, msg){

    //Quantidade de erros
    let errorQty = input.parentNode.querySelector(".error-validation");
    if(errorQty === null){
        
        let template = document.querySelector(".error-validaton").cloneNode(true);
        template.textContent = msg;
        let inputParent = input.parentNode;
        template.classList.remove("template");
        inputParent.appendChild(template);  
    }
    }

//limpa as validações da tela
cleanValidations(validations){
    validations.forEach(el =>el.remove());
}

}

let form = document.getElementById("register");
let submit = document.getElementById("btn-submit");

let validator = new Validator();

//Evento que dispara as validações
submit.addEventListener("click",function(e){
    e.preventDefault();
    validator.validate(form);
})