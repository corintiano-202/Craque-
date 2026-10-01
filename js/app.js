const telaInicial = document.querySelector(".hero");

const botaoNovoJogo = document.querySelector(".primary");

botaoNovoJogo.addEventListener("click", () => {
    telaInicial.innerHTML = `
        <div class="game-screen">

            <h2>NOVO JOGO</h2>

            <p>Como você quer começar sua carreira?</p>

            <div class="career-options">

                <button class="career-button" id="jogador">
                    <span>👤</span>
                    <strong>JOGADOR</strong>
                    <small>Comece sua história dentro de campo.</small>
                </button>

                <button class="career-button" id="treinador">
                    <span>🧑‍💼</span>
                    <strong>TREINADOR</strong>
                    <small>Comece diretamente à beira do campo.</small>
                </button>

            </div>

            <button class="back-button" id="voltar">
                ← VOLTAR
            </button>

        </div>
    `;

    document.querySelector("#voltar").addEventListener("click", voltarInicio);
});

function voltarInicio() {
    location.reload();
}
