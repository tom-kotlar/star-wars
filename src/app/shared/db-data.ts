{
    const ALLFILMS = [
        {
            id: 1,
            story:
                'Jedi Knights Qui-Gon Jinn and Obi-Wan Kenobi set out to stop the Trade Federation from invading Naboo. While travelling, they come across a gifted boy, Anakin, and learn that the Sith have returned.',
            title: 'EPISODE I',
            name: 'The Phantom Menace',
            year: '1999',
            duration: '2h 16m',
            poster:
                'https://poducts.blob.core.windows.net/star-wars/images/the-phantom-menace.png',
            info: 'https://www.starwars.com/films/star-wars-episode-i-the-phantom-menace',
            trailer: 'https://www.youtube.com/embed/bD7bpG-zDJQ',
        },
        {
            id: 2,
            story:
                'While pursuing an assassin, Obi Wan uncovers a sinister plot to destroy the Republic. With the fate of the galaxy hanging in the balance, the Jedi must defend the galaxy against the evil Sith.',
            title: 'EPISODE II',
            name: 'Attack of the Clones',
            year: '2002',
            duration: '2h 22m',
            poster:
                'https://poducts.blob.core.windows.net/star-wars/images/attack-of-the-clones.png',
            info: 'https://www.starwars.com/films/star-wars-episode-ii-attack-of-the-clones',
            trailer: 'https://www.youtube.com/embed/gYbW1F_c9eM',
        },
        {
            id: 3,
            story:
                "Anakin joins forces with Obi-Wan and sets Palpatine free from the evil clutches of Count Doku. However, he falls prey to Palpatine and the Jedis' mind games and gives into temptation.",
            title: 'EPISODE III',
            name: 'Revenge of the Sith',
            year: '2005',
            duration: '2h 22m',
            poster:
                'https://poducts.blob.core.windows.net/star-wars/images/revenge-of-the-sith.png',
            info: 'https://www.starwars.com/films/star-wars-episode-iii-revenge-of-the-sith',
            trailer: 'https://www.youtube.com/embed/5UnjrG_N8hU',
        },
        {
            id: 4,
            story:
                'In a galaxy where hyperfuel is in high demand, Han Solo gets involved in a large-scale heist within the criminal underworld and meets individuals who change his life.',
            title: 'A Star Wars Story',
            name: 'Solo',
            year: '2018',
            duration: '2h 15m',
            poster: 'https://poducts.blob.core.windows.net/star-wars/images/solo.png',
            info: 'https://www.starwars.com/films/solo',
            trailer: 'https://www.youtube.com/embed/dNW0B0HsvVs',
        },
        {
            id: 5,
            story:
                "Jyn's father is forcibly taken by the Galactic Empire to help them complete the Death Star. When she grows up, she joins a group of resistance fighters who aim to steal the Empire's blueprints.",
            title: 'A Star Wars Story',
            name: 'Rogue One',
            year: '2016',
            duration: '2h 13m',
            poster:
                'https://poducts.blob.core.windows.net/star-wars/images/rogue-one.png',
            info: 'https://www.starwars.com/films/rogue-one',
            trailer: 'https://www.youtube.com/embed/sC9abcLLQpI',
        },
        {
            id: 6,
            story:
                'After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.',
            title: 'Episode IV',
            name: 'A New Hope',
            year: '1977',
            duration: '2h 5m',
            poster: 'https://poducts.blob.core.windows.net/star-wars/images/new.png',
            info: 'https://www.starwars.com/films/star-wars-episode-iv-a-new-hope',
            trailer: 'https://www.youtube.com/embed/vZ734NWnAHA',
        },
        {
            id: 7,
            story:
                'Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet.',
            title: 'Episode V',
            name: 'The Empire Strikes Back',
            year: '1980',
            duration: '2h 7m',
            poster:
                'https://poducts.blob.core.windows.net/star-wars/images/empire-strikes-back.png',
            info: 'https://www.starwars.com/films/star-wars-episode-v-the-empire-strikes-back',
            trailer: 'https://www.youtube.com/embed/JNwNXF9Y6kY',
        },
        {
            id: 8,
            story:
                'Luke Skywalker attempts to bring his father back to the light side of the Force. At the same time, the rebels hatch a plan to destroy the second Death Star.',
            title: 'Episode VI',
            name: 'The Return of the Jedi',
            year: '1983',
            duration: '2h 16m',
            poster:
                'https://poducts.blob.core.windows.net/star-wars/images/return-of-the-jedi.png',
            info: 'https://www.starwars.com/films/star-wars-episode-vi-return-of-the-jedi',
            trailer: 'https://www.youtube.com/embed/5UfA_aKBGMc',
        },
        {
            id: 9,
            story:
                'A new order threatens to destroy the New Republic. Finn, Rey and Poe, backed by the Resistance and the Republic, must find a way to stop them and find Luke, the last surviving Jedi.',
            title: 'Episode VII',
            name: 'The Force Awakens',
            year: '2015',
            duration: '2h 15m',
            poster:
                'https://poducts.blob.core.windows.net/star-wars/images/the-force-awakens.png',
            info: 'https://www.starwars.com/films/star-wars-episode-vii-the-force-awakens',
            trailer: 'https://www.youtube.com/embed/sGbxmsDFVnE',
        },
        {
            id: 10,
            story:
                "Rey seeks to learn the ways of the Jedi under Luke Skywalker, its remaining member, to reinvigorate the Resistance's war against the First Order.",
            title: 'Episode VIII',
            name: 'The Last Jedi',
            year: '2017',
            duration: '2h 32m',
            poster:
                'https://poducts.blob.core.windows.net/star-wars/images/the-last-jedi.png',
            info: 'https://www.starwars.com/films/star-wars-episode-viii-the-last-jedi',
            trailer: 'https://www.youtube.com/embed/Q0CbN8sfihY',
        },
        {
            id: 11,
            story:
                "The revival of Emperor Palpatine resurrects the battle between the Resistance and the First Order while the Jedi's legendary conflict with the Sith Lord comes to a head.",
            title: 'Episode IX',
            name: 'The Rise of Skywalker',
            year: '2019',
            duration: '2h 22m',
            poster:
                'https://poducts.blob.core.windows.net/star-wars/images/rise-of-skywalker.png',
            info: 'https://www.starwars.com/films/star-wars-episode-ix-the-rise-of-skywalker',
            trailer: 'https://www.youtube.com/embed/adzYW5DZoWs',
        },
    ];
}

