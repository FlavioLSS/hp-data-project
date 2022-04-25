<template>
    <div id="fantasticBeasts">
        <div class="blog-wrapper">
            <div class="pt-4 pb-4 text-center">
                <h1 class="special-elite">Fantastic beasts article</h1>
            </div>
            <div class="video-blog-wrapper">
                <div class="youtube-container">
                    <iframe src="https://giphy.com/embed/uflTRbpTMu6gskQqbX" class="trailer-v2" frameBorder="0" allowFullScreen></iframe>
                </div>
            </div>
            <div class="pt-6">
                <h2>• Sub-title</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum cupiditate pariatur ex repellat excepturi impedit minus voluptatem animi, omnis eos porro ut error officiis culpa! Molestiae odit repudiandae, unde aperiam asperiores dolor provident similique facere enim recusandae quis, debitis consectetur minima velit officiis quisquam vero aspernatur pariatur, explicabo vitae.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum cupiditate pariatur ex repellat excepturi impedit minus voluptatem animi, omnis eos porro ut error officiis culpa! Molestiae odit repudiandae, unde aperiam asperiores dolor provident similique facere enim recusandae quis, debitis consectetur minima velit officiis quisquam vero aspernatur pariatur, explicabo vitae.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ipsum cupiditate pariatur ex repellat excepturi impedit minus voluptatem animi, omnis eos porro ut error officiis culpa! Molestiae odit repudiandae, unde aperiam asperiores dolor provident similique facere enim recusandae quis, debitis consectetur minima velit officiis quisquam vero aspernatur pariatur, explicabo vitae.</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
#fantasticBeasts{
    background: url('../../assets/old-bg-2.jpg');
    background-size: cover;
}

.blog-wrapper{
    max-width: 55%;
    margin: 0 auto;
    padding-top: 2em;
    padding-bottom: 2em;
}

.video-blog-wrapper{
    max-width: 80%;
    margin: 0 auto;
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

h1{
    font-size: 2.5rem;
}
</style>