document.addEventListener('DOMContentLoaded', () => {
    let sorteio = [
        {"id": 108, "empresa": "SOL DO NORDESTE", "nome": "JOSENILDO VITORINO DOS SANTOS"},
        {"id": 109, "empresa": "TEC SOLAR", "nome": "GILSON COSTA DA SILVA"},
        {"id": 110, "empresa": "RC SOLAR", "nome": "JOSE FERNANDO DAGNOME FIGUEIREDO"},
        {"id": 111, "empresa": "RAIO SOLAR", "nome": "CICERA DA SILVA RAMOS"},
        {"id": 112, "empresa": "DAY SOL", "nome": "NAIARA CRISTINA DOS SANTOS"},
        {"id": 113, "empresa": "J.O EMP", "nome": "MARIA DAS DORES DE PAIVA DE MOURA"},
        {"id": 114, "empresa": "VNET", "nome": "VALDILENE LOPES MACENA - PROJETO MONOFASICO"},
        {"id": 115, "empresa": "VNET", "nome": "VALDILENE LOPES MACENA - PROJETO TRIFASICO"},
        {"id": 116, "empresa": "DAY SOL", "nome": "KIARA CHRISTINE SOARES COSTA"},
        {"id": 117, "empresa": "THIAGO CERQUEIRA", "nome": "R CERQUEIRA PLASTICOS"},
        {"id": 118, "empresa": "VNET", "nome": "ROSALICE DAMIAO DA SILVA"},
        {"id": 119, "empresa": "PARAISO", "nome": "JOEL SOARES GOMES"},
        {"id": 120, "empresa": "TEC SOLAR", "nome": "ADELMIRA ACIOLE"},
        {"id": 121, "empresa": "MODULO ENERG", "nome": "EDUARDO RUFINO DE SOUZA"},
        {"id": 122, "empresa": "RAIO SOLAR", "nome": "ADALTO TENORIO DOS SANTOS"},
        {"id": 123, "empresa": "MODULO ENERG", "nome": "MARIA EDINALVA DA SILVA RIBEIRO"},
        {"id": 124, "empresa": "RC SOLAR", "nome": "IVAN FURTADO DE CARVALHO"},
        {"id": 125, "empresa": "ECO POWER", "nome": "JAILSON CLEMENTE DA SILVA"},
        {"id": 126, "empresa": "MB SOLUÇÕES", "nome": "SYLVIA DE OLIVEIRA FERREIRA"},
        {"id": 127, "empresa": "MB SOLUÇÕES", "nome": "THAIZ CRISTINA DE OLIVEIRA"},
        {"id": 128, "empresa": "DAY SOL", "nome": "EVANDRO BRUNO DE ARAUJO BARBOSA JUNIOR"},
        {"id": 129, "empresa": "MODULO ENERG", "nome": "ADRIANA ROSIANE DOS SANTOS"},
        {"id": 130, "empresa": "VNET", "nome": "RAFAEL SALGADO DANYALGIL"}
    ];

    let sortear = document.getElementById('sortear');
    sortear.addEventListener('click', () => {
        let countdown = document.getElementById('countdown');
        let sorteadoDiv = document.getElementById('sorteado');
        let confettiCanvas = document.getElementById('confetti-canvas');
        let celebrationSound = document.getElementById('celebration-sound');
        let music = document.getElementById('music');

        // Exibe a contagem regressiva
        countdown.style.display = 'block';
        sorteadoDiv.style.display = 'none';

        let count = 5;
        countdown.innerHTML = count;

        let countdownInterval = setInterval(() => {
            count--;
            countdown.innerHTML = count;
            if (count === 0) {
                clearInterval(countdownInterval);

                // Gera um número inteiro aleatório entre 108 e 130
                let numeroAleatorio = Math.floor(Math.random() * (130 - 108 + 1)) + 108;

                // Encontra o objeto correspondente ao número aleatório
                let sorteado = sorteio.find(item => item.id === numeroAleatorio);

                if (sorteado) {
                    let nome = sorteado.nome;
                    let id = sorteado.id;
                    let empresa = sorteado.empresa;
                    sorteadoDiv.innerHTML = `
                        <h1>Nome: ${nome}</h1>
                        <div id="idemp">
                            <h2>ID: ${id}</h2>
                            <h3>Empresa: ${empresa}</h3>
                        </div>
                    `;

                    // Inicia a animação de confetes e o som de celebração
                    confettiCanvas.style.display = 'block';
                    celebrationSound.play();
                    setTimeout(() => {
                        music.play()
                    }, 4000);
                    startConfetti();
                    setTimeout(() => {
                        stopConfetti();
                        confettiCanvas.style.display = 'none';
                    }, 5000); // Duração da animação de confetes (5 segundos)
                } else {
                    sorteadoDiv.innerHTML = "Nenhum sorteado encontrado para o número: " + numeroAleatorio;
                }

                // Oculta a contagem regressiva e exibe o resultado
                countdown.style.display = 'none';
                sorteadoDiv.style.display = 'block';
            }
        }, 1000); // Intervalo de 1 segundo para a contagem regressiva
    });

    // Funções para iniciar e parar a animação de confetes
    function startConfetti() {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 1.0 } // Confetes saindo da base da tela
        });
    }

    function stopConfetti() {
        confetti.reset();
    }
});
