<template>
    <div class="modal">
            <h2>Harry Potter e a Pedra Filosofal</h2>

        <div class="part1">

            <div class="trailer">

                <iframe class="trailer-v" src="https://www.youtube.com/embed/9fIObnIGMlI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <v-row>
                    <v-col col="6"><h3>Ano de Lançamento: 2001</h3></v-col>
                    <v-col col="6"><h3>Diretor: Chris Columbus</h3></v-col>
                </v-row>

                 <v-row>
                    <v-col col="6"><h3>Bilheteria: US$ 965 milhões</h3></v-col>
                    <v-col col="6"><h3>Nota (Imdb): 7,6 / 10</h3></v-col>
                </v-row>
            </div>
            <div class="sinopse">
                     <h2>Sinopse</h2>
                         <h3>Harry Potter vive com os tios Dursley, onde é mal tratado até completar seus 11 anos. É com essa idade que o jovem bruxo começa a receber cartas da escola de Hogwarts. Na noite de seu aniversário Harry é visitado por Hagrid (um ser gigante que trabalha para o diretor de Hogwarts), o qual revela que Harry é filho de bruxos e foi convidado a ingressar na escola de bruxaria. A verdade é toda revelada a Harry Potter, que seus pais foram mortos pelo terrível bruxo Voldemort e que a sua cicatriz era marca da tentativa de assassinato que Harry sofrera. Esse primeiro livro apresenta o leitor aos principais personagens da série e cria uma aura de “simpatia” pelo personagem principal (Harry).</h3>
                    </div>

        </div>

                    <h2>Momentos Icônicos</h2>

    </div>
    <!-- Hover -->
    
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}

h2{
    color: white;
    font-size: 42px;
    font-family: 'Cinzel Decorative', 'cursive';
    margin: 10px 0;
}

h3{
    color: white;
    font-family: 'Bitter', serif;
    font-weight: normal;
    letter-spacing: 1.5px;
    font-size: 18px;
}

.modal{
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: rgb(17, 16, 16);
}
.modal h2{
    border-bottom: 2px solid gray;
}
.part1{
    background: rgba(0, 0, 0, 0.870);
    border-radius: 10px;
    max-width: 1340px;
    display: flex;
}

.sinopse{
    padding: 0px 0px 40px 0px;
    text-align: left;
    max-width: 600px;
}

.sinopse h2{
    font-size: 28px;
    font-family: 'Bitter', serif;
    text-transform: uppercase;
    font-weight: normal;
    border-bottom: 2px solid white;
}

.trailer{
    margin: 20px;
}

.trailer h3{
    text-align: left;
    margin-left: 5px;
    border-bottom: 1px solid white;
    border-right: 1px solid white;
}

.trailer-v{
    width: 640px;
    height: 415px;
}
</style>