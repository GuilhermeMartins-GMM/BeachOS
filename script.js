//relogio
function atualizarRelogio(){
    const agr=new Date();
    const horaFormatada = agr.toLocaleTimeString();
    document.getElementById('relogio').innerText=horaFormatada;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio(); 

//------
const btnDps = document.getElementById('btn-dps');
btnDps.addEventListener('click', function() {
    if(arrastou){
        return;
    }
    alert("Can't you read?! It's still under development. ");
    navigator.vibrate(200, 200, 500);
});

//botoes jogo
const btnJogo = document.getElementById('btn-jogo');
const janelaJogo = document.getElementById('janela-jogo');
const fecharJogo = document.getElementById('fechar-jogo');

btnJogo.addEventListener('click', function() {
    if(arrastou){return;}
    janelaJogo.style.display = 'block';
});

fecharJogo.addEventListener('click', function() {
    janelaJogo.style.display = 'none';
});

//botoes pintar
const btnPintar = document.getElementById('btn-pintar');
const janelaPintar = document.getElementById('janela-pintar');
const fecharPintar = document.getElementById('fechar-pintar');

btnPintar.addEventListener('click', function() {
    if(arrastou) return;
    janelaPintar.style.display = 'block';
    setTimeout(function() {ajustarCanvas();}, 50);
});


fecharPintar.addEventListener('click', function() {
    janelaPintar.style.display = 'none';
});

//piada
const btnPiada = document.getElementById('btn-piada');
const janelaPiada = document.getElementById('janela-piada');
const fecharPiada = document.getElementById('fechar-piada');

btnPiada.addEventListener('click', function() {
    if(arrastou){
        return;
    }
    janelaPiada.style.display = 'block';
});

fecharPiada.addEventListener('click', function() {
    janelaPiada.style.display = 'none';
});

//musica
const btnMusica = document.getElementById('btn-musica');
const janelaMusica = document.getElementById('janela-musica');
const fecharMusica = document.getElementById('fechar-musica');

btnMusica.addEventListener('click', function() {
    if(arrastou){
        return;
    }
    janelaMusica.style.display = 'block';
});

fecharMusica.addEventListener('click', function() {
    janelaMusica.style.display = 'none';
});

// calculadora
const btnCalc = document.getElementById('btn-calc');
const janelaCalc = document.getElementById('janela-calc');
const fecharCalc = document.getElementById('fechar-calc');
const calcScreen = document.getElementById('calc-screen');

btnCalc.addEventListener('click', function() {
    if(arrastou){
        return;
    }
    janelaCalc.style.display = 'block';
});

fecharCalc.addEventListener('click', function() {
    janelaCalc.style.display = 'none';
});

function addValor(val) {
    if (calcScreen.value === '0' || calcScreen.value === 'Error') {
        calcScreen.value = val;
    } else {
        calcScreen.value += val;
    }
}

function limpar() {
    calcScreen.value = '0';
}

function apagarUltimo() {
    if (calcScreen.value.length > 1 && calcScreen.value !== 'Error') {
        calcScreen.value = calcScreen.value.slice(0, -1);
    } else {
        calcScreen.value = '0';
    }
}

function calcular() {
    try {
        calcScreen.value = eval(calcScreen.value);
    } catch{
        calcScreen.value = 'Error';
    }
}

//clima
const btnClima = document.getElementById('btn-clima');
const janelaClima = document.getElementById('janela-clima');
const fecharClima = document.getElementById('fechar-clima');

btnClima.addEventListener('click', function() {
    if(arrastou){
        return;
    }
    janelaClima.style.display = 'block';
});
fecharClima.addEventListener('click', function() {
    janelaClima.style.display = 'none';
});

async function buscarClima(nomeCidade) {
    const elementoCidade = document.getElementById('cidade');
    const elementoTemp = document.getElementById('temp-clima');

    elementoCidade.innerText = "Loading...";
    elementoTemp.innerText = "-- °C";

    try {
        const geoResposta = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(nomeCidade)}&count=1`);
        const geoDados = await geoResposta.json();

        if (!geoDados.results) {
            elementoCidade.innerText = "Not found";
            elementoTemp.innerText = "-- °C";
            return;
        }

        const lat = geoDados.results[0].latitude;
        const lon = geoDados.results[0].longitude;
        const nomeReal = geoDados.results[0].name;

        const climaResposta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        const climaDados = await climaResposta.json();

        elementoCidade.innerText = nomeReal;
        elementoTemp.innerText = climaDados.current_weather.temperature + " °C";
    } catch (erro) {
        elementoCidade.innerText = "Error";
        elementoTemp.innerText = "-- °C";
    }
}

document.getElementById('btn-buscar-clima').addEventListener('click', () => {
    const cidadeDigitada = document.getElementById('input-cidade').value.trim();
    if (cidadeDigitada == '') {
        buscarClima("Tokyo");
    }
    else{
        buscarClima(cidadeDigitada)
    }
});

document.getElementById('input-cidade').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const cidadeDigitada = this.value.trim();
        if (cidadeDigitada !== '') buscarClima(cidadeDigitada);
    }
});

buscarClima("Tokyo");


//notas
const btnNotas = document.getElementById('btn-notas');
const janelaNotas = document.getElementById('janela-notas');
const fecharNotas = document.getElementById('fechar-notas');

btnNotas.addEventListener('click', function() {
    if(arrastou){
        return;
    }
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
    if(arrastou){
        return;
    }
    janelaMensagem.style.display = 'block';
});
fecharMensagem.addEventListener('click', function() {
    janelaMensagem.style.display = 'none';
});

//pesquisa
const btnPesquisar = document.getElementById('btn-pesquisar');
const janelaPesquisa = document.getElementById('janela-pesquisa');
const fecharPesquisa = document.getElementById('fechar-pesquisa');

const campoPesquisa = document.getElementById('campo-pesquisa');
const btnFazerPesquisa = document.getElementById('btn-fazer-pesquisa');

btnPesquisar.addEventListener('click', function() {
    if(arrastou){
        return;
    }
    janelaPesquisa.style.display = 'block';
});
fecharPesquisa.addEventListener('click', function() {
    janelaPesquisa.style.display = 'none';
});

function executarPesquisa() {
    const termo = campoPesquisa.value.trim();
    if (termo !== '') {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(termo)}`);
    }
}

