<template>
    <div class="modal">
            <h2>Harry Potter e a Ordem da Fênix</h2>

        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" src="https://www.youtube.com/embed/ZkDCaxUNV3o" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Release Date: 2007</h3></v-col>
                    <v-col col="6"><h3>Director: David Yates</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Box office: 942,2 milhões USD </h3></v-col>
                    <v-col col="6"><h3>Score (Imdb): 7,5 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopsis</h2>
                         <h3>Após um verão desastroso, Harry volta para o seu quinto ano em Hogwarts, um dos mais difíceis que terá de encarar. Pouquíssimos alunos e pais acreditam nele ou em Dumbledore sobre a volta de Voldemort, e uma série interminável de artigos circula dizendo que eles estão completamente malucos. Ainda por cima, Dolores Umbridge, a nova professora de Defesa Contra as Artes das Trevas, prova ser a pessoa mais repugnante que Harry já conheceu. <br>
                         <a target="_blank" href="https://en.wikipedia.org/wiki/Fantastic_Beasts:_The_Secrets_of_Dumbledore">
                              <v-btn class="mt-3">Read more</v-btn> 
                        </a>
                         </h3>
                    </div>

        </div>

                             <h2>Iconic moments</h2>
        <div class="part2">
            <div class="momento">
                <div><h2>O show dos irmãos welasey's</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/2Kee7LCsz7aYGJR4Mf" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis iste ea at nisi inventore reprehenderit magnam ipsam cum, modi id quibusdam maiores quisquam! Soluta, dicta voluptate vitae alias aliquam distinctio. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores veniam voluptatibus sed perspiciatis libero iure voluptatem sunt animi? Obcaecati facilis molestias illum dolorem reprehenderit voluptatibus quisquam ducimus ut illo reiciendis? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit adipisci autem laboriosam voluptates deleniti in? Veniam accusamus, blanditiis suscipit sint accusantium harum, recusandae odit beatae officiis nulla voluptatem, enim dolore?
                    </h3>
                </div>
        </div>
        
        <div class="part2">
            <div class="momento">
                <div><h2>A morte de almofadinhas</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/MP13j9V7TRpPUMUL5T" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis, ratione aliquam quia fugiat velit ipsam quis tempora necessitatibus excepturi suscipit explicabo facere repudiandae dolores placeat et quos at distinctio reiciendis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique beatae nulla, odit modi voluptate quis sapiente culpa harum dolore quos sint dolor, sequi asperiores repellendus perferendis commodi velit! Dolore, earum! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ducimus quod asperiores. Distinctio nam voluptatibus optio itaque unde quasi, dolores animi nemo totam asperiores dolorum, voluptates odio excepturi, quis voluptatum. </h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>Dumbledore vs. Voldemorte</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/WuHXnCjeY1g2ZDuPTa" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo">
                    <h3> Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius dolore aut sunt laudantium adipisci a nisi. Repellendus ullam dolorem, nobis delectus suscipit ipsa enim aspernatur assumenda, nulla deleniti dicta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, nulla nostrum. Hic totam ipsa, delectus ducimus, minima sit distinctio vel, provident iusto commodi rem esse! Dolores, odit sint! Eius, eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates sapiente nam quod blanditiis, nemo incidunt. Odit, illo dolore doloribus aliquam accusantium esse distinctio eaque, nulla possimus, enim reiciendis voluptas hic?
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