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
    const roundedMarte = Math.round(pesoMarte * 10) / 10;
    const roundedJupiter = Math.round(pesoJupiter * 10) / 10;
    let resultMars = document.getElementById("mars");
    let resultJupiter = document.getElementById("jupiter");
    resultMars.innerText = roundedMarte + " Kg";
    resultJupiter.innerText = roundedJupiter + " Kg";

}