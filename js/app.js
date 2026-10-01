const app = document.getElementById("app");
const brand = document.getElementById("brand");


/* =========================
   ROTEAMENTO
========================= */

const screens = {
    home: renderHome,
    newGame: renderNewGame
};

function navigate(screenName) {

    const screen = screens[screenName];

    if (!screen) {
        console.error("Tela não encontrada:", screenName);
        return;
    }

    screen();
}


/* =========================
   TELA INICIAL
========================= */

function renderHome() {

    app.innerHTML = `
        <section class="screen">

            <div class="screen-heading">

                <h1>CRAQUE!!!</h1>

                <p>
                    Sua carreira começa aqui.
                </p>

            </div>


            <div class="menu">

                <button class="option" id="new-game">

                    <div class="option-content">

                        <span class="option-title">
                            NOVO JOGO
                        </span>

                        <span class="option-description">
                            Comece uma nova carreira.
                        </span>

                    </div>

                </button>


                <button class="option" id="continue-game">

                    <div class="option-content">

                        <span class="option-title">
                            CONTINUAR
                        </span>

                        <span class="option-description">
                            Continue uma carreira existente.
                        </span>

                    </div>

                </button>


                <button class="option" id="settings">

                    <div class="option-content">

                        <span class="option-title">
                            CONFIGURAÇÕES
                        </span>

                        <span class="option-description">
                            Personalize sua experiência.
                        </span>

                    </div>

                </button>

            </div>

        </section>
    `;


    document
        .getElementById("new-game")
        .addEventListener("click", () => {
            navigate("newGame");
        });
}


/* =========================
   NOVO JOGO
========================= */

function renderNewGame() {

    app.innerHTML = `
        <section class="screen">

            <div class="screen-heading">

                <h1>NOVO JOGO</h1>

                <p>
                    Escolha como sua carreira começa.
                </p>

            </div>


            <div class="menu">

                <button class="option" id="player-mode">

                    <div class="option-content">

                        <span class="option-title">
                            JOGADOR
                        </span>

                        <span class="option-description">
                            Comece dentro do campo.
                        </span>

                    </div>

                </button>


                <button class="option" id="manager-mode">

                    <div class="option-content">

                        <span class="option-title">
                            TREINADOR
                        </span>

                        <span class="option-description">
                            Comece à beira do campo.
                        </span>

                    </div>

                </button>

            </div>


            <button class="back" id="back-home">
                VOLTAR
            </button>

        </section>
    `;


    document
        .getElementById("back-home")
        .addEventListener("click", () => {
            navigate("home");
        });


    document
        .getElementById("player-mode")
        .addEventListener("click", () => {
            console.log("Modo jogador selecionado.");
        });


    document
        .getElementById("manager-mode")
        .addEventListener("click", () => {
            console.log("Modo treinador selecionado.");
        });
}


/* =========================
   LOGO
========================= */

brand.addEventListener("click", (event) => {

    event.preventDefault();

    navigate("home");
});


/* =========================
   INÍCIO
========================= */

navigate("home");
