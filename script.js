// sintaxe = document.getElementById("id que quer modificar").style.propriedadeCSS = "valor";

var cores = document.getElementById("cores");
var tamanhos = document.getElementById("tamanhos");

cores.addEventListener('click', function(e) {
    document.getElementById("cor_txt").innerHTML = e.target.id;
});

tamanhos.addEventListener('click', function(e) {
    document.getElementById("tamanho_txt").innerHTML = e.target.innerHTML;
});

