<template>
  <div class="home">

      <video class="video-wrapper" autoplay loop muted>
        <source src="../assets/video/dota2.mp4" type="video/mp4" />
      </video>

    <div class="test">
      <h1 class="text-background mb-2">Explore the mysteries</h1>
      <h1 class="text-background">inside the old Hogwarts</h1>
      <div class="text-background text-center d-flex align-center justify-center mt-6">
        <h2 class="white--text">AVAILABLE IN ALL PLATFORMS</h2>
      </div>
      <a target="_blank" href="https://www.hogwartslegacy.com/pt-br"><v-btn x-large class="transparent-btn mt-5 white--text" color="#00151c">Get your early access now!</v-btn></a>
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
  background: #03657db9;
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
  top: 35%;
  right: 45%;
  margin-right: 8em;
}

.test h1{
  font-size: 4rem;
  font-family: "Bitter", serif;
}

h2{
  font-family: "Bitter", serif;
}

.video-wrapper{
  width: 100%;
}

.transparent-btn{
  opacity: .8;
}
</style>
