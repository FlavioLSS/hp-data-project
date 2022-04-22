<template>
    <div class="modal">
            <h2>Harry Potter e a Pedra Filosofal</h2>

        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" width="560" height="315" src="https://www.youtube.com/embed/9fIObnIGMlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Release Date: 2001</h3></v-col>
                    <v-col col="6"><h3>Director: Chris Columbus</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Box office: 974,8 milhões USD</h3></v-col>
                    <v-col col="6"><h3>Score (Imdb): 7,6 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopsis</h2>
                         <h3>Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger. <br>
                         <a target="_blank" href="https://pt.wikipedia.org/wiki/Harry_Potter_e_a_Pedra_Filosofal_(filme)">
                              <v-btn class="mt-3">Read more</v-btn> 
                        </a>
                         </h3>
                    </div>

        </div>

                    <h2>Iconic moments</h2>
        <div class="part2">
            <div class="momento">
                <div><h2>É Wingardium Leviosa e não 'Leviosáh'</h2></div>
                <div class="youtube-container">
                    <iframe class="trailer-v2" src="https://www.youtube.com/embed/SSh8XnUmN_I?rel=0&amp;controls=0&amp;modestbranding=1&amp;autoplay=1&amp;playlist=SSh8XnUmN_I&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay" allowfullscreen ></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>Existem algumas cenas de Harry Potter que são marcantes e servem para caracterizar bem os personagens, mas se tem uma cena que com certeza consegue transmitir a personalidade de um personagem perfeitamente é a cena da Hermione dando uma bronca em Rony durante a aula de feitiços. Nessa cena icônica, talvez uma das mais icônicas do cinema, ela tenta ensinar a forma correta de falar o feitiço de levitação e ao mesmo tempo se exibe para Rony, que acaba ficando com raiva, o que leva posteriormente a uma das cenas que mais marcantes dos 3 bruxinhos na qual a Hermione assume a culpa em relação a confusão do troll no banheiro.</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>"Você é um bruxo, Harry!"</h2></div>
                <div class="youtube-container">
                    <iframe class="trailer-v2" preload="auto" src="https://www.youtube.com/embed/lTQhUMNqwqo?rel=0&amp;controls=0&amp;modestbranding=1&amp;autoplay=1&amp;playlist=lTQhUMNqwqo&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay" allowfullscreen ></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>Logo depois do filme começar temos também uma das frases mais importantes do mundo de Harry Potter, dita por Hagrid logo depois dele entrar na casa dos Dursleys, "você é um bruxo, Harry!" a partir desse momento a vida de Harry vira de cabeça pra baixo e começa sua aventura.</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>"Quanto a mim, eu serei o cavalo"</h2></div>
                <div class="youtube-container">
                    <iframe class="trailer-v2" preload="auto" src="https://www.youtube.com/embed/O2PzRv1ICQ8?rel=0&amp;controls=0&amp;modestbranding=1&amp;autoplay=1&amp;playlist=O2PzRv1ICQ8&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; autoplay" allowfullscreen ></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>Talvez essa seja a cena preferida de muita gente, Rony se sacrifica para que Harry e Hermione prossigam em busca da pedra filosofal. "Harry é você que tem que continuar, eu sei disso. Não sou eu e nem a Hermione. é você" depois dessas palavras de confiança no amigo, Rony faz sua jogada e prova mais uma vez o valor de uma amizade verdadeira. </h3>
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
    padding: 10px 0;
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