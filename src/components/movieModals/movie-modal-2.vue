<template>
    <div class="modal">
            <h2>Harry Potter e Camara Secreta</h2>

        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" src="https://www.youtube.com/embed/7ZBh_-Aa0Bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Release Date: 2002</h3></v-col>
                    <v-col col="6"><h3>Director: Chris Columbus</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Box office: 879,6 milhões USD</h3></v-col>
                    <v-col col="6"><h3>Score (Imdb): 7,4 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopsis</h2>
                         <h3>Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e começar seu segundo ano na escola de bruxos. Na véspera do início das aulas, a estranha criatura Dobby aparece em seu quarto e o avisa de que voltar é um erro e que algo muito ruim pode acontecer se Harry insistir em continuar os estudos de bruxaria. O garoto, no entanto, está disposto a correr o risco e se livrar do lar problemático. <br>
                         <a target="_blank" href="https://en.wikipedia.org/wiki/Fantastic_Beasts:_The_Secrets_of_Dumbledore">
                              <v-btn class="mt-3">Read more</v-btn> 
                        </a>
                         </h3>
                    </div>

        </div>

                    <h2>Iconic moments</h2>
        <div class="part2">
            <div class="momento">
                <div><h2>O carro voador dos Weasley's</h2></div>
                <div class="youtube-container">
                    <iframe class="trailer-v2" src="https://www.youtube.com/embed/JpHyJkyO1SI?rel=0&amp;controls=0&amp;modestbranding=1&amp;autoplay=1&amp;playlist=JpHyJkyO1SI&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay" allowfullscreen ></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>As cenas inicias do filme são meio pra baixo pelo fato de que Harry estava preso na casa dos Dursley e seus amigos não tinham mandado nenhuma carta (ou era isso que ele achava).
                    mas pra quebrar o clima pesado a cena do Ford voador faz com que lembremos o motivo de assistimos Harry Potter.
                    </h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>Aula de Duelos</h2></div>
                <div class="youtube-container">
                    <iframe class="trailer-v2" src="https://www.youtube.com/embed/EqtfAcvFP90?rel=0&amp;controls=0&amp;modestbranding=1&amp;autoplay=1&amp;playlist=EqtfAcvFP90&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay" allowfullscreen ></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>Gilderoy Lockhart vs. Severus Snape, Harry Potter vs. Draco Malfoy</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>Dumbledore's Plan</h2></div>
                <div class="youtube-container">
                    <iframe class="trailer-v2" src="https://www.youtube.com/embed/6rfsn0xXSrM?rel=0&amp;controls=0&amp;modestbranding=1&amp;autoplay=1&amp;playlist=6rfsn0xXSrM&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay" allowfullscreen ></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>Grindelwald is a Seer - this means he has the ability to see glimpses of the future - and he enhances this by killing the baby Qilin, harnessing its own powers of precognition. Through Dumbledore, Newt conveys this message to the rest of the team: "our best hope is to confuse him" by having several plans instead of one. Furthermore, none of the characters can know the full extent of the plan, as Grindelwald would find a way to use this to his advantage. Dumbledore thus gives every character a separate task (at times intertwining with another's) and watches everyone from afar, ever ready to decide the next move depending on the current situation.</h3>
                </div>
        </div>
              
</div>
    
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

h2{
    color: white;
    font-size: 42px;
    font-family: 'Cinzel Decorative', 'cursive';
    margin: 40px 0;
}

h3{
    color: white;
    font-family: 'Bitter', serif;
    font-weight: normal;
    letter-spacing: 1.5px;
    font-size: 18px;
}

.modal{
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgb(17, 16, 16);
}
.modal h2{
    border-bottom: 2px solid gray;
}
.part1{
    background: rgba(0, 0, 0, 0.870);
    border-radius: 10px;
    width: 1280px;
    display: flex;
}

.sinopse{
    text-align: left;
    max-width: 600px;
}

.sinopse h2{
    font-size: 28px;
    font-family: 'Bitter', serif;
    text-transform: uppercase;
    font-weight: normal;
    border-bottom: 2px solid white;
}

.trailer{
    margin: 20px;
}

.trailer h3{
    text-align: left;
    margin-left: 5px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
}

.trailer-v{
    width: 640px;
    height: 415px;
}

.part2{
    background: rgba(0, 0, 0, 0.870);
    border-radius: 10px;
    width: 1280px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.trailer-v2{
    width: 960px;
    height: 615px;
}

.momento{
    width: 60%;
}

.momento h2{
    font-family: 'Bitter', serif;
    font-size: 32px;
    text-transform: uppercase;
    font-weight: normal;
    border-right: 2px solid white;
    border-left: 2px solid white;
    border-bottom: none;
}

.artigo{
    width: 960px;
    text-align: left;
    margin-bottom: 30px;
}

.youtube-container {
	overflow: hidden;
	width: 100%;
	aspect-ratio: 16/9;
	pointer-events: none;
}

.youtube-container iframe{
		width: 300%;
		height: 100%;
		margin-left: -100%;
}

</style>