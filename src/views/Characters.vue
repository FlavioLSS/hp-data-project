<template>
  <div id="characters">
      <div class="table test">
        <h1 class="text-center black--text mt-8">List of all characters</h1>
        <hr>
        <v-data-table
      :headers="headers"
      :items="hpData"
      :search="search"
      :items-per-page="8"
      :loading="loading"
      :custom-filter="filterOnlyCapsText"
      class="elevation-8 mt-10 table"
      dense
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
        { text: "Hair colour", value: "hair_color" },
        { text: "Eye colour", value: "eye_color" },
        { text: "Ancestry", value: "ancestry" },
        { text: "Patronus", value: "patronus" },
        { text: "Species", value: "species" },
        { text: "Wand", value: "wand" },
        { text: "Birth", value: "birth" },
        { text: "Death", value: "death" },
        { text: "Groups", value: "associated_groups" },
      ],
      hpData: [],
    };
  },
  mounted() {
    setTimeout(() => {
      axios.get('https://the-harry-potter-database.herokuapp.com/api/1/characters/all').then((res) => {
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
  background: url('../assets/old-bg-2.jpg') no-repeat fixed;
  background-size: cover;
  position: relative;
  padding-bottom: 5em;
}

hr{
  width: 35px;
  margin: 0 auto;
}

h1{
  font-family: 'Special Elite', serif !important;
}

.table{
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  width: 98%;
  margin: 0 auto;
  opacity: .9;
}

*{
  font-family: "Bitter", serif;
  background: no-repeat fixed;
  background-size: cover;
}

.v-data-table::v-deep th {
  font-weight: bold;
  font-family: 'Special Elite', serif !important;
}
.v-data-table::v-deep td {
  text-transform: capitalize;
  font-weight: bold !important;
  font-family: 'Special Elite', serif !important;
}
</style>