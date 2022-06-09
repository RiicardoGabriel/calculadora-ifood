window.onload = function () {
function calculadora () {
    document.querySelector("#inp").addEventListener('keyup', () => {
        const calculo = document.querySelector('#inp').value - document.querySelector('#inp').value * 17.5 / 100;
        const calcRounded = calculo.toFixed(2);
        document.querySelector("#valor").innerHTML = `Valor a receber: <b>R$ ${calcRounded}</b>`;
})
}

function apagarInpt () {
    document.querySelector("#btn").addEventListener('click', () => {
        document.querySelector("#inp").value = '';
    })
}

calculadora();
apagarInpt();
};
