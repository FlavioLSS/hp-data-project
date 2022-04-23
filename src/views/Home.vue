<template>
  <div class="home">
      <video class="video-wrapper" autoplay loop muted>
        <source src="../assets/video/hero.mp4" type="video/mp4" />
      </video>
      <div class="text-box-1">
        <v-row>
          <v-col cols="5">
            <h1>Explore the mysteries <br> inside the old Hogwarts</h1>
            <h2>Avaiable in all platforms</h2>
            <p>Hogwarts Legacy is an immersive, open-world action RPG set in the world first introduced in the Harry Potter books. For the first time, experience Hogwarts in the 1800s. Your character is a student who holds the key to an ancient secret that threatens to tear the wizarding world apart.</p>
            <v-row class="ml-4 mt-13">
              <v-col cols="3">
                <v-btn color="success">BUY NOW</v-btn>
              </v-col>
              <v-col cols="3">
                <v-btn color="error">WATCH GAMEPLAY ▶</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="7">
            <div class="youtube-container">
              <iframe class="trailer-v" src="https://www.youtube.com/embed/1O6Qstncpnc?rel=0&amp;controls=0&amp;modestbranding=1&amp;autoplay=1&amp;playlist=1O6Qstncpnc&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt-16 mb-16 pb-8 pt-8">
          <v-col class="d-flex justify-center">
            <img src="../assets/potter-line.png" width="600">
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5">
            <h1>Fantastic Beasts <br> Secrets of dumbledore</h1>
            <h2>Avaiable on theaters</h2>
            <p>Professor Albus Dumbledore knows the powerful Dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts Magizoologist Newt Scamander to lead an intrepid team of wizards, witches and one brave Muggle baker.</p>
            <v-row class="ml-4 mt-13">
              <v-col cols="4">
                <v-btn color="primary">FAN'S RATINGS</v-btn>
              </v-col>
              <v-col cols="3">
                <v-btn color="error">WATCH TRAILER ▶</v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="7">
            <div class="youtube-container">
              <iframe class="trailer-v" src="https://www.youtube.com/embed/Y9dr2zw-TXQ?rel=0&amp;controls=0&amp;modestbranding=1&amp;autoplay=1&amp;playlist=Y9dr2zw-TXQ&mute=1&loop=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </v-col>
        </v-row>
      </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>
<style scoped>
.home{
  background:black;
  width: 100%;
  display: flex;
  justify-content: center;
}

.video-wrapper{
  opacity: .4;
  height: 1250px;
}

.text-box-1{
  position: absolute;
  z-index: 1;
  color: white;
  background: rgba(0, 0, 0, 0.658);
  width: 1200px;
  height: 1100px;
  margin-top: 2em;
}

.text-box-1 h1{
  margin-top: .5em;
  margin-left: 1em;
  text-transform: uppercase;
  font-family: "Bitter", serif;
}

.text-box-1 h2{
  margin-top: .5em;
  margin-left: 1.3em;
  text-transform: uppercase;
  font-family: "Bitter", serif;
  color: red;
}

.text-box-1 p{
  margin-top: .5em;
  margin-left: 1.9em;
  font-family: "Bitter", serif;
}

.trailer-v{
    margin-top: 1em;
}

.youtube-container {
	overflow: hidden;
	width: 100%;
	aspect-ratio: 16/9;
	pointer-events: none;
  padding-right: 2em;
}

.youtube-container iframe{
		width: 300%;
		height: 100%;
		margin-left: -100%;
}
</style>
