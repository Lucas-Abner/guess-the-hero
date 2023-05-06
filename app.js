let result = document.querySelector("input");

let numberRandom = Math.floor(Math.random() * 26);
const newHero = heros[numberRandom];

let tentativas = 0;

function search(){
    if(result.value === newHero){
        acertDescription();
    }else if(result.value !== newHero){
        // Messagem de erro
        errorDescription();
    }
    
}

function acertDescription(){
    let newH1 = document.createElement("h1");
    let newAcert = newH1.innerText = "Parabéns! Você acertou 😁";

    document.querySelector(".dicas").innerHTML = "";
    document.querySelector(".desc").innerHTML = "";
    document.querySelector(".description").style.display = "block";
    document.querySelector(".description").innerHTML = newAcert;
    document.querySelector(".reset").style.display = "block"
}

function errorDescription(){
    tentativas++;
    result.value = "";

    document.querySelector(".attemps").innerHTML = tentativas;
    document.querySelector(".dica").innerHTML = newHero[0];
    document.querySelector(".description").style.display = "block";
}

function resetGame(){
    document.location.reload(true);
}