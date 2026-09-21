//relogio
function atualizarRelogio(){
    const agr=new Date();
    const horaFormatada = agr.toLocaleTimeString();
    document.getElementById('relogio').innerText=horaFormatada;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();

//calculadora
const btnCalc = document.getElementById('btn-calc');
const janelaCalc = document.getElementById('janela-calc');
const fecharCalc = document.getElementById('fechar-calc');

btnCalc.addEventListener('click', function() {
    janelaCalc.style.display = 'block';
});
fecharCalc.addEventListener('click', function() {
    janelaCalc.style.display = 'none';
});

//clima
const btnClima = document.getElementById('btn-clima');
const janelaClima = document.getElementById('janela-clima');
const fecharClima = document.getElementById('fechar-clima');

btnClima.addEventListener('click', function() {
    janelaClima.style.display = 'block';
});
fecharClima.addEventListener('click', function() {
    janelaClima.style.display = 'none';
});

async function buscarClima() {
    const elementoCidade = document.getElementById('cidade-clima');
    const elementoTemp = document.getElementById('temp-clima');

    try {
        const resposta = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-3.73&longitude=-38.52&current_weather=true');
        const dados = await resposta.json();

        const temperatura = dados.current_weather.temperature;

        elementoCidade.innerText = "Beach (Fortaleza)";
        elementoTemp.innerText = temperatura + " °C";
    } catch (erro) {
        elementoCidade.innerText = "Error";
        elementoTemp.innerText = "-- °C";
    }
}

buscarClima();


//notas
const btnNotas = document.getElementById('btn-notas');
const janelaNotas = document.getElementById('janela-notas');
const fecharNotas = document.getElementById('fechar-notas');

btnNotas.addEventListener('click', function() {
    janelaNotas.style.display = 'block';
});
fecharNotas.addEventListener('click', function() {
    janelaNotas.style.display = 'none';
});

const campoNotas = document.getElementById('texto-notas');
campoNotas.value = localStorage.getItem('minhas_notas');

campoNotas.addEventListener('input', function() {
    localStorage.setItem('minhas_notas', campoNotas.value);
});

//mensagem inicial
const btnMensagem = document.getElementById('btn-bemvindo');
const janelaMensagem = document.getElementById('janela-bemvindo');
const fecharMensagem = document.getElementById('fechar-bemvindo');

btnMensagem.addEventListener('click', function() {
    janelaMensagem.style.display = 'block';
});
fecharMensagem.addEventListener('click', function() {
    janelaMensagem.style.display = 'none';
});

//arrastar
function tornarArrastavel(janela) {
    const cabeca = janela.querySelector('.janela-cabeca');
    
    let offsetX = 0;
    let offsetY = 0;

    function getPos(e) {
        return e.touches ? e.touches[0] : e;
    }

    function mover(e) {
        const pos = getPos(e);
        janela.style.left = (pos.clientX - offsetX) + 'px';
        janela.style.top = (pos.clientY - offsetY) + 'px';
    }

    function iniciar(e) {
        const pos = getPos(e);
        
        offsetX = pos.clientX - janela.offsetLeft;
        offsetY = pos.clientY - janela.offsetTop;

        window.addEventListener('mousemove', mover);
        window.addEventListener('touchmove', mover);
    }

    function parar() {
        window.removeEventListener('mousemove', mover);
        window.removeEventListener('touchmove', mover);
    }

    if (cabeca) {
        cabeca.addEventListener('mousedown', iniciar);
        cabeca.addEventListener('touchstart', iniciar);
    }

    window.addEventListener('mouseup', parar);
    window.addEventListener('touchend', parar);
}

tornarArrastavel(janelaCalc);
tornarArrastavel(janelaClima);
tornarArrastavel(janelaNotas);
tornarArrastavel(janelaMensagem);
