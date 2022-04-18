<template>
  <div id="header">
    <div class="top-header">
      <div>
          <h2>Developed with: PotterApi | TheHarryPotterDataBase</h2>
      </div>
      <div>
        <ul class="icons-header">
          <li>
            <h4>Technologies used:</h4>
          </li>
          <li>
              <img class="icons-th" src="../assets/html-5.png" alt="" />
          </li>
          <li>
              <img class="icons-th" src="../assets/css.png" alt="" />
          </li>
          <li>
              <img class="icons-th" src="../assets/java-script.png" alt="" />
          </li>
          <li>
              <img class="icons-th" src="../assets/vue js.png" alt="" />
          </li>
        </ul>
      </div>
    </div>
    <div class="logo">
      <router-link to="/"><h1>POTTER WIKI</h1></router-link>
    </div>

    <div>
      <ul class="header-list">
        <li>
          <router-link to="/characters">
          <button class="btn">Characters</button>
          </router-link>
        </li>
        <li>
          <router-link to="/spells">
          <button class="btn">Spells</button>
          </router-link>
        </li>
        <li>
          <router-link to="/movies">
          <button class="btn">Movies</button>
          </router-link>
        </li>
        <li>
          <router-link to="/books">
          <button class="btn">Books</button>
          </router-link>
        </li>
        <li>
          <router-link to="/potterblog">
          <button class="btn">Potter Blog</button>
          </router-link>
        </li>
        <li>
          <a target="blank" href="https://wiki.potterish.com/index.php/Página_principal">
            <button class="btn">Dictionary</button>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bitter&family=Cinzel+Decorative&display=swap");

/* GERAIS */
.btn {
  background: transparent;
  border: 1px solid #1a9594;
  border-radius: 2px;
  padding: 5px;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.9em;
  color: #1a9594;
  font-family: "Bitter", serif;
}

.btn:hover {
  background: #033a4a;
  color: white;
  border: 1px solid #ffffff;
}

h4,
h2 {
  font-family: "Bitter", serif;
  font-weight: normal;
  font-size: 16px;
}

/* Top Header */
.top-header ul {
  display: flex;
  margin-top: 10px;
}

.top-header {
  display: flex;
  margin: 0 auto;
  max-width: 70%;
  justify-content: space-between;
  align-items: center;
}

.icons-th{
    width: 40px;
    border-radius: 5px;
    transition: .3s ease-in-out;

}

.icons-th:hover {
  transform: scale(1.1);
}

.icons-header {
  align-items: center;
}

.icons-header li {
  margin: 0px 10px;
}

/* HEADER */

#header {
  width: 100%;
  text-align: center;
  background: #00151c;
  height: 202px;
  color: white;
}

#header a h1 {
  margin-top: 10px;
  font-family: "Cinzel Decorative", "cursive";
  font-size: 52px;
  color: white;
}

.logo {
  display: flex;
  justify-content: center;
}

.logo h1::after {
  content: "";
  background: white;
  display: block;
  width: 60px;
  height: 3px;
  margin: 2px auto;
}

.header-list {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}

.header-list li {
  margin: 0 20px 0 50px;
}
</style>
