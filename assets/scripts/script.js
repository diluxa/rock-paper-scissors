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

modalBotao.addEventListener('click',function() {
    modal.classList.toggle('ativo');//remove classe .ativo configurada com transform para dar efeito de aparição
    cartaoMaquina.classList.remove('ativo');//remove classe .ativo configurada com transform para dar efeito de rotação
    cartaoPedra.classList.remove('ativo');//remove classe .ativo configurada com transform para dar efeito de rotação
    cartaoPapel.classList.remove('ativo');//remove classe .ativo configurada com transform para dar efeito de rotação
    cartaoTesoura.classList.remove('ativo');//remove classe .ativo configurada com transform para dar efeito de rotação
    cartaoMaquina.style.backgroundImage = "url(assets/images/icon.svg)";
    modalBotao.style.pointerEvents = "none";//retira função de clique do botão
    cartoesAtivos();
})

cartaoPedra.addEventListener('click',function() {
    numeroAleatorio = Math.floor(Math.random()*3+1);
    cartaoMaquina.classList.toggle('ativo');//add classe .ativo configurada com transform para dar efeito de rotação
    cartaoPedra.classList.toggle('ativo');//add classe .ativo configurada com transform para dar efeito de rotação
    cartaoPapel.classList.remove('ativo');//remove classe .ativo das outras cartas
    cartaoTesoura.classList.remove('ativo');//remove classe .ativo das outras cartas
    modalBotao.style.pointerEvents = "initial";//libera função de clique do botao
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
})
cartaoPapel.addEventListener('click',function() {
    numeroAleatorio = Math.floor(Math.random()*3+1);
    cartaoMaquina.classList.toggle('ativo');
    modalBotao.style.pointerEvents = "initial";
    cartaoPapel.classList.toggle('ativo');
    cartaoPedra.classList.remove('ativo');
    cartaoTesoura.classList.remove('ativo');
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
})
cartaoTesoura.addEventListener('click',function() {
    numeroAleatorio = Math.floor(Math.random()*3+1);
    cartaoMaquina.classList.toggle('ativo');
    modalBotao.style.pointerEvents = "initial";
    cartaoTesoura.classList.toggle('ativo');
    cartaoPedra.classList.remove('ativo');
    cartaoPapel.classList.remove('ativo');
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
})