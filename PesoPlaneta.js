function CalcularJupiter(peso){
    const pesoJupiter = (peso/9.81) * 24.8;
    return pesoJupiter;
}

function CalcularMarte(peso){
    const pesoMarte = (peso/9.81) * 3.711;
    return pesoMarte;
}

function calcularPeso(){
    const inputPeso = document.getElementById("weight");
    const peso = inputPeso.value;
    const pesoMarte = CalcularMarte(peso);
    const pesoJupiter = CalcularJupiter(peso);
    let resultMars = document.getElementById("mars");
    let resultJupiter = document.getElementById("jupiter");
    resultMars.innerText = pesoMarte + " Kg";
    resultJupiter.innerText = pesoJupiter + " Kg";

}