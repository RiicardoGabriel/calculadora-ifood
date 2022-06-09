window.onload = function () {
    function calculadora () {
    document.querySelector("#btn").addEventListener('click', () => {
        const calculo = document.querySelector('#inp').value - document.querySelector('#inp').value * 17.5 / 100;
        const calcRounded = calculo.toFixed(2);
        document.querySelector("#valor").innerHTML = `Valor a receber: <b>R$ ${calcRounded}</b>`;
        document.querySelector("#inp").value = '';
})
}

document.addEventListener('keypress', function(e){
    if(e.key == 'Enter'){
        var btn = document.querySelector("#btn");
        btn.click();
    }
  }, false);
  
calculadora();
};
