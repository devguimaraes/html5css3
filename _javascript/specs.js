var arquivo = null;

function mudarFoto(arquivo) {
    if (arquivo == 1) {
        arquivo = "_imagens/home.png";
        document.getElementById("icone").src = arquivo;
    } else if (arquivo == 2) {
        arquivo = "_imagens/especificacoes.png";
        document.getElementById("icone").src = arquivo;
    } else if (arquivo == 3) {
        imagem = document.getElementById("icone");
        arquivo = "_imagens/fotos.png";
        imagem.style.transition = "1s";
        document.getElementById("icone").src = arquivo;
    } else if (arquivo == 4) {
        arquivo = "_imagens/multimidia.png";
        document.getElementById("icone").src = arquivo;
    } else if (arquivo == 5) {
        arquivo = "_imagens/contato.png";
        document.getElementById("icone").src = arquivo;
    }
}

function voltaFotoIndex() {
    parametro = "_imagens/glass-oculos-preto-peq.png"
    document.getElementById("icone").src = parametro;
}

function voltaFotoSpecs() {
    parametro = "_imagens/especificacoes.png"
    document.getElementById("icone").src = parametro;
}

function voltaFotoFoto() {
    parametro = "_imagens/fotos.png"
    document.getElementById("icone").src = parametro;
}

function voltaFotoMidia() {
    parametro = "_imagens/multimidia.png"
    document.getElementById("icone").src = parametro;
}

function voltaFotoForm() {
    parametro = "_imagens/contato.png"
    document.getElementById("icone").src = parametro;
}