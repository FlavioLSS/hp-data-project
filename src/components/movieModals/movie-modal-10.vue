<template>
    <div class="modal">
            <h2>Fantastic Beasts: Crimes of Grindelwald</h2>
        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" src="https://www.youtube.com/embed/8bYBOVWLNIs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Release Date: 2018</h3></v-col>
                    <v-col col="6"><h3>Director: David Yates</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Box office: 200 millions</h3></v-col>
                    <v-col col="6"><h3>Score (Imdb): 6,5 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopsis</h2>
                         <h3>In an effort to thwart Grindelwald's plans of raising pure-blood wizards to rule over all non-magical beings, Albus Dumbledore enlists his former student Newt Scamander, who agrees to help, though he's unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world. <br>
                         <a target="_blank" href="https://en.wikipedia.org/wiki/Fantastic_Beasts:_The_Secrets_of_Dumbledore">
                              <v-btn class="mt-3">Read more</v-btn> 
                        </a>
                         </h3>
                    </div>

        </div>

                    <h2>Iconic moments</h2>
        <div class="part2">
            <div class="momento">
                <div><h2>Grindelwald kills Leta Lestrange</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/dWsbX5stRWWlkgIHOp" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo pt-4">
                    <h3>At the last moment, this was revealed to be a distraction in an effort to give Theseus, Newt, Tina, Jacob, Yusuf and Nagini time to get away. Leta destroyed Grindelwald's skull hookah with a powerful spell, exploding it and knocking over Vinda Rosier in the process. Right before being incinerated by the flames, she looked at the Scamander brothers and said "I love you", though it is unclear which of them she was speaking to. She told the others to leave before she was engulfed by the flames, which incinerated her.</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>Nagini</h2></div>
                <div class="youtube-container">
                    <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/X0x1nHPuvq6IhdktWQ" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
                <div class="artigo pt-4">
                    <h3>That’s right! Our first ‘gasp’ moment of this trailer reveals that Claudia Kim’s mysterious ‘circus attraction’ character can turn into a snake and is revealed to be called… ‘Nagini’. Well, we’ve heard that name before, haven’t we? Nagini is Voldemort’s loyal snake companion from the Harry Potter books.</h3>
                </div>
        </div>
        <div class="part2">
            <div class="momento">
                <div><h2>Grindelwald escape</h2></div>
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/Dauz31ptzlXh8vcrHW" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
                <div class="artigo pt-4">
                    <h3>Gellert Grindelwald's escape was an early conflict of the global wizarding war and a victory for the Dark Wizard Gellert Grindelwald and his Acolytes. It took place on a stormy night on 30 May 1927, in the skies and surrounding area of New York City, New York, USA, as the International Confederation of Wizards prepared Grindelwald's extradition to Europe.</h3>
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