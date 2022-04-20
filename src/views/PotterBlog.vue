<template>
    <div id="potterblog">
        <h1 class="text-center mt-14 title">Potter Blog</h1>
        <hr>
        <div class="teste">
            <h1 class="sub-title">Fans react to the new Fantastic Beasts movie</h1>
            <div><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jessica-williams-callum-turner-jude-law-fiona-glascott-eddie-redmayne-fantastic-beasts-the-secrets-of-dumbledore-1639477622.jpg?crop=1.00xw:0.847xh;0,0&resize=1200:*" class="img-banner"></div>
            <p>Fans seemed to be a little divided between reactions about the new movie. Although it brings a never seems perspective from the old magic world something doenst seem to fit like the old movies did.</p>
            <v-btn color="primary" to="/fantasticbeastsarticle">Read more</v-btn>
        </div>
        <div class="teste">
            <h1 class="sub-title">People are really hyped about Hogwarts Legacy</h1>
            <div><img src="https://gmedia.playstation.com/is/image/SIEPDC/hogwarts-legacy-screen-04-ps5-en-02oct20?$native$" class="img-banner"></div>
            <p>The new game seems to bring something never seen before on Harry Potter games. A full on RPG experience! The gameplay trailer got everyone by surprise with some amazing details</p>
            <v-btn color="primary" to="/hogwartslegacyarticle">Read more</v-btn>
        </div>
        <div class="teste">
            <h1 class="sub-title">Should we have a Harry Potter saga reboot?</h1>
            <div><img src="https://popeek.com.br/wp-content/uploads/2021/05/9.jpg" class="img-banner"></div>
            <p>The Harry Potter saga will forever live in our hearts. But when is it time to consider a reboot? Nowadays with the astouning marvel movies we can see how the CGI got way more real, how would it affect the Wizard World?</p>
            <v-btn color="primary" to="/hprebootarticle">Read more</v-btn>
        </div>
        <div class="teste">
            <h1 class="sub-title">Did the old harry potter fans enjoy the 3rd fantastic beasts movie?</h1>
            <div><img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jessica-williams-callum-turner-jude-law-fiona-glascott-eddie-redmayne-fantastic-beasts-the-secrets-of-dumbledore-1639477622.jpg?crop=1.00xw:0.847xh;0,0&resize=1200:*" class="img-banner"></div>
            <p>Fans seemed to be a little divided between reactions about the new movie. Although it brings a never seems perspective from the old magic world something doenst seem to fit like the old movies did.</p>
            <v-btn color="primary" to="/brazilianactorarticle">Read more</v-btn>
        </div>
    </div>
</template>

<style scoped>
#potterblog{
    margin-bottom: 8em;
}

.title{
    font-size: 3rem !important;
    margin-bottom: .6em;
    font-family: 'Bitter', serif !important;
}

hr{
    width: 5%;
    padding-bottom: .2em;
    background: black;
    margin: 0 auto;
}

.sub-title{
    color: rgba(0, 0, 0, 0.692);
}

.img-banner{
    width: 100%;
}

.teste{
    max-width: 800px;
    margin: 0 auto;
    padding-top: 3em;
}
</style>