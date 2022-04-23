<template>
    <div class="modal">
            <h2>Fantastic Beasts</h2>

        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" src="https://www.youtube.com/embed/yA7HyhOpC-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Release Date: 2016</h3></v-col>
                    <v-col col="6"><h3>Director: David Yates</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Box office: 812 millions</h3></v-col>
                    <v-col col="6"><h3>Score (Imdb): 7,2 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopsis</h2>
                         <h3>The plot of the first film revolves around Newton Scamander, or commonly known as Newt, a Magizoologist who arrives in New York in December of 1926, to stay for a brief time following a journey around the world to research creatures for his book Fantastic Beasts and Where to Find Them. <br>
                         <a target="_blank" href="https://en.wikipedia.org/wiki/Fantastic_Beasts:_The_Secrets_of_Dumbledore">
                              <v-btn class="mt-3">Read more</v-btn> 
                        </a>
                         </h3>
                    </div>

        </div>

                    <h2>Iconic moments</h2>
        <div class="part2">
            <div class="momento">
                <div><h2>The briefcase</h2></div>
                <div class="youtube-container">
                    <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/ajI2yK6LVHhwPmvg5S" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
                <div class="artigo pt-4">
                    <h3>The Magizoologist Newton Scamander owned a magical briefcase, bewitched with an Undetectable Extension Charm, in which he housed a vast number of magical beasts while he travelled. He could hide the contents from Muggles by flipping a switch on the case</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>Grindelwald's reveal</h2></div>
                <div class="youtube-container">
                    <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/QhF0aQsY70ABZxs8PP" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
                <div class="artigo pt-4">
                    <h3>Gellert Grindelwald (c. 1883 – March 1998) was a Dark Wizard who was considered to be amongst one of the most powerful and notorious wizards of all time, his only superiors being Albus Dumbledore and Lord Voldemort.[11] A student at Durmstrang Institute, Grindelwald was expelled for twisted, dark experiments and near-fatal attacks on students.</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>Jacob says goodbye</h2></div>
                <div class="youtube-container">
                    <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/WgIMh85XtzfmJPSGuk" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
                <div class="artigo pt-4">
                <h3><strong>Was Jacob actually Obliviated?</strong>
                Whatever's buried in the id seeps out and gets buried in his pastries." Further on in his interview, Fogler confirmed that he doesn't necessarily think that Jacob wasn't fully Obliviated, and was actually protected under her magical umbrella as Queenie kissed Jacob..</h3>
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