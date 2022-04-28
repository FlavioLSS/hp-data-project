<template>
    <div class="modal">
            <h2>Harry Potter e o Cálice de Fogo</h2>

        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" src="https://www.youtube.com/embed/cVKkL4O60IM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Release Date: 2005</h3></v-col>
                    <v-col col="6"><h3>Director: Mike Newell</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Box office: 896,7 milhões USD</h3></v-col>
                    <v-col col="6"><h3>Score (Imdb): 7,7 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopsis</h2>
                         <h3>Harry retorna para seu quarto ano na Escola de Magia e Bruxaria de Hogwarts, junto com os seus amigos Ron e Hermione. Desta vez, acontece um torneio entre as três maiores escola de magia, com um participante selecionado de cada escola, pelo Cálice de Fogo. O nome de Harry aparece, mesmo não tendo se inscrito, e ele precisa competir. <br>
                         <a target="_blank" href="https://en.wikipedia.org/wiki/Fantastic_Beasts:_The_Secrets_of_Dumbledore">
                              <v-btn class="mt-3">Read more</v-btn> 
                        </a>
                         </h3>
                    </div>

        </div>

     <h2>Iconic moments</h2>
        <div class="part2">
            <div class="momento">
                <div><h2>A escolha dos campeões</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/oQa7RMP3HDuvfKBd15" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>Durante a  seleção dos campeões de cada escola para o torneio tribruxo, houve uma reviravolta gigantesca quando o nome de Harry saiu do cálice de fogo. A expressão de preocupação no rosto de Dumbledore ficou bem clara nesse momento "Você colocou seu nome no cálice de fogo", a partir dai começou mais uma aventura na vida de Harry.
                    </h3>
                </div>
        </div>
        
        <div class="part2">
            <div class="momento">
                <div><h2>Canto dos sereianos</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed//MGxMsB1rGPV9LllI0X" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>Logo depois de "lutar" contra um dragão, Harry recebeu um conselho do Cedrico Diggory que ajudou Harry a desvendar a dica da segunda prova do torneio tribruxo ao levar o ovo dourado para o banheiro dos monitores do quinto andar e então deu um mergulho com o ovo. Claro que a Murta-que-geme não ia deixar a chance passar e ficou atazanando o Harry enquanto isso.</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>"Ele voltou!"</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/vjCqaN7HehT0gtwema" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3> De forma repentina, logo após a morte de Cedrico, Os Comensais da Morte realizam o ritual para reviver Lord Voldemort com o sangue de Harry Potter. E então começa uma nova era nos filmes de Harry Potter.
                    </h3>
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
    margin: 20px 0;
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