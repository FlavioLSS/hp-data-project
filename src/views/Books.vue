<template>
    <div id="books">
        <div class="book-screen">
            <h1 class="mt-13 mb-8 title">Classic Harry Potter Books</h1>
            <hr class="mb-16">
            <div class="d-flex flex-wrap justify-center">
                <div v-for="test in books" :key="test.id">
                <div class="d-flex">
                    <div>
                        <h2>{{ test.title }}</h2>
                        <h3>Description</h3>
                        <p>{{ test.description }}</p>
                        <h3>Summary</h3>
                        <p>{{ test.sumary }}</p>
                    </div>
                    <div class="d-flex flex-column">
                    <v-tooltip color="primary" top>
                        <template v-slot:activator="{ on, attrs }">
                            <img v-bind="attrs"
          v-on="on" @click="imageSwitcher()" :src="test.book_covers[0].URL" width="300" height="500" class="ml-5" :class="switcher_one">
                        </template>
                        <span>Change book cover</span>
                    </v-tooltip>
                    <v-tooltip color="primary" top>
                        <template v-slot:activator="{ on, attrs }">
                                        <img v-bind="attrs"
                    v-on="on" @click="imageUnswitcher()" :src="test.book_covers[1].URL" width="300" height="500" class="ml-5" :class="switcher_two">
                                    </template>
                        <span>Change book cover</span>
                    </v-tooltip>
                        <small class="ml-5 mt-2">Edition: {{ test.book_covers[0].edition }}</small>
                        <small class="ml-5 mt-2">Artist(UK): {{ test.book_covers[0].artist }}</small>
                        <small class="ml-5 mt-2">Artist(US): {{ test.book_covers[1].artist }}</small>
                        <small class="ml-5 mt-2">Publish date(UK): {{ test.publish_date[0].UK }}</small>
                        <small class="ml-5 mt-2">Publish date(US): {{ test.publish_date[1].US }}</small>
                    </div>
                </div>
                    <hr class="line">
            </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
#books{
    background: url('../assets/old-bg.jpg');

    .book-screen{
        max-width: 70%;
        margin: 0 auto;
    }

    h1, p, h2, h3{
        font-family: 'Old Standard TT', serif !important;
        text-align: center;
    }

    p{
        max-width: 700px;
    }

    hr{
        width: 35px;
        height: 7px;
        margin: 0 auto;
        background: black;
    }
}

