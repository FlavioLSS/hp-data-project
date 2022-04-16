<template>
  <div id="footer">
    <div class="top-footer">
      <div class="text-footer">
        <h2>
          <strong>LEGAL NOTICE</strong><br />
          <span>
            Harry Potter is © J.K. Rowling, Warner Bros. Pictures, TPB,
            Bloomsbury, Scholastic and Rocco. Harry Potter and Fantastic Beasts
            Publishing Rights © J.K.R. Wizarding World is a trademark of J.K.
            Rowling and Warner Bros. Entertainment Inc.
          </span>
        </h2>
      </div>
      <div>
        <ul class="icons-footer">
          <li>
            <h4>Tecnologias utilizadas:</h4>
          </li>
          <li>
            <a href="">
              <img class="icons-th" src="../assets/html-5.png" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img class="icons-th" src="../assets/css.png" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img class="icons-th" src="../assets/java-script.png" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img class="icons-th" src="../assets/vue js.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <h4>Copyright © 2002 - 2022 - potterwiki.com - Ano 22</h4>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bitter&family=Cinzel+Decorative&display=swap");

/* GERAIS */

h4,
h2 {
  font-family: "Bitter", serif;
  font-weight: normal;
  font-size: 16px;
}

/* Top Footer */
.top-footer ul {
  display: flex;
  margin-top: 10px;
}

.top-footer {
  display: flex;
  margin: 0 auto;
  max-width: 70%;
  justify-content: space-between;
  align-items: center;
}

.icons-th {
  width: 40px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 5px;
  transition: 0.3s ease-in-out;
}

.icons-th:hover {
  transform: scale(1.1);
}

.icons-footer {
  align-items: center;
}

.icons-footer li {
  margin: 0px 10px;
}

/* footer */

#footer {
  width: 100%;
  text-align: center;
  background: #00151c;
  height: 202px;
  color: white;
  position: absolute;
  bottom: 0;
}

.text-footer {
  max-width: 365px;
  padding: 20px 0;
  color: #c2c2c2;
  max-height: 450px;
}

.text-footer h2 span {
  margin-top: 20px;
  display: block;
}
h4 {
  color: #c2c2c2;
}
</style>
