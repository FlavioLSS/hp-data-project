<template>
    <body>
      <!-- modal -->
      <div>
        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <v-card>
              <v-toolbar
                dark
                color="#00151C"
              >
                <v-btn
                  icon
                  dark
                  @click="dialog = false"
                >
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title class="text--center">Harry Potter Movies</v-toolbar-title>
              </v-toolbar>
              <movie-modal-1 v-show="modals.modal_1" />
              <movie-modal-2 v-show="modals.modal_2" />
              <movie-modal-3 v-show="modals.modal_3" />
              <movie-modal-4 v-show="modals.modal_4" />
              <movie-modal-5 v-show="modals.modal_5" />
              <movie-modal-6 v-show="modals.modal_6" />
              <movie-modal-7 v-show="modals.modal_7" />
              <movie-modal-8 v-show="modals.modal_8" />
              <movie-modal-9 v-show="modals.modal_9" />
              <movie-modal-10 v-show="modals.modal_10" />
              <movie-modal-11 v-show="modals.modal_11" />
            </v-card>
          </v-dialog>
        </v-row>
      </div>
      <!-- modal -->
        <div class="container mt-10 mb-10">
            <h1>Movies</h1>
            <v-carousel v-model="currentIndex" class="carrosel" height="660" max-width="700">
                <v-carousel-item class="item-car" style="cursor: pointer;"
                @click="openDialog"
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                >
                <div class="overlay"><h2>Click here for <br> more information</h2></div>
                </v-carousel-item>
            </v-carousel>
            <h1>Spin Off's</h1>
          <div class="spn">
            <div class="posters">
              <img @click="openSpinOffs1" class="img2" src="../assets/Poster 1.jpg" alt="">
              <img @click="openSpinOffs2" class="img2" src="../assets/poster 2.jpg" alt="">
              <img @click="openSpinOffs3" class="img2" src="https://bookstr.com/wp-content/uploads/2021/12/fantastic-beasts-secrets-of-dumbledore.jpeg" alt="">
            </div>
          </div>
        </div>
    </body>
</template>

