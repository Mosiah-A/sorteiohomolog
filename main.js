document.addEventListener('DOMContentLoaded', () => {
    let sorteio = [
        {"id": 35, "empresa": "MODULO ENERGIA", "nome": "OSVALDO DE MENDONÇA"},
  {"id": 36, "empresa": "SUNLANDON", "nome": "BRUNO ESTEFANY DE MORAES BARBOZA"},
  {"id": 37, "empresa": "MODULO ENERGIA", "nome": "DAVID GOMES FERREIRA"},
  {"id": 38, "empresa": "MODULO ENERGIA", "nome": "JULIO CEZAR ALVES PEREIRA"},
  {"id": 39, "empresa": "ECO STAR", "nome": "AGUINALDO SANTOS CAITETE"},
  {"id": 40, "empresa": "TEC SOLAR", "nome": "TEREZINHA FELIX DO NASCIMENTO"},
  {"id": 41, "empresa": "RC SOLAR", "nome": "JOSE CELIO DOS SANTOS PEREIRA"},
  {"id": 42, "empresa": "TEC SOLAR", "nome": "FRANCISCO FRANCA DA SILVA"},
  {"id": 43, "empresa": "RAIO SOLAR", "nome": "CARLOS EDUARDO RODRIGUES PEREIRA"},
  {"id": 44, "empresa": "RAIO SOLAR", "nome": "MARIA JOSE SANTOS DE SOUZA"},
  {"id": 45, "empresa": "PAULINOS", "nome": "ISAAC JOAQUIM DE SANTANA"},
  {"id": 46, "empresa": "PAULINOS", "nome": "SÔNIA MARIA OLIVEIRA DE MIRANDA SILVA"},
  {"id": 47, "empresa": "SOLARYS", "nome": "ARIELY NASCIMENTO DO VALE LUNA"},
  {"id": 48, "empresa": "GM ENGENHARIA", "nome": "JOSE JORGE FERREIRA DE MELO"},
  {"id": 49, "empresa": "JONATHA", "nome": "HILDETE GONÇALVES DA SILVA"},
  {"id": 50, "empresa": "RC SOLAR", "nome": "AISLAN PEIXOTO PEREIRA"},
  {"id": 51, "empresa": "SOLARYS", "nome": "EDJAN GOMES DE LUNA"},
  {"id": 52, "empresa": "RC SOLAR", "nome": "PAULO DE ALBUQUERQUE SANTIAGO"},
  {"id": 73, "empresa": "EDSON MENDES", "nome": "CLEITON GONÇALVES DA SILVA"},
  {"id": 74, "empresa": "J.O EMP", "nome": "MARIA VANESSA PINTO DA SILVA"},
  {"id": 75, "empresa": "RC SOLAR", "nome": "ULISSES DE BARROS SILVA JUNIOR"},
  {"id": 76, "empresa": "SUNLANDON", "nome": "ELIDA BELTAN TENORIO DE SOUZA"},
  {"id": 77, "empresa": "RAIO SOLAR", "nome": "NANCY RIBEIRO DE CARVALHO DOS SANTOS"},
  {"id": 78, "empresa": "DAY SOL", "nome": "JOSE GENIVALDO DA SILVA"},
  {"id": 79, "empresa": "PARAISO", "nome": "ALVARO DO NASCIMENTO MARINHO"},
  {"id": 80, "empresa": "PAULINOS", "nome": "MARIA APARECIDA FELIX DE OLIVEIRA"},
  {"id": 81, "empresa": "B & R", "nome": "ALISSON RAMOS MARINHO DOS SANTOS"},
  {"id": 82, "empresa": "EDSON MENDES", "nome": "MARCOS INACIO DA SILVA"},
  {"id": 83, "empresa": "FOX ELSON", "nome": "GLAUCIA SUELIR DE FREITAS SANTOS"},
  {"id": 84, "empresa": "OITAVOS SOLAR", "nome": "ADEILDO GOMES RODRIGUES"},
  {"id": 85, "empresa": "TEC SOLAR", "nome": "MARIA APARECIDA GOMES DA SILVA"},
  {"id": 86, "empresa": "MODULO ENERG", "nome": "ENILDO JOSE DA SILVA FILHO"},
  {"id": 87, "empresa": "MODULO ENERG", "nome": "MARIA JOSE SILVA CORREIA"},
  {"id": 88, "empresa": "RC SOLAR", "nome": "MARIA DE LOURDES ANDRADE DOS SANTOS"},
  {"id": 89, "empresa": "DAY SOL", "nome": "JANDERCLEISON DIEGO DE CARVALHO SILVA"},
  {"id": 90, "empresa": "B & R", "nome": "ALEXANDRE JOSE CORREIA"},
  {"id": 91, "empresa": "PARAISO", "nome": "KARINA CRISTINA DA SILVA"},
  {"id": 92, "empresa": "PARAISO", "nome": "JOSE BELARMINO DE ALMEIDA FILHO"},
  {"id": 93, "empresa": "ME.COM@INFO", "nome": "DAVID DE ARAUJO PEREIRA"},
  {"id": 94, "empresa": "DAY SOL", "nome": "MIRONE PORFIRIO DA SILVA"},
  {"id": 95, "empresa": "DAY SOL", "nome": "CARLOS AMARO NEVES DA SILVA"},
  {"id": 96, "empresa": "SOL DO NORDESTE", "nome": "GILVAN REIS DE ALMEIDA JUNIOR"},
  {"id": 97, "empresa": "FX ENERGY", "nome": "MARIA DAS GRAÇAS SANTOS PEREIRA"},
  {"id": 98, "empresa": "EDSON MENDES", "nome": "WYLLAYNY MARIA FERREIRA DE LIMA"},
  {"id": 99, "empresa": "OITAVOS SOLAR", "nome": "CARLA CAROLINE FERREIRA DO NASCIMENTO"},
  {"id": 100, "empresa": "SURK (ME.COM)", "nome": "THAYSA CAROLAYNE PEREIRA DA SILVA"},
  {"id": 101, "empresa": "ECOTEC", "nome": "RICARDO FERNANDO DA SILVA (PROJETO 1)"},
  {"id": 102, "empresa": "ECOTEC", "nome": "RICARDO FERNANDO DA SILVA (PROJETO 2)"},
  {"id": 103, "empresa": "SOLARE PE", "nome": "MARIA DA PENHA LEANDRO SILVA"},
  {"id": 104, "empresa": "SG", "nome": "RIVALDO LIMA DA SILVA"},
  {"id": 105, "empresa": "SG", "nome": "FRANCISCA GENEZIO DE LIMA"},
  {"id": 106, "empresa": "TEC SOLAR", "nome": "ERINEIDE EMILIANO DA SILVA"},
  {"id": 107, "empresa": "FREYTAS", "nome": "FERNANDO DE FREITAS SILVA"},
  {"id": 108, "empresa": "SOL DO NORDESTE", "nome": "OSMARIO DOS SANTOS LIMA"},
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
  {"id": 130, "empresa": "VNET", "nome": "RAFAEL SALGADO DANYALGIL"},
  {"id": 131, "empresa": "SOL DO NORDESTE", "nome": "JOSENILDO VITORINO DOS SANTOS"}
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

                
                let intervalo = Math.random() < 0.5 ? [35, 52] : [73, 131];

                // Gerar o número aleatório dentro do intervalo escolhido
                let numeroAleatorio = Math.floor(Math.random() * (intervalo[1] - intervalo[0] + 1)) + intervalo[0];

                // Encontra o objeto correspondente ao número aleatório
                let sorteado = sorteio.find(item => item.id === numeroAleatorio);

                if (sorteado) {
                    let nome = sorteado.nome;
                    let id = sorteado.id;
                    let empresa = sorteado.empresa;
                    sorteadoDiv.innerHTML = `
                        <h1>Empresa: ${empresa}</h1>
                        <div id="idemp">
                            <h2>ID: ${id}</h2>
                            <h3> ${nome}</h3>
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
