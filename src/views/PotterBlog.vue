<template>
    <div id="potterblog" class="pb-10">
        <h1 class="text-center mt-14 title">Potter Blog</h1>
        <hr>
        <div class="teste">
            <h1 class="sub-title">Fans react to the new Fantastic Beasts movie</h1>
            <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/uflTRbpTMu6gskQqbX" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            <p>Fans seemed to be a little divided between reactions about the new movie. Although it brings a never seems perspective from the old magic world something doenst seem to fit like the old movies did.</p>
            <v-btn class="white--text" color="black" to="/fantasticbeastsarticle">Read more</v-btn>
        </div>
        <div class="teste">
            <h1 class="sub-title">Do we need a Harry Potter Reboot?</h1>
            <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/r9pUmjcRapyEqrrWYq" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            <p>The classic harry potter saga will always have a warm place in our hearts, but when is it time to consider a reboot?</p>
            <v-btn class="white--text" color="black" to="/hprebootarticle">Read more</v-btn>
        </div>
        <div class="teste">
            <h1 class="sub-title">Huge fan hype for the new upcoming game!</h1>
            <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/BZSAM1Jiv6hctUg0ZF" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            <p>The hype just seems to get bigger and bigger as fans begin to show their exciting reactions to the new Harry Potter game.</p>
            <v-btn class="white--text" color="black" to="/hogwartslegacyarticle">Read more</v-btn>
        </div>
    </div>
</template>

<style scoped>
#potterblog{
    background: url('../assets/old-bg-2.jpg') no-repeat fixed;
    background-size: cover;
}

.title{
    font-size: 3rem !important;
    margin-bottom: .6em;
    font-family: 'Special Elite', serif !important;
}

p{
    font-family: 'Special Elite', serif !important;
    font-weight: bold;
    margin-top: 1em;
}

hr{
    width: 5%;
    padding-bottom: .2em;
    background: black;
    margin: 0 auto;
}

.sub-title{
    color: rgba(0, 0, 0, 0.692);
    font-family: 'Special Elite', serif !important;
}

.img-banner{
    width: 100%;
}

.teste{
    max-width: 800px;
    margin: 0 auto;
    padding-top: 3em;
    padding-bottom: 2em;
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