<template>
  <div id="characters">
      <div class="table test">
        <h1 class="text-center white--text mt-8">List of all characters</h1>
        <hr>
        <v-data-table
      :headers="headers"
      :items="hpData"
      :search="search"
      :items-per-page="8"
      :loading="loading"
      :custom-filter="filterOnlyCapsText"
      class="elevation-8 mt-10 table"
      dark
    >
    <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search character"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: true,
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "House", value: "house" },
        { text: "Gender", value: "gender" },
        { text: "Hair colour", value: "hairColour" },
        { text: "Eye colour", value: "eyeColour" },
        { text: "Ancestry", value: "ancestry" },
        { text: "Patronus", value: "patronus" },
        { text: "Species", value: "species" },
        { text: "Actor", value: "actor" },
        { text: "Birth Date", value: "dateOfBirth" },
        { text: "Alternate name", value: "alternate_names" },
        { text: "Wand wood", value: "wand.wood" },
        { text: "Wand core", value: "wand.core" },
      ],
      hpData: [],
    };
  },
  mounted() {
    setTimeout(() => {
      axios.get('https://hp-api.herokuapp.com/api/characters').then((res) => {
      this.hpData = res.data
      this.loading = false
    })
    .catch((err) => {
      console.log('erro bugado ' + err)
    })
    }, 1700);
  },
  methods: {
      filterOnlyCapsText (value, search) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLowerCase().indexOf(search) !== -1
      },
  },
};
</script>

<style lang="scss" scoped>
#characters {
  background: url('../assets/bg hp.jpg') no-repeat fixed;
  background-size: cover;
  position: relative;
  padding-bottom: 5em;
}

hr{
  width: 35px;
  margin: 0 auto;
}

.table{
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  opacity: .9;
}

*{
  font-family: "Bitter", serif;
  background: no-repeat fixed;
  background-size: cover;
}

.v-data-table::v-deep th {
  text-transform: uppercase !important;
  text-decoration: underline;
  font-weight: bold;
}
.v-data-table::v-deep td {
  text-transform: capitalize;
  font-weight: bold !important;
}
</style>