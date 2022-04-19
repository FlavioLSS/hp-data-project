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
            src: 'https://images8.alphacoders.com/113/thumb-1920-1130048.jpg',
          },
          {
            src: 'https://images8.alphacoders.com/113/thumb-1920-1130048.jpg',
          },
          {
            src: 'https://images8.alphacoders.com/113/thumb-1920-1130048.jpg',
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

body{
    background: url('../assets/bg-movies.jpg') no-repeat center fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
}

.carrosel{
    width: 1000px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
}

.container{
    background: white;
    position:relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 1400px;
    height: 1000px;
}
</style>