btnFazerPesquisa.addEventListener('click', executarPesquisa);

campoPesquisa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        executarPesquisa();
    }
});

//arrastar
let arrastou = false; let zIndexAtual=100;

function tornarArrastavel(janela) {
    const cabeca = janela.querySelector('.janela-cabeca') || janela;
    
    const ehIcone = janela.classList.contains('icone'); 
    
    let offsetX = 0;
    let offsetY = 0;
    let timerDeletar = null;

    function getPos(e) { 
        return e.touches ? e.touches[0] : e;
    }

    function mover(e) {
        arrastou=true;
        const pos = getPos(e);

        const x = Math.min( pos.clientX - offsetX, window.innerWidth - janela.offsetWidth );
        const y = Math.min( pos.clientY - offsetY, window.innerHeight - janela.offsetHeight );

        janela.style.left = x + 'px';
        janela.style.top = y + 'px'; 

        if (ehIcone) {
            const meioTelaX = window.innerWidth / 2;
            const fimTelaY = window.innerHeight;

            const naZonaX = pos.clientX > meioTelaX - 100 && pos.clientX < meioTelaX + 100;
            const naZonaY = pos.clientY > fimTelaY - 150;

            if (naZonaX && naZonaY) {
                if (!timerDeletar) {
                    
                    janela.style.filter = "drop-shadow(0px 0px 10px rgba(255,0,0,0.8))";

                    timerDeletar = setTimeout(() => {
                        janela.style.display = 'none'; 
                        parar();
                    }, 2000);
                }
            } else {
                if (timerDeletar) {
                    clearTimeout(timerDeletar);
                    timerDeletar = null;
                    janela.style.filter = "none";
                    janela.style.opacity = "1";
                }
            }
        }
    }

    function iniciar(e) {
        const pos = getPos(e);
        arrastou=false;

        zIndexAtual++;
        janela.style.zIndex = zIndexAtual;
        
        offsetX = pos.clientX - janela.offsetLeft;
        offsetY = pos.clientY - janela.offsetTop;

        window.addEventListener('mousemove', mover);
        window.addEventListener('touchmove', mover);
    }

    function parar() {
        window.removeEventListener('mousemove', mover);
        window.removeEventListener('touchmove', mover);

        arrastou=false;

        if (timerDeletar) {
            clearTimeout(timerDeletar);
            timerDeletar = null;
            janela.style.filter = "none";
            janela.style.opacity = "1";
        }
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
tornarArrastavel(janelaPesquisa);
tornarArrastavel(janelaMusica);
tornarArrastavel(janelaJogo);
tornarArrastavel(janelaPintar);
tornarArrastavel(janelaPiada);

tornarArrastavel(btnCalc); 
tornarArrastavel(btnClima);
tornarArrastavel(btnNotas);
tornarArrastavel(btnMensagem);
tornarArrastavel(btnPesquisar);
tornarArrastavel(btnMusica);
tornarArrastavel(btnJogo);
tornarArrastavel(btnPintar);
tornarArrastavel(btnPiada);
tornarArrastavel(btnDps);

// tela de carregamento
window.addEventListener('load', () => {
    const telaCarregamento = document.getElementById('tela-carregamento');
    const containerBolinhas = document.querySelector('.container-bolinhas');

    setTimeout(() => {
        containerBolinhas.classList.add('juntar');
    }, 1000);

    setTimeout(() => {
        telaCarregamento.classList.add('escurecer');
    }, 3000);

    setTimeout(() => {
        telaCarregamento.style.opacity = '0';
    }, 4200);

    setTimeout(() => {
        telaCarregamento.style.display = 'none';
    }, 5200);
});

//jogo
let number;
let attempts;

function newG() {
    number = Math.floor(Math.random() * 1000) + 1;
    attempts = 0;
    document.getElementById("result").textContent = "";
    document.getElementById("attempts").textContent = "";
    document.getElementById("guess").value = "";
    document.getElementById("guess").disabled = false;
    document.getElementById("guessButton").style.display = "inline-block";
    document.getElementById("newGameButton").style.display = "none";
}

function check() {
    let guess = Number(document.getElementById("guess").value);

    if (guess < 1 || guess > 1000) {
        document.getElementById("result").textContent = "Serious?";
        return;
    }

    attempts = attempts + 1;

    if (guess < number) {
        document.getElementById("result").textContent = "Higher";
    } else if (guess > number) {
        document.getElementById("result").textContent = "Lower";
    } else {
        document.getElementById("result").textContent = "Correct!!!";
        document.getElementById("attempts").textContent = "Attempts: " + attempts;

        document.getElementById("guessButton").style.display = "none";
        document.getElementById("newGameButton").style.display = "inline-block";
        document.getElementById("guess").disabled = true;
    }
}

document.getElementById("guess").onkeydown = function(event) {
    if (event.key === "Enter") {
        check();
    }
};

newG();

//paint
const canvasPintar = document.getElementById('canvas-pintar');
const ctxPintar = canvasPintar.getContext('2d');
const btnLimparPintar = document.getElementById('btn-limpar-pintar');

let pintando = false;

function ajustarCanvas() {
    canvasPintar.width = canvasPintar.clientWidth;
    canvasPintar.height = canvasPintar.clientHeight;
}

canvasPintar.addEventListener('pointerdown', function(e) {
    pintando = true;

    ctxPintar.beginPath();
    ctxPintar.moveTo(e.offsetX, e.offsetY);
});

canvasPintar.addEventListener('pointermove', function(e) {
    if (!pintando) return;

    ctxPintar.lineTo(e.offsetX, e.offsetY);
    ctxPintar.strokeStyle = 'rgb(92, 63, 255)';
    ctxPintar.lineWidth = 1;
    ctxPintar.lineCap = 'round';
    ctxPintar.stroke();
});

canvasPintar.addEventListener('pointerup', function() {
    pintando = false;
});

canvasPintar.addEventListener('pointercancel', function() {
    pintando = false;
});

btnLimparPintar.addEventListener('click', function() {
    ctxPintar.clearRect( 0,0,
        canvasPintar.width,
        canvasPintar.height );
});

//piadas
const btnGerarPiada = document.getElementById('btn-gerar-piada');
const frases = [
    "What do you call cheese that isn’t yours? Nacho cheese.",
    "There are 10 types of people: those who understand binary, and those who don't.",
    "What do you call fake spaghetti? An impasta.",
    "Did you hear about the worst zoo in the world? It only has one dog. It's a real shih tzu.",
    "Ctrl + Z is the greatest invention in human history.",
    "Why should you knock on your refrigerator door before opening it? There may be salad dressing in there."
];

btnGerarPiada.innerText = "Click to read a joke";

btnGerarPiada.addEventListener('click', () => {
    const sorteio = frases[Math.floor(Math.random() * frases.length)];
    btnGerarPiada.innerText = sorteio;
});