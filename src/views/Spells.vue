<template>
  <div class="spells">
    <div class="black-box">
      <v-card class="width-control">
        <v-card-title
          class="white--text text-h5 mt-5"
          style="background: black !important"
        >
          List of spells with details
        </v-card-title>
        <v-row class="pa-4" justify="space-between">
          <v-col cols="5">
            <v-treeview
              :active.sync="active"
              :items="items"
              :load-children="fetchUsers"
              :open.sync="open"
              activatable
              color="#033a4a"
              open-on-click
              transition
              style="
                height: 700px;
                overflow: scroll;
                font-weight: bold;
                font-size: 1.2rem;
                overflow-x: hidden !important;
              "
            >
              <template v-slot:prepend="{ item }">
                <v-icon v-if="!item.children"> mdi-account </v-icon>
              </template>
            </v-treeview>
          </v-col>

          <v-divider vertical></v-divider>

          <v-col
            class="d-flex text-center"
            style="height: 700px; overflow: scroll"
          >
            <v-scroll-y-transition mode="out-in">
              <div
                v-if="!selected"
                class="text-h6 grey--text text--lighten-1 font-weight-light"
                style="align-self: center"
              >
                Select a spell
              </div>
              <v-card
                v-else
                :key="selected.id"
                class="pt-6 mx-auto"
                flat
                dense
                max-width="700"
              >
                <v-card-text>
                  <img
                    style="
                      border: 3px solid black;
                      margin-bottom: 2em;
                      border-radius: 50% !important;
                    "
                    src="https://media.pocketgamer.biz/2018/4/88481/harry-potter-hogwarts-mysteryicon-r225x.jpg"
                    width="200"
                  />
                  <h1>
                    {{ selected.name }}
                  </h1>
                  <div class="mb-8 mt-2">
                    <h2>Type: {{ selected.spell_type }}</h2>
                  </div>
                  <div class="mb-2">
                    <p>
                      Pronunciation:
                      <span class="font-weight-bold special-elite">{{
                        selected.pronunciation
                      }}</span>
                    </p>
                  </div>
                  <div class="subheading">
                    <p>
                      Description:
                      <span class="font-weight-bold special-elite">{{
                        selected.description
                      }}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Mention:
                      <span class="font-weight-bold special-elite">{{
                        selected.mention
                      }}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Etymology:
                      <span class="font-weight-bold special-elite">{{
                        selected.etymology
                      }}</span>
                    </p>
                  </div>
                </v-card-text>
              </v-card>
            </v-scroll-y-transition>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </div>
</template>

<script>
const avatars = [
  "?accessoriesType=Blank&avatarStyle=Circle&clotheColor=PastelGreen&clotheType=ShirtScoopNeck&eyeType=Wink&eyebrowType=UnibrowNatural&facialHairColor=Black&facialHairType=MoustacheMagnum&hairColor=Platinum&mouthType=Concerned&skinColor=Tanned&topType=Turban",
  "?accessoriesType=Sunglasses&avatarStyle=Circle&clotheColor=Gray02&clotheType=ShirtScoopNeck&eyeType=EyeRoll&eyebrowType=RaisedExcited&facialHairColor=Red&facialHairType=BeardMagestic&hairColor=Red&hatColor=White&mouthType=Twinkle&skinColor=DarkBrown&topType=LongHairBun",
  "?accessoriesType=Prescription02&avatarStyle=Circle&clotheColor=Black&clotheType=ShirtVNeck&eyeType=Surprised&eyebrowType=Angry&facialHairColor=Blonde&facialHairType=Blank&hairColor=Blonde&hatColor=PastelOrange&mouthType=Smile&skinColor=Black&topType=LongHairNotTooLong",
  "?accessoriesType=Round&avatarStyle=Circle&clotheColor=PastelOrange&clotheType=Overall&eyeType=Close&eyebrowType=AngryNatural&facialHairColor=Blonde&facialHairType=Blank&graphicType=Pizza&hairColor=Black&hatColor=PastelBlue&mouthType=Serious&skinColor=Light&topType=LongHairBigHair",
  "?accessoriesType=Kurt&avatarStyle=Circle&clotheColor=Gray01&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=Default&facialHairColor=Red&facialHairType=Blank&graphicType=Selena&hairColor=Red&hatColor=Blue02&mouthType=Twinkle&skinColor=Pale&topType=LongHairCurly",
];

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default {
  data: () => ({
    active: [],
    avatar: null,
    open: [],
    users: [],
    users_2: [],
  }),

  computed: {
    items() {
      return [
        {
          name: "Open spells",
          children: this.users,
        },
      ];
    },
    selected() {
      if (!this.active.length) return undefined;

      const id = this.active[0];

      return this.users.find((user) => user.id === id);
    },
  },

  watch: {
    selected: "randomAvatar",
  },

  methods: {
    async fetchUsers(item) {
      // Remove in 6 months and say
      // you've made optimizations! :)
      await pause(15);

      return fetch(
        "https://the-harry-potter-database.herokuapp.com/api/1/spells/all"
      )
        .then((res) => res.json())
        .then((json) => item.children.push(...json))
        .catch((err) => console.warn(err));
    },
    randomAvatar() {
      this.avatar = avatars[Math.floor(Math.random() * avatars.length)];
    },
  },
};
</script>

<style scoped>
p {
  font-size: 1.3rem !important;
  line-height: 35px;
}

.width-control {
  width: 55%;
  margin: 0 auto;
  margin-bottom: 3em;
  opacity: 0.8;
  border-radius: 15px;
}

.spells {
  background: url("https://wallpapercave.com/wp/wp8172866.jpg") no-repeat fixed;
  background-size: cover;
  padding-top: 1em;
  padding-bottom: 1em;
}
</style>
