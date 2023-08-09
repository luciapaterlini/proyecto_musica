
// const canciones = JSON.parse(localStorage.getItem("canciones")) || [];

// Funcion Inicializacion

// const inicializacion = () => {
//     const data  = [
//         {
//             id: 1 ,
//             title: "Dance The Night",
//             artist: "Dua Lipa",
//             gender: "Pop",
//             duration: "2:57" ,
//             image: "https://lastfm.freetls.fastly.net/i/u/500x500/c7c9d41e50a621bc5e23b45ec229705a.jpg",
//             favorito: false,
//         },
//         {
//             id: 2 ,
//             title: "Cruel Summer",
//             artist: "Taylor Swift",
//             gender: "Pop",
//             duration: "2:58" ,
//             image: "https://jenesaispop.com/wp-content/uploads/2019/06/taylor-swift.jpg" ,
//             favorito: false,
//         },
//         {
//             id: 3 ,
//             title: "LALA",
//             artist: "Myke Towers",
//             gender: "Pop",
//             duration: "3:18" ,
//             image:"https://i1.sndcdn.com/artworks-2h9w1cyESonW-0-t500x500.jpg" ,
//             favorito: false,
//         },
//         {
//             id: 4 ,
//             title: "WHERE SHE GOES",
//             artist: "Bad Bunny",
//             gender: "Pop",
//             duration: "2:34" ,
//             image:"https://www.lahiguera.net/musicalia/artistas/varios/disco/0/tema/29353/where_she_goes-portada.jpg" ,
//             favorito: false,
//         },
//         {
//             id: 5 ,
//             title: "Flowers",
//             artist: "Miley Cyrus",
//             gender: "Pop",
//             duration: "3:20" ,
//             image: "https://cdns-images.dzcdn.net/images/cover/98610629a40996b61b3d24bd5ab8c2e1/500x500.jpg",
//             favorito: false,
//         },
//         {
//             id: 6 ,
//             title: "S91",
//             artist: "Karol G",
//             gender: "Latina",
//             duration: "2:53" ,
//             image: "https://i.scdn.co/image/ab67616d0000b273890cfb712167a0186918644e",
//             favorito: false,
//         },
//         {
//             id: 7 ,
//             title: "BABY HELLO",
//             artist: "Rauw Alejandro, Bizarrap",
//             gender: "Latina",
//             duration: "3:42" ,
//             image: "https://linkstorage.linkfire.com/medialinks/images/09c3ce38-a6e7-4fdf-a2bd-67e84a384131/artwork-440x440.jpg",
//             favorito: false,
//         },
//         {
//             id: 8 ,
//             title: "Ella Baila Sola",
//             artist: "Eslabon Armado, Peso Pluma",
//             gender: "Latina",
//             duration: "2:46" ,
//             image: "https://m.media-amazon.com/images/I/51FGq-xYTeL._UXNaN_FMjpg_QL85_.jpg",
//             favorito: false,
//         },
//         {
//             id: 9 ,
//             title: "ADIOS",
//             artist: "Maria Becerra",
//             gender: "Latina",
//             duration: "2:41" ,
//             image: "https://i.scdn.co/image/ab67616d0000b27377ec4341ebb8a0dbfe2df739",
//             favorito: false,
//         },
//         {
//             id: 10 ,
//             title: "COCO LOCO",
//             artist: "Maluma",
//             gender: "Latina",
//             duration: "2:47" ,
//             image: "https://linkstorage.linkfire.com/medialinks/images/a3facb3d-ddeb-4371-af41-a3cc5c7f7841/artwork-440x440.jpg",
//             favorito: false,
//         },
//         {
//             id: 11 ,
//             title: "Hot In Herre",
//             artist: "Nelly",
//             gender: "Hip Hop",
//             duration: "3:48" ,
//             image: "https://i.scdn.co/image/ab67616d0000b273a8b9f97b9ea065b9a857e93f",
//             favorito: false,
//         },
//         {
//             id: 12 ,
//             title: "The Real Slim Shady",
//             artist: "Eminem",
//             gender: "Hip Hop",
//             duration: "4:44" ,
//             image: "https://f4.bcbits.com/img/a0183287409_65",
//             favorito: false,
//         },
//         {
//             id: 13 ,
//             title: "In My Feelings",
//             artist: "Drake",
//             gender: "Hip Hop",
//             duration: "3:37" ,
//             image: "https://lastfm.freetls.fastly.net/i/u/ar0/a73396862c4c2326bae95f73b0a4ac64.jpg",
//             favorito: false,
//         },
//         {
//             id: 14 ,
//             title: "hARAkiRi",
//             artist: "Duki, C.R.O",
//             gender: "Hip Hop",
//             duration: "2:49" ,
//             image: "https://i.scdn.co/image/ab67616d0000b2737eb80f8193b2d744df5058c0",
//             favorito: false,
//         },
//         {
//             id: 15 ,
//             title: "FEEL ME??",
//             artist: "Trueno",
//             gender: "Hip Hop",
//             duration: "3:07" ,
//             image: "https://i.scdn.co/image/ab67616d0000b27385de3ee7edaa01757845dc6a",
//             favorito: false,
//         },
//         {
//             id: 16 ,
//             title: "Prófugos",
//             artist: "Soda Stereo",
//             gender: "Rock",
//             duration: "5:20" ,
//             image: "https://i.scdn.co/image/ab67616d0000b273e885d6895a32a612813bf6d3",
//             favorito: false,
//         },
//         {
//             id: 17 ,
//             title: "Luna de Miel en la Mano",
//             artist: "Virus",
//             gender: "Rock",
//             duration: "5:16" ,
//             image: "https://i.scdn.co/image/ab67616d0000b273292c1ca632a1e120d1208c95",
//             favorito: false,
//         },
//         {
//             id: 18 ,
//             title: "La Bifurcada",
//             artist: "Memphis La Blusera",
//             gender: "Rock",
//             duration: "4:36" ,
//             image: "https://i.scdn.co/image/ab67616d0000b2738fbd25be9c3efc36f01f6dcb",
//             favorito: false,
//         },
//         {
//             id: 19 ,
//             title: "Cuando estés acá",
//             artist: "La Renga",
//             gender: "Rock",
//             duration: "4:55" ,
//             image: "https://i.scdn.co/image/ab67616d0000b273a2d9ead62b53a0e9fa01182d",
//             favorito: false,
//         },
//         {
//             id: 20 ,
//             title: "Ji Ji Ji",
//             artist: "Patricio Rey y sus Redonditos de Ricota",
//             gender: "Rock",
//             duration: "5:34" ,
//             image: "https://i.scdn.co/image/ab67616d0000b273c7c1ffa44473871a6f004786",
//             favorito: false,
//         },
//         {
//             id: 21 ,
//             title: "Te Vas a Arrepentir",
//             artist: "La Nueva Luna",
//             gender: "Cumbia",
//             duration: "3:24" ,
//             image: "https://i.scdn.co/image/ab67616d00001e0226e4d1680cacd81ac0ebe194",
//             favorito: false,
//         },
//         {
//             id: 22 ,
//             title: "Olvídala",
//             artist: "Los Palmeras",
//             gender: "Cumbia",
//             duration: "4:50" ,
//             image: "https://i.scdn.co/image/ab67616d0000b2736665b7cb7ed27000d3d9cf1a",
//             favorito: false,
//         },
//         {
//             id: 23 ,
//             title: "Yo Me Enamoré",
//             artist: "Amar Azul",
//             gender: "Cumbia",
//             duration: "3:12" ,
//             image: "https://i.scdn.co/image/ab67616d0000b273387b7088236062cd0b1a1527",
//             favorito: false,
//         },
//         {
//             id: 24 ,
//             title: "Mentirosa",
//             artist: "Rafaga",
//             gender: "Cumbia",
//             duration: "3:15" ,
//             image: "https://i.scdn.co/image/ab67616d0000b2733e79988a4e5af63f2a239450",
//             favorito: false,
//         },
//         {
//             id: 25 ,
//             title: "Fuiste",
//             artist: "Gilda",
//             gender: "Cumbia",
//             duration: "3:03" ,
//             image: "https://i.scdn.co/image/ab67616d0000b2733540dd039ad4a425cf2522f4",
//             favorito: false,
//         },
//         {
//             id: 26 ,
//             title: "Lo Que Pasó, Pasó",
//             artist: "Daddy Yankee",
//             gender: "Reggaeton",
//             duration: "3:31" ,
//             image: "https://i.scdn.co/image/ab67616d0000b2736bdcdf82ecce36bff808a40c",
//             favorito: false,
//         },
//         {
//             id: 27 ,
//             title: "Es un Secreto",
//             artist: "Plan B",
//             gender: "Reggaeton",
//             duration: "3:12" ,
//             image: "https://i.scdn.co/image/ab67616d0000b2734787a6dc1c2b9b3bedec9f7d",
//             favorito: false,
//         },
//         {
//             id: 28 ,
//             title: "Ella y Yo",
//             artist: "Aventura, Don Omar",
//             gender: "Reggaeton",
//             duration: "4:28" ,
//             image: "https://i.scdn.co/image/ab67616d0000b2736bb920cebbe9cd79eccaf0e6",
//             favorito: false,
//         },
//         {
//             id: 29 ,
//             title: "Efecto",
//             artist: "Bad Bunny",
//             gender: "Reggaeton",
//             duration: "3:33" ,
//             image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
//             favorito: false,
//         },
//         {
//             id: 30 ,
//             title: "Yandel 150",
//             artist: "Yandel, Feid",
//             gender: "Reggaeton",
//             duration: "3:36" ,
//             image: "https://i.scdn.co/image/ab67616d0000b273444bab1a00d7bdb978bd8d70",
//             favorito: false,
//         },
//     ];