.title{
        font-size: 2.5rem !important; 
    }

    img{
        transition: .3s;
        cursor: pointer;
    }

    img:hover{
        color: rgba(255, 255, 255, 1);
        box-shadow: 0 5px 55px rgba(182, 120, 92, 0.747);
    }

    .wtf{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .line{
        width: 100% !important;
        margin-bottom: 7em !important;
        margin-top: 1em !important;
    }

    .img-class-2{
        display: none !important;
    }

    .class-show{
        display: block;
    }

    .class-hide{
        display: none;
    }
</style>

<script>
export default {
    data(){
        return{
            switcher_one: "img-class-1",
            switcher_two: "img-class-2",
            books: [
                {
                "id": 1,
                "title": "Harry Potter and the Philosopher's Stone",
                "description": `Harry Potter and the Philosopher’s Stone, also called Harry Potter and the Sorcerer’s Stone, the first novel in the immensely popular Harry Potter series by British writer J.K. Rowling. It was first published in Britain in 1997 and appeared in the United States the following year under the title Harry Potter and the Sorcerer’s Stone. The book’s imaginative story line about a boy wizard made it an enduring hit with both children and adults.`,
                "sumary": `Ten-year-old Harry Potter is an orphan who lives in the fictional London suburb of Little Whinging, Surrey, with the Dursleys: his uncaring Aunt Petunia, loathsome Uncle Vernon, and spoiled cousin Dudley. The Dursleys barely tolerate Harry, and Dudley bullies him. One day Harry is astonished to receive a letter addressed to him in the cupboard under the stairs (where he sleeps). Before he can open the letter, however, Uncle Vernon takes it. Letters for Harry subsequently arrive each day, in increasing numbers, but Uncle Vernon tears them all up, and finally, in an attempt to escape the missives, the Dursleys go to a miserable shack on a small island. On Harry’s 11th birthday, a giant named Hagrid arrives and reveals that Harry is a wizard and that he has been accepted at the Hogwarts School of Witchcraft and Wizardry. He also sheds light on Harry’s past, informing the boy that his parents, a wizard and a witch, were killed by the evil wizard Voldemort and that Harry acquired the lightning-bolt scar on his forehead during the fatal confrontation.`,
                "author": "J.K. Rowling",
                "publish_date": [
                {
                "UK": "06-26-1997"
                },
                {
                "US": "01-09-1998"
                }
                ],
                "plot_take_place_years": [
                "1991",
                "1992"
                ],
                "book_covers": [
                {
                "id": 1,
                "country": "UK",
                "edition": "1st",
                "artist": "Thomas Taylor",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249796/Harry_Potter_1_-_Harry_Potter_and_the_Philosophers_Stone_-_Thomas_Taylor_tkuvuf.jpg"
                },
                {
                "id": 2,
                "country": "US",
                "edition": "1st",
                "artist": "Mary GrandPré",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237799/Harry_Potter_1_-_Harry_Potter_and_the_Sorcerers_Stone_-_Mary_Grandpre_blzhwd.jpg"
                }
                ],
                },
                {
                "id": 2,
                "title": "Harry Potter and the Chamber of Secrets",
                "description": `The book was published in the United Kingdom on 2 July 1998 by Bloomsbury and later in the United States on 2 June 1999 by Scholastic Inc. Although Rowling says she found it difficult to finish the book, it won high praise and awards from critics, young readers, and the book industry, although some critics thought the story was perhaps too frightening for younger children. Much like with other novels in the series, Harry Potter and the Chamber of Secrets triggered religious debates; some religious authorities have condemned its use of magical themes, whereas others have praised its emphasis on self-sacrifice and the way one's character is the result of one's choices.`,
                "sumary": `After a marvelous year at Hogwarts School of Witchcraft and Wizardry, Harry Potter is stuck spending summer break with his awful Muggle (non-wizard) aunt and uncle, Petunia and Vernon Dursley, and his equally horrid cousin, Dudley. On July 31, it's Harry's birthday, but no one remembers. All the Dursleys care about is their guests for the evening: important clients for Uncle Vernon's drill business. Uncle Vernon tells Harry to sit in his room and pretend he doesn't exist – he doesn't want Harry's freakishness (i.e., magic) wrecking his business. When Harry retreats to his room to stay out of the way, though, he finds someone unexpected waiting there: a house-elf named Dobby.`,
                "author": "J.K. Rowling",
                "publish_date": [
                {
                "UK": "07-02-1998"
                },
                {
                "US": "02-06-1999"
                }
                ],
                "plot_take_place_years": [
                "1992",
                "1993"
                ],
                "book_covers": [
                {
                "id": 1,
                "country": "UK",
                "edition": "1st",
                "artist": "Cliff Wright",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249801/Harry_Potter_2_-_Harry_Potter_and_the_Chamber_of_Secrets_-_Cliff_Wright_rkruh4.jpg"
                },
                {
                "id": 2,
                "country": "US",
                "edition": "1st",
                "artist": "Mary GrandPré",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237793/Harry_Potter_2_-_Harry_Potter_and_the_Chamber_of_Secrets_-_Grandpre_xnbrby.jpg"
                }
                ],
                },
                {
                "id": 3,
                "title": "Harry Potter and Prisoner of Azkaban",
                "description": `The book was published in the United Kingdom on 8 July 1999 by Bloomsbury and in the United States on 8 September 1999 by Scholastic, Rowling found the book easy to write, finishing it just a year after she began writing it. The book sold 68,000 copies in just three days after its release in the United Kingdom and since has sold over three million in the country. The book won the 1999 Whitbread Children's Book Award, the Bram Stoker Award, and the 2000 Locus Award for Best Fantasy Novel and was short-listed for other awards, including the Hugo.`,
                "sumary": `Thirteen-year-old Harry Potter spends another unhappy summer at the Dursleys. After Aunt Marge insults Harry and his deceased parents, an angry Harry accidentally inflates her. Fearing expulsion from Hogwarts, he runs away. On a dark street, a large black dog watches Harry. Startled, Harry stumbles backward, causing his wand to emit sparks. The Knight Bus, a vehicle that rescues stranded wizards, suddenly arrives. Harry goes to the Leaky Cauldron in Diagon Alley where Cornelius Fudge, the Minister for Magic, is waiting. Harry is not expelled but is asked to remain in Diagon Alley until school starts. While there, Harry reunites with best friends Ron Weasley and Hermione Granger. Mr Weasley warns Harry about the wizard Sirius Black, a convicted murderer who escaped Azkaban prison and is believed to be hunting down Harry.`,
                "author": "J.K. Rowling",
                "publish_date": [
                {
                "UK": "07-08-1999"
                },
                {
                "US": "08-09-1999"
                }
                ],
                "plot_take_place_years": [
                "1993",
                "1994"
                ],
                "book_covers": [
                {
                "id": 1,
                "country": "UK",
                "edition": "1st",
                "artist": "Cliff Wright",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_3_-_Harry_Potter_and_the_Prisoner_of_Azkaban_-_Cliff_Wright.jpg_ti6wxh.jpg"
                },
                {
                "id": 2,
                "country": "US",
                "edition": "1st",
                "artist": "Mary GrandPré",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237792/Harry_Potter_3_-_Harry_Potter_and_the_Prisoner_of_Azkaban_-_Mary_Grandpre_x41ufj.jpg"
                }
                ],
                },
                {
                "id": 4,
                "title": "Harry Potter and the Goblet of Fire",
                "description": `The book was published in the United Kingdom by Bloomsbury and in the United States by Scholastic. In both countries, the release date was 8 July 2000. This was the first time a book in the series was published in both countries at the same time. The novel won a Hugo Award, the only Harry Potter novel to do so, in 2001. The book was adapted into a film, released worldwide on 18 November 2005, and a video game by Electronic Arts.`,
                "sumary": `This dream – and Harry's growing pain from the lighting bolt-shaped curse scar on his forehead – demonstrate that Lord Voldemort is gaining strength once again. Harry doesn't know what to do about any of this, so he writes to his godfather, Sirius Black. Then, Harry's best friend Ron Weasley rescues Harry from a boring summer vacation with his awful Muggle relatives to go to the Quidditch World Cup.
`,
                "author": "J.K. Rowling",
                "publish_date": [
                {
                "UK": "07-08-2000"
                },
                {
                "US": "07-08-2000"
                }
                ],
                "plot_take_place_years": [
                "1994",
                "1995"
                ],
                "book_covers": [
                {
                "id": 1,
                "country": "UK",
                "edition": "1st",
                "artist": "Giles Greenfield",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249790/Harry_Potter_4_-_Harry_Potter_and_the_Goblet_of_Fire_-_Giles_Greenfield_lb38dj.jpg"
                },
                {
                "id": 2,
                "country": "US",
                "edition": "1st",
                "artist": "Mary GrandPré",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237797/Harry_Potter_4_-_Harry_Potter_and_the_Goblet_of_Fire_-_Mary_Grandpre_dvcyl1.jpg"
                }
                ],
                },
                {
                "id": 5,
                "title": "Harry Potter and the Order of the Phoenix",
                "description": `Harry Potter and the Order of the Phoenix is a fantasy novel written by British author J. K. Rowling and the fifth novel in the Harry Potter series. It follows Harry Potter's struggles through his fifth year at Hogwarts School of Witchcraft and Wizardry, including the surreptitious return of the antagonist Lord Voldemort, O.W.L. exams, and an obstructive Ministry of Magic. The novel was published on 21 June 2003 by Bloomsbury in the United Kingdom, Scholastic in the United States, and Raincoast in Canada. It sold five million copies in the first 24 hours of publication.[1] It is the longest book of the series.`,
                "sumary": `During the summer, Harry Potter and his cousin Dudley are attacked by Dementors. Forced to magically fend them off, Harry is expelled from Hogwarts, but his expulsion is postponed pending a hearing at the Ministry of Magic. A group of wizards belonging to the Order of the Phoenix whisk Harry off to Number 12, Grimmauld Place, Sirius Black's childhood home.`,
                "author": "J.K. Rowling",
                "publish_date": [
                {
                "UK": "06-21-2003"
                },
                {
                "US": "06-21-2003"
                }
                ],
                "plot_take_place_years": [
                "1995",
                "1996"
                ],
                "book_covers": [
                {
                "id": 1,
                "country": "UK",
                "edition": "1st",
                "artist": "Jason Cockcroft",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249804/Harry_Potter_5_-_Harry_Potter_and_the_Order_of_the_Phoenix_-_Jason_Cockcroft_d9pkq3.jpg"
                },
                {
                "id": 2,
                "country": "US",
                "edition": "1st",
                "artist": "Mary GrandPré",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237794/Harry_Potter_5_-_Harry_Potter_and_the_Order_of_the_Phoenix_-_Mary_Grandpre_lpesll.jpg"
                }
                ],
                },
                {
                "id": 6,
                "title": "Harry Potter and the Half-Blood Prince",
                "description": `Harry Potter and the Half-Blood Prince is a fantasy novel written by British author J.K. Rowling and the sixth and penultimate novel in the Harry Potter series. Set during Harry Potter's sixth year at Hogwarts, the novel explores the past of the boy wizard's nemesis, Lord Voldemort, and Harry's preparations for the final battle against Voldemort alongside his headmaster and mentor Albus Dumbledore.`,
                "sumary": `Severus Snape, a member of the Order of the Phoenix, meets with Narcissa Malfoy, Draco's mother, and her sister Bellatrix Lestrange, Lord Voldemort's supporter. Narcissa expresses concern that her son may not survive a mission that Voldemort has given him. Snape makes an Unbreakable Vow with Narcissa, swearing to assist Draco.`,
                "author": "J.K. Rowling",
                "publish_date": [
                {
                "UK": "07-16-2005"
                },
                {
                "US": "07-16-2005"
                }
                ],
                "plot_take_place_years": [
                "1996",
                "1997"
                ],
                "book_covers": [
                {
                "id": 1,
                "country": "UK",
                "edition": "1st",
                "artist": "Jason Cockcroft",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249789/Harry_Potter_6_-_Harry_Potter_and_the_Half-Blood_Prince_-_Jason_Cockcroft_gorgek.jpg"
                },
                {
                "id": 2,
                "country": "US",
                "edition": "1st",
                "artist": "Mary GrandPré",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237787/Harry_Potter_6_-_Harry_Potter_and_the_Half-Blood_Prince_-_Mary_Grandpre_us5er1.jpg"
                }
                ],
                },
                {
                "id": 7,
                "title": "Harry Potter and the Deathly Hallows",
                "description": `Harry Potter and the Deathly Hallows is a fantasy novel written by British author J. K. Rowling and the seventh and final novel of the main Harry Potter series. It was released on 14 July 2007 in the United Kingdom by Bloomsbury Publishing, in the United States by Scholastic, and in Canada by Raincoast Books. The novel chronicles the events directly following Harry Potter and the Half-Blood Prince (2005) and the final confrontation between the wizards Harry Potter and Lord Voldemort.`,
                "sumary": `Throughout the six previous novels in the series, the main character Harry Potter has struggled with the difficulties of adolescence along with being famous as the only person ever to survive the Killing Curse. The curse was cast by Tom Riddle, better known as Lord Voldemort, a powerful evil wizard who murdered Harry's parents and attempted to kill Harry as a baby, due to a prophecy which claimed Harry would be able to stop him. As an orphan, Harry was placed in the care of his Muggle (non-magical) relatives Petunia Dursley and Vernon Dursley, with their son Dudley Dursley.`,
                "author": "J.K. Rowling",
                "publish_date": [
                {
                "UK": "07-21-2007"
                },
                {
                "US": "07-21-2007"
                }
                ],
                "plot_take_place_years": [
                "1997",
                "1998"
                ],
                "book_covers": [
                {
                "id": 1,
                "country": "UK",
                "edition": "1st",
                "artist": "Jason Cockcroft",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_250/v1590249805/Harry_Potter_7_-_Harry_Potter_and_the_Deathly_Hallows_-_Jason_Cockcroft_yex7ar.jpg"
                },
                {
                "id": 2,
                "country": "US",
                "edition": "1st",
                "artist": "Mary GrandPré",
                "URL": "https://res.cloudinary.com/the-harry-potter-database/image/upload/c_fill,h_390,w_300/v1590237800/Harry_Potter_7_-_Harry_Potter_and_the_Deathly_Hallows_-_Mary_Grandpre_nfqpyd.jpg"
                }
                ]
                }
            ]
        }
    },
    methods: {
        imageSwitcher(){
            this.switcher_two = 'class-show'
            this.switcher_one = 'class-hide'
        },
        imageUnswitcher(){
            this.switcher_two = 'class-hide'
            this.switcher_one = 'class-show'
        }
    }
}
</script>
