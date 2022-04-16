<template>
  <div class="home">

      <video class="video-wrapper" autoplay loop muted>
        <source src="../assets/video/dota2.mp4" type="video/mp4" />
      </video>

    <div class="test">
      <h1 class="text-background mb-2">Explore o misterioso</h1>
      <h1 class="text-background">mundo de Hogwarts</h1>
      <v-btn x-large class="mt-5 white--text" color="#00151c">Garanta seu acesso antecipado !</v-btn>
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
  height: 1000px;
  display: flex;
  justify-content: center;
}

.text-background{
  background: #03657d17;
  -webkit-box-shadow: 1px 1px 42px 4px #000000; 
  box-shadow: 1px 1px 42px 4px #000000;
  padding: .1em;
  border-radius: 10px;
  border: none;
  letter-spacing: 5px;
}

.test{
  position: absolute;
  color: white;
  top: 400px;
  right: 900px;
  margin-right: 8em;
}

.test h1{
  font-size: 4rem;
  font-family: "Bitter", serif;
}

.video-wrapper{
  width: 100%;
}
</style>