const inicializacion = () => {
    const data  = [
        {
            id: 1 ,
            title: "Dance The Night",
            artist: "Dua Lipa",
            gender: "Pop",
            duration: "2:57" ,
            image: "https://lastfm.freetls.fastly.net/i/u/500x500/c7c9d41e50a621bc5e23b45ec229705a.jpg",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Far.pinterest.com%2Fpin%2F502714377159900195%2F&psig=AOvVaw2xPZfj5rp4BHErgP5snN8M&ust=1691443543257000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMCA7Zv8yIADFQAAAAAdAAAAABAE",
            song1: "Levitating" ,
            song2: "One kiss" ,
            song3: "New Rules",
        },
        {
            id: 2 ,
            title: "Cruel Summer",
            artist: "Taylor Swift",
            gender: "Pop",
            duration: "2:58" ,
            image: "https://jenesaispop.com/wp-content/uploads/2019/06/taylor-swift.jpg" ,
            favorito: false,
            artistaimage: "https://w0.peakpx.com/wallpaper/132/895/HD-wallpaper-taylor-swift-reputation-album-reputation-taylor-swift-reputation-tour-taylor-swift-reputation.jpg",
            song1: "Bad Blood",
            song2: "Don't Blame me" ,
            song3: "Blank Space",
        },
        {
            id: 3 ,
            title: "LALA",
            artist: "Myke Towers",
            gender: "Pop",
            duration: "3:18" ,
            image:"https://i1.sndcdn.com/artworks-2h9w1cyESonW-0-t500x500.jpg" ,
            favorito: false,
    
            artistaimage: "https://i.pinimg.com/originals/0a/42/c7/0a42c7b8d2b1216b5ccff6451a913e6f.png",
            song1:"La Jeepeta" ,
            song2: "Pareja del año" ,
            song3: "Piensan",
        },
        {
            id: 4 ,
            title: "WHERE SHE GOES",
            artist: "Bad Bunny",
            gender: "Pop",
            duration: "2:34" ,
            image:"https://www.lahiguera.net/musicalia/artistas/varios/disco/0/tema/29353/where_she_goes-portada.jpg" ,
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-fnqeb&psig=AOvVaw1cpCyjRjIxB4P9HvZ1P4ag&ust=1691447002734000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCVgY2JyYADFQAAAAAdAAAAABAE",
            song1: "Me porto bonito",
            song2: "Titi me pregunto",
            song3: "La neverita",
        },
        {
            id: 5 ,
            title: "Flowers",
            artist: "Miley Cyrus",
            gender: "Pop",
            duration: "3:20" ,
            image: "https://cdns-images.dzcdn.net/images/cover/98610629a40996b61b3d24bd5ab8c2e1/500x500.jpg",
            favorito: false,
            artistaimage: "https://i.pinimg.com/736x/ca/e8/cb/cae8cb38fa6e3fa10a47cbefdea53121.jpg",
            song1: "Wrecking Ball",
            song2: "The Climb",
            song3: "See You Gain",
        },
        {
            id: 6 ,
            title: "S91",
            artist: "Karol G",
            gender: "Latina",
            duration: "2:53" ,
            image: "https://i.scdn.co/image/ab67616d0000b273890cfb712167a0186918644e",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fkarol-g&psig=AOvVaw3YVoCmLcUQ8aZt0Ev22aFu&ust=1691447111785000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDs9MCJyYADFQAAAAAdAAAAABAE",
            song1: "TQG" ,
            song2: "200 Copas",
            song3: "Provenza",
        },
        {
            id: 7 ,
            title: "BABY HELLO",
            artist: "Rauw Alejandro, Bizarrap",
            gender: "Latina",
            duration: "3:42" ,
            image: "https://linkstorage.linkfire.com/medialinks/images/09c3ce38-a6e7-4fdf-a2bd-67e84a384131/artwork-440x440.jpg",
            favorito: false,
            artistaimage: "https://wallpapers.com/images/featured/rauw-alejandro-kt1lznbu8k65wqb8.jpg",
            song1: "BESO",
            song2: "Toda",
            song3: "Baila conmigo",
        },
        {
            id: 8 ,
            title: "Ella Baila Sola",
            artist: "Eslabon Armado, Peso Pluma",
            gender: "Latina",
            duration: "2:46" ,
            image: "https://m.media-amazon.com/images/I/51FGq-xYTeL._UXNaN_FMjpg_QL85_.jpg",
            favorito: false,
            artistaimage:"https://play.google.com/store/apps/details?id=com.app.mexipesowallpaper&hl=en_US" ,
            song1: "Bzrp Music Session, Vol.55 ",
            song2: "La Bebe",
            song3: "Las Morras",
        },
        {
            id: 9 ,
            title: "ADIOS",
            artist: "Maria Becerra",
            gender: "Latina",
            duration: "2:41" ,
            image: "https://i.scdn.co/image/ab67616d0000b27377ec4341ebb8a0dbfe2df739",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapercave.com%2Fmaria-becerra-wallpapers&psig=AOvVaw3Cm-f0kZN2NSY5GPWLGeRN&ust=1691447267419000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjcnYuKyYADFQAAAAAdAAAAABAI",
            song1: "Ojala",
            song2: "Automatico",
            song3: "La nena de Argentina",
        },
        {
            id: 10 ,
            title: "COCO LOCO",
            artist: "Maluma",
            gender: "Latina",
            duration: "2:47" ,
            image: "https://linkstorage.linkfire.com/medialinks/images/a3facb3d-ddeb-4371-af41-a3cc5c7f7841/artwork-440x440.jpg",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Fwallpapers%2Fmaluma-sobrio-music-video-v7g9mx08dkx7av78.html&psig=AOvVaw3kIYp_KJSiPLet9XBFSMqX&ust=1691447314772000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDk2KGKyYADFQAAAAAdAAAAABAJ",
            song1: "Cuatro Babys",
            song2: "Felices los 4",
            song3: "Hawai" ,
        },
        {
            id: 11 ,
            title: "Hot In Herre",
            artist: "Nelly",
            gender: "Hip Hop",
            duration: "3:48" ,
            image: "https://i.scdn.co/image/ab67616d0000b273a8b9f97b9ea065b9a857e93f",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fnelly&psig=AOvVaw2d_4_ljR4zZX8ZeOe4sZ73&ust=1691447355784000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIihtbWKyYADFQAAAAAdAAAAABAE",
            song1: "Dilemma",
            song2: "Just a dream",
            song3: "Ride with me",
        },
        {
            id: 12 ,
            title: "The Real Slim Shady",
            artist: "Eminem",
            gender: "Hip Hop",
            duration: "4:44" ,
            image: "https://f4.bcbits.com/img/a0183287409_65",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapersafari.com%2Feminem-iphone-wallpaper%2F&psig=AOvVaw2tzssBzFr0SkOIUNyO7J-g&ust=1691447393562000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODNrMeKyYADFQAAAAAdAAAAABAE",
            song1: "Rap God",
            song2: "Lose YourSelf",
            song3: "Lighters",
        },
        {
            id: 13 ,
            title: "In My Feelings",
            artist: "Drake",
            gender: "Hip Hop",
            duration: "3:37" ,
            image: "https://lastfm.freetls.fastly.net/i/u/ar0/a73396862c4c2326bae95f73b0a4ac64.jpg",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fdrake&psig=AOvVaw21y1v3QTwfTiOcaZf77ZPT&ust=1691447417974000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCODu_dKKyYADFQAAAAAdAAAAABAE",
            song1: "Know Yourself",
            song2: "Worst Behavior",
            song3: "The Ride",
        },
        {
            id: 14 ,
            title: "hARAkiRi",
            artist: "Duki, C.R.O",
            gender: "Hip Hop",
            duration: "2:49" ,
            image: "https://i.scdn.co/image/ab67616d0000b2737eb80f8193b2d744df5058c0",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fsearch%3Fq%3Dduki&psig=AOvVaw2BaPrKl7BD2mepDiw4Qi3w&ust=1691448623989000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNiS_pGPyYADFQAAAAAdAAAAABAE",
            song1: "RockStar",
            song2: "Si te Sentis Sola",
            song3: "Givenchy",
        },
        {
            id: 15 ,
            title: "FEEL ME??",
            artist: "Trueno",
            gender: "Hip Hop",
            duration: "3:07" ,
            image: "https://i.scdn.co/image/ab67616d0000b27385de3ee7edaa01757845dc6a",
            favorito: false,
            artistaimage: "https://w0.peakpx.com/wallpaper/997/862/HD-wallpaper-trueno-argentina-comuna-cuatro-fms-mateo-palacios-rap-trap.jpg",
            song1: "Mamichula",
            song2: "Dance Crip",
            song3: "Salimo de noche",
        },
    
        {
            id: 16 ,
            title: "Prófugos",
            artist: "Soda Stereo",
            gender: "Rock",
            duration: "5:20" ,
            image: "https://i.scdn.co/image/ab67616d0000b273e885d6895a32a612813bf6d3",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffmrockandpop.com%2Fnoticias%2Fmusica%2Fsoda-stereo-comparte-el-ultimo-concierto&psig=AOvVaw2shEnxK3uSIvNfqmqYTcFD&ust=1691448891879000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCe5JGQyYADFQAAAAAdAAAAABAQ",
            song1: "De musica ligera",
            song2: "Signos",
            song3: "Nada Personal",
        },
        {
            id: 17 ,
            title: "Luna de Miel en la Mano",
            artist: "Virus",
            gender: "Rock",
            duration: "5:16" ,
            image: "https://i.scdn.co/image/ab67616d0000b273292c1ca632a1e120d1208c95",
            favorito: false,
            artistaimage: "https://i.pinimg.com/originals/d5/92/b9/d592b940fa5fcfe802a349f68f587832.jpg",
            song1: "Pronta entrega",
            song2: "Imagenes Paganas",
            song3: "Amor descartable",
        },
        {
            id: 18 ,
            title: "La Bifurcada",
            artist: "Memphis La Blusera",
            gender: "Rock",
            duration: "4:36" ,
            image: "https://i.scdn.co/image/ab67616d0000b2738fbd25be9c3efc36f01f6dcb",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FMemphisLaBluse%2Fstatus%2F860871226734018563&psig=AOvVaw2-coats7og4qF_Ob1Mu1r4&ust=1691448799053000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLCJvuWPyYADFQAAAAAdAAAAABBU",
            song1: "Monton de nada",
            song2: "Animal Feliz",
            song3: "Se necesita",
        },
        {
            id: 19 ,
            title: "Cuando estés acá",
            artist: "La Renga",
            gender: "Rock",
            duration: "4:55" ,
            image: "https://i.scdn.co/image/ab67616d0000b273a2d9ead62b53a0e9fa01182d",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.rollingstone.com%2Fchizzo-habla-con-rolling-stone-sobre-la-pelicula-rutera-de-la-renga-la-psicodelia-su-ultimo-disco-y-los-viajes-inspiradores-arg%2F&psig=AOvVaw0nn9tANWwOP12_UnYJCCwR&ust=1691448834830000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJjRyfaPyYADFQAAAAAdAAAAABAE",
            song1: "La balada del Diablo y la Muerte",
            song2: "Triste Cancion de Amor",
            song3: "El revelde",
        },
        {
            id: 20 ,
            title: "Ji Ji Ji",
            artist: "Patricio Rey y sus Redonditos de Ricota",
            gender: "Rock",
            duration: "5:34" ,
            image: "https://i.scdn.co/image/ab67616d0000b273c7c1ffa44473871a6f004786",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fsearch%3Fq%3Dlos%2Bredondos&psig=AOvVaw2nLDl77TVJCDHh94FkbCD9&ust=1691448934892000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCICnnaaQyYADFQAAAAAdAAAAABAE",
            song1: "El pibe de los Astilleros",
            song2: "Un poco de amor frances",
            song3: "Perro Dinamita",
        },
        {
            id: 21 ,
            title: "Te Vas a Arrepentir",
            artist: "La Nueva Luna",
            gender: "Cumbia",
            duration: "3:24" ,
            image: "https://i.scdn.co/image/ab67616d00001e0226e4d1680cacd81ac0ebe194",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F01Wp25ijDeBQtUZtjMCgdj&psig=AOvVaw300xqZKC0ML8FCG248RsZX&ust=1691448982272000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCz7ryQyYADFQAAAAAdAAAAABAE",
            song1: "Y ahora te vas",
            song2: "Hojita Seca",
            song3: "No me lo creo",
        },
        {
            id: 22 ,
            title: "Olvídala",
            artist: "Los Palmeras",
            gender: "Cumbia",
            duration: "4:50" ,
            image: "https://i.scdn.co/image/ab67616d0000b2736665b7cb7ed27000d3d9cf1a",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnexodiario.com%2Flos-palmeras-cumplen-45-anos-los-escenarios%2F&psig=AOvVaw0pT1R0oNznebli6WsMdVaI&ust=1691449061942000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOjUgOOQyYADFQAAAAAdAAAAABAE",
            song1: "Bombon Asesino",
            song2: "Soy Sabalero",
            song3: "Aprenderas a llorar",
        },
        {
            id: 23 ,
            title: "Yo Me Enamoré",
            artist: "Amar Azul",
            gender: "Cumbia",
            duration: "3:12" ,
            image: "https://i.scdn.co/image/ab67616d0000b273387b7088236062cd0b1a1527",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopen.spotify.com%2Ftrack%2F3hG37SKeyZaTNQbqmNIzSP&psig=AOvVaw0NJYqWXBoO6i8hF-1wlOUZ&ust=1691449012012000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJD__sqQyYADFQAAAAAdAAAAABAE",
            song1: "Yo tomo licor",
            song2: "Explicale",
            song3: "El polvito del amor",
        },
        {
            id: 24 ,
            title: "Mentirosa",
            artist: "Rafaga",
            gender: "Cumbia",
            duration: "3:15" ,
            image: "https://i.scdn.co/image/ab67616d0000b2733e79988a4e5af63f2a239450",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.discogs.com%2Fartist%2F1007696-Rafaga&psig=AOvVaw3Bt5XfdhogufPSFUwWx2ff&ust=1691449106788000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJi9l_iQyYADFQAAAAAdAAAAABAJ",
            song1: "Muero de frio",
            song2: "Devuelveme la vida",
            song3: "Una cerveza",
        },
        {
            id: 25 ,
            title: "Fuiste",
            artist: "Gilda",
            gender: "Cumbia",
            duration: "3:03" ,
            image: "https://i.scdn.co/image/ab67616d0000b2733540dd039ad4a425cf2522f4",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fconpacto.com.ar%2Fgilda-cumpliria-60-anos-la-vigencia-de-una-artista-que-se-transformo-en-leyenda%2F&psig=AOvVaw21ulmy8cUFVTk2OJ0aV4XW&ust=1691449146690000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJiDm4uRyYADFQAAAAAdAAAAABAR",
            song1: "No me arrepiento de este amor",
            song2: "No es mi despedida",
            song3: "Corazon Valiente",
        },
        {
            id: 26 ,
            title: "Lo Que Pasó, Pasó",
            artist: "Daddy Yankee",
            gender: "Reggaeton",
            duration: "3:31" ,
            image: "https://i.scdn.co/image/ab67616d0000b2736bdcdf82ecce36bff808a40c",
            favorito: false,
            artistaimage: "https://e0.pxfuel.com/wallpapers/79/953/desktop-wallpaper-daddy-yankee.jpg",
            song1: "Llamada de Emergencia",
            song2: "Con calma",
            song3: "Limbo",
        },
        {
            id: 27 ,
            title: "Es un Secreto",
            artist: "Plan B",
            gender: "Reggaeton",
            duration: "3:12" ,
            image: "https://i.scdn.co/image/ab67616d0000b2734787a6dc1c2b9b3bedec9f7d",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sandiegouniontribune.com%2Fen-espanol%2Fsdhoy-el-duo-de-regueton-plan-b-prepara-un-nuevo-disco-2013may28-story.html&psig=AOvVaw0H567Tbu_au_PoBVTNwy4E&ust=1691449263321000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIi-7MKRyYADFQAAAAAdAAAAABAE",
            song1: "Si no le contesto",
            song2: "Fanatica sensual",
            song3: "Mi vecinita",
        },
        {
            id: 28 ,
            title: "Ella y Yo",
            artist: "Aventura, Don Omar",
            gender: "Reggaeton",
            duration: "4:28" ,
            image: "https://i.scdn.co/image/ab67616d0000b2736bb920cebbe9cd79eccaf0e6",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Felcomercio.pe%2Fluces%2Fmusica%2Faventura-historia-grupo-bachata-recogida-libro-noticia-514195-noticia%2F&psig=AOvVaw1ZCJzYAJ2WOk4AaMRfM_EW&ust=1691449332998000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjQheSRyYADFQAAAAAdAAAAABAJ",
            song1: "Dile al amor",
            song2: "Obsecion",
            song3: "El malo",
        },
        {
            id: 29 ,
            title: "Efecto",
            artist: "Bad Bunny",
            gender: "Reggaeton",
            duration: "3:33" ,
            image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
            favorito: false,
            artistaimage: "https://www.lahiguera.net/musicalia/artistas/varios/disco/0/tema/29353/where_she_goes-portada.jpg",
            song1: "Soy Peor",
            song2: "Amorfoda",
            song3: "Booker T",
        },
        {
            id: 30 ,
            title: "Yandel 150",
            artist: "Yandel, Feid",
            gender: "Reggaeton",
            duration: "3:36" ,
            image: "https://i.scdn.co/image/ab67616d0000b273444bab1a00d7bdb978bd8d70",
            favorito: false,
            artistaimage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.elinformadorve.com%2F13%2F01%2F2023%2Factualidad%2Fyandel-presenta-su-nuevo-disco-resistencia%2F&psig=AOvVaw1uoFjG29PZY04pFxTdB0TR&ust=1691449371216000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNC5nfaRyYADFQAAAAAdAAAAABAJ",
            song1: "Algo me gusta de ti",
            song2: "Besos moja2",
            song3: "Nunca me olvides",
        },
    ];
    
    data.forEach((item)=> {
        let canc = new Cancion (
            item.id,
            item.title,
            item.artist,
            item.gender,
            item.duration,
            item.image,
            item.favorito,
            item.artistaimage,
            item.song1,
            item.song2,
            item.song3,
        );
        canciones.push(canc);
    });
    localStorage.setItem("canciones", JSON.stringify(canciones));
};
    


if (canciones == 0){
    inicializacion();
};