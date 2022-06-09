window.onload = function () {
    function calculadora () {
    document.querySelector("#btn").addEventListener('click', () => {
        document.querySelector("#valor").innerHTML = `Valor a receber: ${document.querySelector('#inp').value - document.querySelector('#inp').value * 17.5 / 100}`;
        // const segundo = primeiro * 100
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