const SERIES = [
    {
        id: 1,
        story:
            'After the stories of Jango and Boba Fett, another warrior emerges in the Star Wars universe. The Mandalorian is set after the fall of the Empire and before the emergence of the First Order. We follow the travails of a lone gunfighter in the outer reaches of the galaxy far from the authority of the New Republic.',
        title: 'The Mandalorian',
        release: '2019',
        seasons: 4,
        poster:
            'https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-poster-s3-serieslp_aa55f7a4.jpeg',
        info: 'https://www.starwars.com/series/the-mandalorian',
        trailer: 'https://www.youtube.com/embed/aOC8E8z_ifw',
    },
    {
        id: 2,
        story:
            'The Bad Batch follows the elite and experimental clones of the Bad Batch (first introduced in “The Clone Wars”) as they find their way in a rapidly changing galaxy in the immediate aftermath of the Clone War. Members of Bad Batch—a unique squad of clones who vary genetically from their brothers in the Clone Army—each possess a singular exceptional skill that makes them extraordinarily effective soldiers and a formidable crew.',
        title: 'Star Wars: The Bad Batch',
        release: '2021',
        seasons: 2,
        poster:
            'https://lumiere-a.akamaihd.net/v1/images/the-bad-batch-key-art-s2-poster_119c999d.jpeg',
        info: 'https://www.starwars.com/series/star-wars-the-bad-batch',
        trailer: 'https://www.youtube.com/embed/BsOmYpP4UDU',
    },
   
    {
        id: 2,
        story:
            'The story begins 10 years after the dramatic events of “Star Wars: Revenge of the Sith” where Obi-Wan Kenobi faced his greatest defeat—the downfall and corruption of his best friend and Jedi apprentice, Anakin Skywalker, who turned to the dark side as evil Sith Lord Darth Vader. The series stars Ewan McGregor, reprising his role as the iconic Jedi Master, and also marks the return of Hayden Christensen in the role of Darth Vader. Joining the cast are Moses Ingram, Joel Edgerton, Bonnie Piesse, Kumail Nanjiani, Indira Varma, Rupert Friend, O’Shea Jackson Jr., Sung Kang, Simone Kessell and Benny Safdie.',
        title: 'Obi-Wan Kenobi',
        release: '2022',
        seasons: 1,
        poster:
            'https://m.media-amazon.com/images/M/MV5BOTAxOTlmOTAtMjA0Yy00YjVjLWE3OTQtYjAzMWMxOTAwZTY1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg',
        info: 'https://www.starwars.com/series/obi-wan-kenobi',
        trailer: 'https://www.youtube.com/embed/TWTfhyvzTx0',
    },
];
