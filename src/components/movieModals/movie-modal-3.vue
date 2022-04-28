<template>
    <div class="modal">
            <h2>Harry Potter e o Prisioneiro de Azkaban</h2>

        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" src="https://www.youtube.com/embed/V_JtCbmkPA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Release Date: 2004</h3></v-col>
                    <v-col col="6"><h3>Director: Alfonso Cuarón</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Box office: 797,4 milhões USD</h3></v-col>
                    <v-col col="6"><h3>Score (Imdb): 7,9 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopsis</h2>
                         <h3>É o início do terceiro ano na escola de bruxaria Hogwarts. Harry, Ron e Hermione têm muito o que aprender. Mas uma ameaça ronda a escola e ela se chama Sirius Black. Após doze anos encarcerado na prisão de Azkaban, ele consegue escapar e volta para vingar seu mestre, Lord Voldemort. Para piorar, os Dementores, guardas supostamente enviados para proteger Hogwarts e seguir os passos de Black, parecem ser ameaças ainda mais perigosas.<br>
                         <a target="_blank" href="https://en.wikipedia.org/wiki/Fantastic_Beasts:_The_Secrets_of_Dumbledore">
                              <v-btn class="mt-3">Read more</v-btn> 
                        </a>
                         </h3>
                    </div>

        </div>

                              <h2>Iconic moments</h2>
        <div class="part2">
            <div class="momento">
                <div><h2>"Boa não, Brilhante"</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/bqXoylx68I1WfylxuN" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>Logo depois de Harry chegar a horgwarts nós temos a apresentação do Hipogrifo "Bicuço" que acaba bicando o Draco, então o pai de Draco, Lúcio, não gostou nada disso e fez o que pode para sacrificar o animal. Depois que utilizam o vira-tempo para tentar concertar as coisas, Hermione encontra Draco feliz ao ver que bicuço ia ser sacrificado e dá um bom soco no garoto e completa com "Essa foi boa" e mais uma vez Rony fala uma de suas frases icônicas "Boa não, Brilhante"
                    </h3>
                </div>
        </div>
        
        <div class="part2">
            <div class="momento">
                <div><h2>Bicuço, sim ele de novo</h2></div>
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
                <div><h2>"Expecto Patronum!" </h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/P5i6ayTplHrsPQSNrm" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3>"Não vem ninguém Harry, vocês estão morrendo..."  Naquele momento Harry entendeu, ele salvou a si mesmo no lago. O terceiro filme da franquia é um dos mais confusos, frenéticos e injustiçados (Mas com certeza um dos melhores) filmes da saga. E foi o filme que deixou marcado o feitiço do patrono, o feitiço mais icônico dentre os outros, uma magia avançada que repele os dementadores, Lupin ensinou essa magia ao Harry que dominou com certa facilidade, provando ser um ótimo bruxo.
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