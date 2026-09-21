//relogio
function atualizarRelogio(){
    const agr=new Date();
    const horaFormatada = agr.toLocaleTimeString();
    document.getElementById('relogio').innerText=horaFormatada;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();

/*calculadora
const btnCalc = document.getElementById('btn-calc');
const janelaCalc = document.getElementById('janela-calc');
const fecharCalc = document.getElementById('fechar-calc');

btnCalc.addEventListener('click', function() {
    janelaCalc.style.display = 'block';
});
fecharCalc.addEventListener('click', function() {
    janelaCalc.style.display = 'none';
});
*/

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
    const elementoCidade = document.getElementById('cidade');
    const elementoTemp = document.getElementById('temp-clima');

    try {
        const resposta = await fetch('https://api.open-meteo.com/v1/forecast?latitude=35.6762&longitude=139.6503&current_weather=true');
        const dados = await resposta.json();

        const temperatura = dados.current_weather.temperature;

        elementoCidade.innerText = "Tokyo (Japan)";
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

//pesquisa
const btnPesquisar = document.getElementById('btn-pesquisar');
const janelaPesquisa = document.getElementById('janela-pesquisa');
const fecharPesquisa = document.getElementById('fechar-pesquisa');

const campoPesquisa = document.getElementById('campo-pesquisa');
const btnFazerPesquisa = document.getElementById('btn-fazer-pesquisa');

btnPesquisar.addEventListener('click', function() {
    janelaPesquisa.style.display = 'block';
});
fecharPesquisa.addEventListener('click', function() {
    janelaPesquisa.style.display = 'none';
});

function executarPesquisa() {
    const termo = campoPesquisa.value.trim();
    if (termo !== '') {
        window.open(`https://www.google.com/search?q=${encodeURIComponent(termo)}`, '_blank');
    }
}

btnFazerPesquisa.addEventListener('click', executarPesquisa);

campoPesquisa.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        executarPesquisa();
    }
});

//arrastar
function tornarArrastavel(janela) {
    const cabeca = janela.querySelector('.janela-cabeca') || janela;
    
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

//tornarArrastavel(janelaCalc);
tornarArrastavel(janelaClima);
tornarArrastavel(janelaNotas);
tornarArrastavel(janelaMensagem);
tornarArrastavel(janelaPesquisa);

//tornarArrastavel(btnCalc);
tornarArrastavel(btnClima);
tornarArrastavel(btnNotas);
tornarArrastavel(btnMensagem);
tornarArrastavel(btnPesquisar);

// tela de carregamento
window.addEventListener('load', () => {
    const telaCarregamento = document.getElementById('tela-carregamento');
    const containerBolinhas = document.querySelector('.container-bolinhas');

    setTimeout(() => {
        containerBolinhas.classList.add('juntar');
    }, 2000);

    setTimeout(() => {
        telaCarregamento.style.opacity = '0';
    }, 4000);

    setTimeout(() => {
        telaCarregamento.style.display = 'none';
    }, 5000);
});
