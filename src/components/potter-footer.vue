<template>
     <div id="footer">
      <div class="top-footer">
          <div class="text-footer">
              <h2><strong>LEGAL NOTICE</strong><br>
              <span>
                  Harry Potter is © J.K. Rowling, Warner Bros. Pictures, TPB, Bloomsbury, Scholastic and Rocco. Harry Potter and Fantastic Beasts Publishing Rights © J.K.R. Wizarding World is a trademark of J.K. Rowling and Warner Bros. Entertainment Inc.
              </span>
              </h2>
          </div>

          <div class="ctt">
            <div>
              <h2 id="h2ctt">Developed by:</h2>
          </div>
          <div class="ctt-1">
              <h2>Flavio Silva</h2> <img class="icons-th" src="../assets/Github.png" alt="">
              <img class="icons-th" src="../assets/linkedin.png" alt="">
          </div>

          <div class="ctt-1">
              <h2>Tarcísio Sena</h2> <img class="icons-th" src="../assets/Github.png" alt="">
              <img class="icons-th" src="../assets/linkedin.png" alt="">
          </div>

        </div>
          </div>


         
      <h4>Copyright © 2022 - potterwiki.com</h4>
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

.icons-th{
    width: 40px;
    border-radius: 5px;
    transition: .3s ease-in-out;

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

/* CRÉDITOS */

.ctt{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.ctt-1 h2{
    font-size: 18px;
    margin: 10px;
     font-family: 'Cinzel Decorative', 'cursive';
    
}

.ctt-1 img{
    margin: 10px;
}

.ctt-1{
    display: flex;
    align-items: center;
    padding: 10px;
    border-top: 1px solid white;
}

#h2ctt{
    text-transform: uppercase;
    padding: 20px;
    font-size: 20px;
    font-family: 'Cinzel Decorative', 'cursive';
}

/* footer */

#footer{
    width: 100%;
    text-align: center;
    background: #00151C;
    color: white;
    position: absolute;
    bottom: 0;
}

.text-footer{
    max-width: 365px;
    padding: 20px 0;
    color: #c2c2c2;
}

.text-footer h2 span {
  margin-top: 20px;
  display: block;
}
h4 {
  color: #c2c2c2;
}
</style>