<script>
import movieModal1 from '../components/movieModals/movie-modal-1.vue'
import movieModal2 from '../components/movieModals/movie-modal-2.vue'
import movieModal3 from '../components/movieModals/movie-modal-3.vue'
import movieModal4 from '../components/movieModals/movie-modal-4.vue'
import movieModal5 from '../components/movieModals/movie-modal-5.vue'
import movieModal6 from '../components/movieModals/movie-modal-6.vue'
import movieModal7 from '../components/movieModals/movie-modal-7.vue'
import movieModal8 from '../components/movieModals/movie-modal-8.vue'
import movieModal9 from '../components/movieModals/movie-modal-9.vue'
import movieModal10 from '../components/movieModals/movie-modal-10.vue'
import movieModal11 from '../components/movieModals/movie-modal-11.vue'

  export default {
    components: {
      movieModal1,
      movieModal2,
      movieModal3,
      movieModal4,
      movieModal5,
      movieModal6,
      movieModal7,
      movieModal8,
      movieModal9,
      movieModal10,
      movieModal11,
    },
    data () {
      return {
        dialog: false,
        notifications: false,
        sound: true,
        widgets: false,
        modals: {
          modal_1: false,
          modal_2: false,
          modal_3: false,
          modal_4: false,
          modal_5: false,
          modal_6: false,
          modal_7: false,
          modal_8: false,
          modal_9: false,
          modal_10: false,
          modal_11: false,
        },
        currentIndex: 0,
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
            src: 'https://2.bp.blogspot.com/-EHJoCiKYDrw/UpPL37-7--I/AAAAAAAAOF0/dPChqTIoaWM/s1600/wallpaper-odf-12-1280x1024.jpg',
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
    methods: {
      openDialog(){
        if(this.currentIndex === 0){
          this.dialog = true
          this.modals.modal_11 = false
          this.modals.modal_10 = false
          this.modals.modal_9 = false
          this.modals.modal_8 = false
          this.modals.modal_7 = false
          this.modals.modal_6 = false
          this.modals.modal_5 = false
          this.modals.modal_4 = false
          this.modals.modal_3 = false
          this.modals.modal_2 = false
          this.modals.modal_1 = true
        } else if (this.currentIndex === 1){
          this.dialog = true
          this.modals.modal_11 = false
          this.modals.modal_10 = false
          this.modals.modal_9 = false
          this.modals.modal_8 = false
          this.modals.modal_7 = false
          this.modals.modal_6 = false
          this.modals.modal_5 = false
          this.modals.modal_4 = false
          this.modals.modal_3 = false
          this.modals.modal_2 = true
          this.modals.modal_1 = false
        } else if (this.currentIndex === 2){
          this.dialog = true
          this.modals.modal_11 = false
          this.modals.modal_10 = false
          this.modals.modal_9 = false
          this.modals.modal_8 = false
          this.modals.modal_7 = false
          this.modals.modal_6 = false
          this.modals.modal_5 = false
          this.modals.modal_4 = false
          this.modals.modal_3 = true
          this.modals.modal_2 = false
          this.modals.modal_1 = false
        } else if (this.currentIndex === 3){
          this.dialog = true
          this.modals.modal_11 = false
          this.modals.modal_10 = false
          this.modals.modal_9 = false
          this.modals.modal_8 = false
          this.modals.modal_7 = false
          this.modals.modal_6 = false
          this.modals.modal_5 = false
          this.modals.modal_4 = true
          this.modals.modal_3 = false
          this.modals.modal_2 = false
          this.modals.modal_1 = false
        } else if (this.currentIndex === 4){
          this.dialog = true
          this.modals.modal_11 = false
          this.modals.modal_10 = false
          this.modals.modal_9 = false
          this.modals.modal_8 = false
          this.modals.modal_7 = false
          this.modals.modal_6 = false
          this.modals.modal_5 = true
          this.modals.modal_4 = false
          this.modals.modal_3 = false
          this.modals.modal_2 = false
          this.modals.modal_1 = false
        } else if (this.currentIndex === 5){
          this.dialog = true
          this.modals.modal_11 = false
          this.modals.modal_10 = false
          this.modals.modal_9 = false
          this.modals.modal_8 = false
          this.modals.modal_7 = false
          this.modals.modal_6 = true
          this.modals.modal_5 = false
          this.modals.modal_4 = false
          this.modals.modal_3 = false
          this.modals.modal_2 = false
          this.modals.modal_1 = false
        } else if (this.currentIndex === 6){
          this.dialog = true
          this.modals.modal_11 = false
          this.modals.modal_10 = false
          this.modals.modal_9 = false
          this.modals.modal_8 = false
          this.modals.modal_7 = true
          this.modals.modal_6 = false
          this.modals.modal_5 = false
          this.modals.modal_4 = false
          this.modals.modal_3 = false
          this.modals.modal_2 = false
          this.modals.modal_1 = false
        } else if (this.currentIndex === 7 || this.currentIndex === 0){
          this.dialog = true
          this.modals.modal_11 = false
          this.modals.modal_10 = false
          this.modals.modal_9 = false
          this.modals.modal_8 = true
          this.modals.modal_7 = false
          this.modals.modal_6 = false
          this.modals.modal_5 = false
          this.modals.modal_4 = false
          this.modals.modal_3 = false
          this.modals.modal_2 = false
          this.modals.modal_1 = false
        }
      },
      openSpinOffs1(){
        this.dialog = true
        this.modals.modal_11 = false
        this.modals.modal_10 = false
        this.modals.modal_9 = true
        this.modals.modal_8 = false
        this.modals.modal_7 = false
        this.modals.modal_6 = false
        this.modals.modal_5 = false
        this.modals.modal_4 = false
        this.modals.modal_3 = false
        this.modals.modal_2 = false
        this.modals.modal_1 = false
      }, 
      openSpinOffs2(){
        this.dialog = true
        this.modals.modal_11 = false
        this.modals.modal_10 = true
        this.modals.modal_9 = false
        this.modals.modal_8 = false
        this.modals.modal_7 = false
        this.modals.modal_6 = false
        this.modals.modal_5 = false
        this.modals.modal_4 = false
        this.modals.modal_3 = false
        this.modals.modal_2 = false
        this.modals.modal_1 = false
      }, 
      openSpinOffs3(){
        this.dialog = true
        this.modals.modal_11 = true
        this.modals.modal_10 = false
        this.modals.modal_9 = false
        this.modals.modal_8 = false
        this.modals.modal_7 = false
        this.modals.modal_6 = false
        this.modals.modal_5 = false
        this.modals.modal_4 = false
        this.modals.modal_3 = false
        this.modals.modal_2 = false
        this.modals.modal_1 = false
      }, 
    }
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
    text-align: center;
}

.carrosel{
    width: 1100px;
    position: relative;
    left: 50%;
    transform: translate(-50%);
    border: 2px solid white;
}

item-car{
  position:relative
}

.overlay{
  top: 0;
  left: 0;
  background: black;
  color: white;
  height: 660px;
  width: 1100px;
  opacity: 0;
  transition: 0.3s ease-out;
}

.overlay h2{
  font-family: 'Bitter', serif;
  text-transform: uppercase;
  font-size: 18px;
  position: absolute;
  top: 45%;
  left: 0;
  right: 0;
}

.overlay:hover{
  opacity: 0.5;
}

.container{
    background: rgba(0, 0, 0, 0.726);
    max-width: 1200px;
    text-align: center;
    margin: 0 auto;
    padding-bottom: 1em;
    border-radius: 10px;
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
  width: 340px;
  height: auto;
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