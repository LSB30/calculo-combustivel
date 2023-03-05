
function calcular(event) {
    event.preventDefault();

    let alcoolInput = document.querySelector('#alcool').value
    let gasolinaInput = document.querySelector('#gasolina').value;

    let contentresult = document.querySelector('#content-result');
    let textresult = document.querySelector('#text-result')

    let spanAlcool = document.querySelector('#spanAlcool')
    let spanGasolina = document.querySelector('#spanGasolina')

    let calculo = (alcoolInput / gasolinaInput);

    if (calculo < 0.7) {
        textresult.textContent = "Compensa usar Álcool"


    } else {
        textresult.textContent = "Compensa usar Gasolina"

    }

    spanGasolina.textContent = `Gasolina R$${gasolinaInput}`
    spanAlcool.textContent = `Álcool R$${alcoolInput}`

    contentresult.classList.remove("hide")
};