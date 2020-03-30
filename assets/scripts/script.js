let placar0,placar1,cartaoPedra,cartaoPapel,cartaoTesoura,numeroAleatorio,cartaoMaquina,modal,modalTitulo,modalBotao;

placar0 = document.querySelector('.placar__pontos-0');
placar1 = document.querySelector('.placar__pontos-1');
cartaoPedra = document.querySelector('.pedra');
cartaoPapel = document.querySelector('.papel');
cartaoTesoura = document.querySelector('.tesoura');
cartaoMaquina = document.querySelector('.maquina__escolha');
modal = document.querySelector('.modal');
modalTitulo = document.querySelector('.modal__titulo');
modalBotao = document.querySelector('.modal__botao');

placar = [0,0];

function cartoesInativos() {
    cartaoPedra.style.pointerEvents = 'none';
    cartaoPapel.style.pointerEvents = 'none';
    cartaoTesoura.style.pointerEvents = 'none';
}

function cartoesAtivos() {
    cartaoPedra.style.pointerEvents = 'initial';
    cartaoPapel.style.pointerEvents = 'initial';
    cartaoTesoura.style.pointerEvents = 'initial';
}

function conferePlacar() {
    if(placar.includes(5)) {
        if(placar[0]===5) {
            modalTitulo.innerHTML = "Boa cabeça de urso!<br>Você venceu.";
            placar = [0,0];
            placar0.textContent = placar[0];
            placar1.textContent = placar[1];
        } else if(placar[1]===5) {
            modalTitulo.innerHTML = "Maquina venceu!<br>he-he-he";
            placar = [0,0];
            placar0.textContent = placar[0];
            placar1.textContent = placar[1];
        };
    };
}

modalBotao.addEventListener('click',function() {
    modal.classList.toggle('ativo');
    cartaoMaquina.classList.remove('ativo');
    cartaoPedra.classList.remove('ativo');
    cartaoPapel.classList.remove('ativo');
    cartaoTesoura.classList.remove('ativo');
    cartaoMaquina.style.backgroundImage = "url(assets/images/icon.svg)";
    modalBotao.style.pointerEvents = "none";
    cartoesAtivos();
})

cartaoPedra.addEventListener('click',function() {
    numeroAleatorio = Math.floor(Math.random()*3+1);
    cartaoMaquina.classList.toggle('ativo');
    cartaoPedra.classList.toggle('ativo');
    cartaoPapel.classList.remove('ativo');
    cartaoTesoura.classList.remove('ativo');
    modalBotao.style.pointerEvents = "initial";
    if(numeroAleatorio === 1) {
        cartaoMaquina.style.backgroundImage = "url(assets/images/pedra.jpg)";
        modal.classList.toggle('ativo');
        cartoesInativos();
        modalTitulo.textContent = 'Empate';
    } else if(numeroAleatorio === 2) {
        cartaoMaquina.style.backgroundImage = "url(assets/images/papel.jpg)";
        modal.classList.toggle('ativo');
        cartoesInativos();
        modalTitulo.textContent = 'Maquina ganhou';
        placar[1] += 1;
        placar1.textContent = placar[1];
    } else {
        cartaoMaquina.style.backgroundImage = "url(assets/images/tesoura.jpg)";
        modal.classList.toggle('ativo');
        cartoesInativos();
        modalTitulo.textContent = 'Humano ganhou';
        placar[0] += 1;
        placar0.textContent = placar[0];
    }
    conferePlacar();
})
cartaoPapel.addEventListener('click',function() {
    numeroAleatorio = Math.floor(Math.random()*3+1);
    cartaoMaquina.classList.toggle('ativo');
    cartaoPapel.classList.toggle('ativo');
    cartaoPedra.classList.remove('ativo');
    cartaoTesoura.classList.remove('ativo');
    modalBotao.style.pointerEvents = "initial";
    if(numeroAleatorio === 1) {
        cartaoMaquina.style.backgroundImage = "url(assets/images/pedra.jpg)";
        modal.classList.toggle('ativo');
        cartoesInativos();
        modalTitulo.textContent = 'Humano ganhou';
        placar[0] += 1;
        placar0.textContent = placar[0];
    } else if(numeroAleatorio === 2) {
        cartaoMaquina.style.backgroundImage = "url(assets/images/papel.jpg)";
        modal.classList.toggle('ativo');
        cartoesInativos();
        modalTitulo.textContent = 'Empate';
    } else {
        cartaoMaquina.style.backgroundImage = "url(assets/images/tesoura.jpg)";
        modal.classList.toggle('ativo');
        cartoesInativos();
        modalTitulo.textContent = 'Maquina ganhou';
        placar[1] += 1;
        placar1.textContent = placar[1];
    }
    conferePlacar()
})
cartaoTesoura.addEventListener('click',function() {
    numeroAleatorio = Math.floor(Math.random()*3+1);
    cartaoMaquina.classList.toggle('ativo');
    cartaoTesoura.classList.toggle('ativo');
    cartaoPedra.classList.remove('ativo');
    cartaoPapel.classList.remove('ativo');
    modalBotao.style.pointerEvents = "initial";
    if(numeroAleatorio === 1) {
        cartaoMaquina.style.backgroundImage = "url(assets/images/pedra.jpg)";
        modal.classList.toggle('ativo');
        cartoesInativos();
        modalTitulo.textContent = 'Maquina ganhou';
        placar[1] += 1;
        placar1.textContent = placar[1];
    } else if(numeroAleatorio === 2) {
        cartaoMaquina.style.backgroundImage = "url(assets/images/papel.jpg)";
        modal.classList.toggle('ativo');
        cartoesInativos();
        modalTitulo.textContent = 'Humano ganhou';
        placar[0] += 1;
        placar0.textContent = placar[0];
    } else {
        cartaoMaquina.style.backgroundImage = "url(assets/images/tesoura.jpg)";
        modal.classList.toggle('ativo');
        cartoesInativos();
        modalTitulo.textContent = 'Empate';
    }
    conferePlacar();
})