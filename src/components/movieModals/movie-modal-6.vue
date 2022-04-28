<template>
    <div class="modal">
            <h2>Harry Potter e o Enigma do Principe</h2>

        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" src="https://www.youtube.com/embed/O5FS59Mos8M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Release Date: 2009</h3></v-col>
                    <v-col col="6"><h3>Director: David Yates</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Box office: 934,5 milhões USD </h3></v-col>
                    <v-col col="6"><h3>Score (Imdb): 7,6 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopsis</h2>
                         <h3>No sexto ano de Harry em Hogwarts, Lord Voldemort e seus Comensais da Morte estão criando o terror nos mundos bruxo e trouxa. Dumbledore convence seu velho amigo Horácio Slughorn para retornar a Hogwarts como professor de poções após Harry encontrar um estranho livro escolar. Draco Malfoy se esforça para realizar uma ação destinada por Voldemort, enquanto Dumbledore e Harry secretamente trabalham juntos a fim de descobrir o método para destruir o Lorde das Trevas uma vez por todas. <br>
                         <a target="_blank" href="https://en.wikipedia.org/wiki/Fantastic_Beasts:_The_Secrets_of_Dumbledore">
                              <v-btn class="mt-3">Read more</v-btn> 
                        </a>
                         </h3>
                    </div>

        </div>

     <h2>Iconic moments</h2>
        <div class="part2">
            <div class="momento">
                <div><h2>Poção do desespero</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/BS6Izv1BKW04iYNXcD" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias quia molestiae iste quam earum. Unde quo tempore nemo officiis sit id quos provident error, earum nisi debitis repudiandae. Assumenda, culpa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea exercitationem itaque, nobis, quisquam quae magni error quidem deserunt esse quas, repudiandae animi iste iusto. Similique accusamus eos ab tempora nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur amet voluptas voluptatum labore beatae at recusandae eveniet autem, nobis distinctio magnam? Sequi, cupiditate illo corrupti neque quibusdam provident laboriosam.
                    </h3>
                </div>
        </div>
        
        <div class="part2">
            <div class="momento">
                <div><h2>A quase morte de Draco Malfoy</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed//fj5laDbAjnRUfWRelh" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>Não é novidade pra ninguém que essa incrível criatura do mundo de Harry Potter é muito importante para o filme, então não tem como não reservar um espaço nessa lista para falar exclusivamente de uma das melhores cenas da franquia Harry Potter. O momento em que Harry voa com bicuço ficou marcado como um dos mais felizes de Harry (levando em conta que depois desse filme as coisas ficam cada vez mais sérias e somrbias, da pra entender) e por isso o Bicuço está aqui novamente, marcando bastante essa lista. </h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>"Expecto Patronum!" nesse dia</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/HiwBI2moqmfe6MKDvQ" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>A Poção Polissuco é fundamental em toda a trama de Harry Potter, mas ela foi apresentada pela primeira vez neste filme quando Hermione faz a mistura para permitir que o trio possa bisbilhotar a Sonserina. Vê-los sentados no banheiro, trabalhando sobre um caldeirão borbulhante, é uma cena que traz à mente estereótipos de bruxas e bruxos – da melhor maneira possível.
                    Só que ela não esperava que o fio de cabelo que ela pegou pra ela na verdade era um pelo de gato, e bem, a poção polissuco não foi feita pra isso. E o resultado? Hermione virou uma espécie de gato humanoide (os furrys adoram -erik).
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