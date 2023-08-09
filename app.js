
// const canciones = JSON.parse(localStorage.getItem("canciones")) || [];

// Funcion Inicializacion

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
            artistaimage: "https://www.cronista.com/files/image/478/478038/6320982be8754.jpg",
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
            artistaimage: "https://yt3.googleusercontent.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj",
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
            artistaimage: "https://i.blogs.es/096aa3/dl_u529030_072/1366_2000.jpeg",
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
            artistaimage: "https://www.billboard.com/wp-content/uploads/2023/06/karol-g-2023-cr-Leo-Arguello-billboard-espanol-1548.jpg",
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
            artistaimage:"https://e00-mx-marca.uecdn.es/mx/assets/multimedia/imagenes/2023/03/30/16801439792829.jpg" ,
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
            artistaimage: "https://media.sitioandino.com.ar/p/51754da2e1192549df4ba7c0ba3264f5/adjuntos/335/imagenes/000/589/0000589647/790x0/smart/maria-becerra-agota-las-entradas-15-conciertos-tan-solo-un-par-horas-504528.jpg",
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
            artistaimage: "https://d2yoo3qu6vrk5d.cloudfront.net/pulzo-lite/images-resized/PP2833960-s-o.webp",
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
            artistaimage: "https://cdns-images.dzcdn.net/images/artist/958412ccb4c4da8d3978ec885d0a09ef/500x500.jpg",
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
            artistaimage: "https://images.hola.com/imagenes/actualidad/20210104182034/eminem-hijas-adoptivas/0-906-625/eminem-t.jpg",
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
            artistaimage: "https://static.independentespanol.com/2022/06/17/07/newFile-1.jpg",
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
            artistaimage: "https://fotos.perfil.com/2023/02/03/trim/1280/720/duki-revelo-quienes-son-sus-artistas-favoritos-1503535.jpg",
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
            artistaimage: "https://indiehoy.com/wp-content/uploads/2020/12/soda-stereo-1-1280x720.jpg",
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
            artistaimage: "https://diariohoynet.nyc3.cdn.digitaloceanspaces.com/adjuntos/galerias/000/294/0000294485.jpg",
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
            artistaimage: "https://www.lavoz.com.ar/resizer/FV7o8-anQ6y8GHuLB8v4huleTVM=/1023x1245/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/WLEZKK2CGZC6PCCAQ5AL3IKKAE.jpg",
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
            artistaimage: "https://www.elextremosur.com/files/image/28/28745/63ad78beebb16.jpg",
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
            artistaimage: "https://www.infocanuelas.com/app/media/iluminara-la-nueva-luna-tocara-en-la-parrilla-don-cipriano-22518.jpg",
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
            artistaimage: "https://imgs.elpais.com.uy/dims4/default/6bcccc8/2147483647/strip/true/crop/935x643+32+0/resize/1440x990!/quality/90/?url=https%3A%2F%2Fel-pais-uruguay-production-web.s3.amazonaws.com%2Fbrightspot%2Fuploads%2F2020%2F08%2F14%2F5f3721c56d45f.jpeg",
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
            artistaimage: "https://upload.wikimedia.org/wikipedia/commons/8/86/Amar-Azul-Grupo-musical-de-Cumbia-1.jpg",
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
            artistaimage: "https://www.lavoz.com.ar/resizer/2lalkbl4F6F6V-B0LzqyimztCkg=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/2OUFKDJJR5CNZJ2QBA2CMZ2NFU.jpg",
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
            artistaimage: "https://media.tycsports.com/files/2021/09/07/328820/gilda_862x485_wmk.jpg?v=1",
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
            artistaimage: "https://www.cmtv.com.ar/imagenes_artistas/2379.webp?Plan%20B",
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
            artistaimage: "https://akamai.sscdn.co/uploadfile/letras/fotos/b/b/d/3/bbd3c23f243daa4fdec5378e58fb4855.jpg",
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
            artistaimage: "https://yt3.googleusercontent.com/7tCfeCWH4arhsTM-4Rz4IxWieQbegzibeXlG-kbytAujdk5dr2K0gBb8NG0Cvk6lB1dPkjyd=s900-c-k-c0x00ffffff-no-rj",
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
            artistaimage: "https://akamai.sscdn.co/uploadfile/letras/fotos/8/c/1/a/8c1a7790a72bb8799f3696f71ab3e344.jpg",
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