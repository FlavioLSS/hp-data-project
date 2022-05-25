<template>
    <div id="potter-blog">
        <div class="articles-g">
            <div class="article">
                <h2>O que podemos esperar de Hogwarts Legacy?</h2>
                 <div class="youtube-container">
                    <iframe class="trailer-v2" src="https://giphy.com/embed/mXj5sPCUCtbxkdjNTx" frameBorder="0"  allowFullScreen></iframe>
                </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum fugit consectetur quidem nisi quasi error laborum, laudantium, voluptatibus ea porro perferendis id magnam possimus? Amet, voluptates impedit. Iste, saepe quas.</p>
                    <button class="btn">Read More</button>

             </div>
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
@import url('https://fonts.googleapis.com/css2?family=Bitter&family=Cinzel+Decorative&family=Special+Elite&display=swap');
#potter-blog{
    background: url('../assets/potter.jpg') no-repeat center;
    background-size: cover;
    text-align: center;
    color: white;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400&display=swap');

h2{
    font-family: 'Bitter', serif;
    padding: 5px;
    font-size: 28px;
    text-transform: uppercase;
    color: rgb(0, 0, 0);
    border-bottom: 2px solid black;
}

.articles-g{
    display: flex;
    justify-content: center;
}

.article{
    height: auto;
    width: 1200px;
    background: #C3B9AF;
    margin: 20px 0;
    border-radius: 50px;
}

.article p{
    font-family: 'Roboto Slab', serif;
    font-size: 20px;
    font-weight: bold;
    color: black;
    text-align: left;
    max-width: 1000px;
    margin: 0 auto;
}

.btn{
    font-family: 'Bitter', serif;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    width: 150px;
    color: white;
    background: black;
    border-radius: 8px;
    transition: 0.2s ease-out;
}

.btn:hover{
    background: white;
    color: black;

}

.trailer-v2{
    padding: 50px;
}
.youtube-container {
	overflow: hidden;
	width: 100%;
	aspect-ratio: 16/9;
	pointer-events: none;
}

.youtube-container iframe{
		width: 300%;
		height: 100%;
		margin-left: -100%;
}
</style>