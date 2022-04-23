<template>
    <div class="modal">
            <h2>Harry Potter: The Deathly Hallows part 2</h2>

        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" src="https://www.youtube.com/embed/mObK5XD8udk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Release Date: 2022</h3></v-col>
                    <v-col col="6"><h3>Director: David Yates</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Box office: 1.342 billions</h3></v-col>
                    <v-col col="6"><h3>Score (Imdb): 6.9 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopsis</h2>
                         <h3>As Harry, Ron, and Hermione race against time and evil to destroy the Horcruxes, they uncover the existence of the three most powerful objects in the wizarding world: the Deathly Hallows. Voldemort's (Ralph Fiennes') power is growing stronger. He now has control over the Ministry of Magic and Hogwarts.<br>
                         <a target="_blank" href="https://en.wikipedia.org/wiki/Fantastic_Beasts:_The_Secrets_of_Dumbledore">
                              <v-btn class="mt-3">Read more</v-btn> 
                        </a>
                         </h3>
                    </div>

        </div>

                    <h2>Iconic moments</h2>
        <div class="part2">
            <div class="momento">
                <div><h2>Potter is alive!</h2></div>
                <div class="youtube-container">
                    <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/aJqkh3kUufcB5Ae4XT" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
                <div class="artigo pt-4">
                    <h3>He decided to sacrifice himself and met Voldemort in the Forbidden Forest, where he was hit with the Killing Curse. Harry appeared to die since he reunited with Dumbledore in a mystical white void, but he was given the choice to come back to life.</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>Neville saves the day</h2></div>
                <div class="youtube-container">
                    <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/2JSt4yLmjBIE8hR3Yp" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
                <div class="artigo pt-4">
                    <h3>The reason the sword killed the snake is because Neville used it to cut off the snake's head . When it pierced the basilisk's head, the sword became infused with venom, which it one of the few things that can destroy a horcrux. Nagini, the snake that Neville killed, was one of Voldemort's horcruxes.</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>The final duel</h2></div>
                <div class="youtube-container">
                    <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/pNTIMsh5YS8qPEraxQ" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
                <div class="artigo pt-4">
                    <h3>Lord Voldemort, the last of his Horcruxes destroyed and mortal once again, was confronted by Harry Potter as the second part of the Battle of Hogwarts progressed. The pair of them faced off in front of all the surviving fighters gathered in the Hall and, after a brief duel, Voldemort was defeated once and for all.</h3>
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