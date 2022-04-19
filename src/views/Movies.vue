<template>
    <body>
        <div class="container">
            <h1>Movies</h1>
            <v-carousel class="carrosel" height="600" hide-delimiters>
                <v-carousel-item class="item-car"
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                ></v-carousel-item>
            </v-carousel>
            <h1>Spin Off's</h1>
          <div class="spn">
            <div class="posters">
              <img class="img2" src="../assets/Poster 1.jpg" alt="">
              <img class="img2" src="../assets/poster 2.jpg" alt="">
              <img class="img2" src="../assets/Poster 3.png" alt="">
            </div>
          </div>
        </div>
    </body>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://images8.alphacoders.com/113/thumb-1920-1130048.jpg',
          },
          {
            src: 'https://wallpaperaccess.com/full/4226925.jpg',
          },
          {
            src: 'https://images2.alphacoders.com/113/1130060.jpg',
          },
          {
            src: 'https://images5.alphacoders.com/113/thumb-1920-1130065.jpg',
          },
          {
            src: 'https://4.bp.blogspot.com/-2o1D7e0DTRg/UpPQzrdb5YI/AAAAAAAAOQY/n4DMsJ3mCOM/s1600/wallpaper-odf-54-1280x1024.jpg',
          },
          {
            src: 'https://wallpapercave.com/wp/wp2291342.jpg',
          },
          {
            src: 'https://wallpaper.dog/large/17245982.jpg',
          },
          {
            src: 'https://images3.alphacoders.com/144/thumb-1920-144759.jpg',
          },
        ],
      }
    },
  }
</script>

<style scoped>
*{
    padding: 0;
    margin: 0;
    list-style: none;
    text-decoration: none;
}

img{
  display: block;
}

body{
    background: url('../assets/bg-movies.jpg') no-repeat center fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    text-align: center;
}

.carrosel{
    width: 1100px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    border: 2px solid white;
}

.container{
    background: black;
    max-width: 1200px;
    text-align: center;
    
}

.container h1{
  font-family: 'Bitter', serif;
  text-transform: uppercase;
  color: white;
  margin: 10px 0;
}

.spn{
    background: black;
    width: 1100px;
    border: 2px solid white;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    margin: 10px;
}

.posters{
  display: flex;
  justify-content: space-between;
}

.img2{
  width: 330px;
  height: 500px;
  margin: 10px 10px;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease-out;
}

.img2:hover{
  opacity: 1;
  transform: scale(1.03);
}

</style>