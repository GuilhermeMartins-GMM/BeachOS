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

//arrastar
function tornarArrastavel(janela){
    const cabeca=janela.querySelector('.janela-cabeca');
    function mover(e){
        const clienteX = e.touches ? e.touches[0].clientX : e.clientX;
        const clienteY = e.touches ? e.touches[0].clientY : e.clientY;

        janela.style.left = clienteX + 'px';
        janela.style.top = clienteY + 'px';
    }

    function iniciar(){
        window.addEventListener('mousemove', mover);
        window.addEventListener('touchmove', mover);
    }

    function parar(){
        window.removeEventListener('mousemove', mover);
        window.removeEventListener('touchmove', mover);
    }

    cabeca.addEventListener('mousedown', iniciar);
    cabeca.addEventListener('touchstart', iniciar);

    window.addEventListener('mouseup', parar);
    window.addEventListener('touchend', parar);
}

tornarArrastavel(janelaCalc);
tornarArrastavel(janelaClima);
tornarArrastavel(janelaNotas);
