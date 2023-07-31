const data  = [
    {
        id: 1 ,
        title: "Dance The Night",
        artist: "Dua Lipa",
        gender: "Pop",
        duration: "2:57" ,
        image: "https://lastfm.freetls.fastly.net/i/u/500x500/c7c9d41e50a621bc5e23b45ec229705a.jpg",
        favorito: false,
    },
    {
        id: 2 ,
        title: "Cruel Summer",
        artist: "Taylor Swift",
        gender: "Pop",
        duration: "2:58" ,
        image: "https://jenesaispop.com/wp-content/uploads/2019/06/taylor-swift.jpg" ,
        favorito: false,
    },
    {
        id: 3 ,
        title: "LALA",
        artist: "Myke Towers",
        gender: "Pop",
        duration: "3:18" ,
        image:"https://i1.sndcdn.com/artworks-2h9w1cyESonW-0-t500x500.jpg" ,
        favorito: false,
    },
    {
        id: 4 ,
        title: "WHERE SHE GOES",
        artist: "Bad Bunny",
        gender: "Pop",
        duration: "2:34" ,
        image:"https://www.lahiguera.net/musicalia/artistas/varios/disco/0/tema/29353/where_she_goes-portada.jpg" ,
        favorito: false,
    },
    {
        id: 5 ,
        title: "Flowers",
        artist: "Miley Cyrus",
        gender: "Pop",
        duration: "3:20" ,
        image: "https://cdns-images.dzcdn.net/images/cover/98610629a40996b61b3d24bd5ab8c2e1/500x500.jpg",
        favorito: false,
    },
    {
        id: 6 ,
        title: "S91",
        artist: "Karol G",
        gender: "Latina",
        duration: "2:53" ,
        image: "https://i.scdn.co/image/ab67616d0000b273890cfb712167a0186918644e",
        favorito: false,
    },
    {
        id: 7 ,
        title: "BABY HELLO",
        artist: "Rauw Alejandro, Bizarrap",
        gender: "Latina",
        duration: "3:42" ,
        image: "https://linkstorage.linkfire.com/medialinks/images/09c3ce38-a6e7-4fdf-a2bd-67e84a384131/artwork-440x440.jpg",
        favorito: false,
    },
    {
        id: 8 ,
        title: "Ella Baila Sola",
        artist: "Eslabon Armado, Peso Pluma",
        gender: "Latina",
        duration: "2:46" ,
        image: "https://m.media-amazon.com/images/I/51FGq-xYTeL._UXNaN_FMjpg_QL85_.jpg",
        favorito: false,
    },
    {
        id: 9 ,
        title: "ADIOS",
        artist: "Maria Becerra",
        gender: "Latina",
        duration: "2:41" ,
        image: "https://i.scdn.co/image/ab67616d0000b27377ec4341ebb8a0dbfe2df739",
        favorito: false,
    },
    {
        id: 10 ,
        title: "COCO LOCO",
        artist: "Maluma",
        gender: "Latina",
        duration: "2:47" ,
        image: "https://linkstorage.linkfire.com/medialinks/images/a3facb3d-ddeb-4371-af41-a3cc5c7f7841/artwork-440x440.jpg",
        favorito: false,
    },
    {
        id: 11 ,
        title: "Hot In Herre",
        artist: "Nelly",
        gender: "Hip Hop",
        duration: "3:48" ,
        image: "https://i.scdn.co/image/ab67616d0000b273a8b9f97b9ea065b9a857e93f",
        favorito: false,
    },
    {
        id: 12 ,
        title: "The Real Slim Shady",
        artist: "Eminem",
        gender: "Hip Hop",
        duration: "4:44" ,
        image: "https://f4.bcbits.com/img/a0183287409_65",
        favorito: false,
    },
    {
        id: 13 ,
        title: "In My Feelings",
        artist: "Drake",
        gender: "Hip Hop",
        duration: "3:37" ,
        image: "https://lastfm.freetls.fastly.net/i/u/ar0/a73396862c4c2326bae95f73b0a4ac64.jpg",
        favorito: false,
    },
    {
        id: 14 ,
        title: "hARAkiRi",
        artist: "Duki, C.R.O",
        gender: "Hip Hop",
        duration: "2:49" ,
        image: "https://i.scdn.co/image/ab67616d0000b2737eb80f8193b2d744df5058c0",
        favorito: false,
    },
    {
        id: 15 ,
        title: "FEEL ME??",
        artist: "Trueno",
        gender: "Hip Hop",
        duration: "3:07" ,
        image: "https://i.scdn.co/image/ab67616d0000b27385de3ee7edaa01757845dc6a",
        favorito: false,
    },
    {
        id: 16 ,
        title: "Prófugos",
        artist: "Soda Stereo",
        gender: "Rock",
        duration: "5:20" ,
        image: "https://i.scdn.co/image/ab67616d0000b273e885d6895a32a612813bf6d3",
        favorito: false,
    },
    {
        id: 17 ,
        title: "Luna de Miel en la Mano",
        artist: "Virus",
        gender: "Rock",
        duration: "5:16" ,
        image: "https://i.scdn.co/image/ab67616d0000b273292c1ca632a1e120d1208c95",
        favorito: false,
    },
    {
        id: 18 ,
        title: "La Bifurcada",
        artist: "Memphis La Blusera",
        gender: "Rock",
        duration: "4:36" ,
        image: "https://i.scdn.co/image/ab67616d0000b2738fbd25be9c3efc36f01f6dcb",
        favorito: false,
    },
    {
        id: 19 ,
        title: "Cuando estés acá",
        artist: "La Renga",
        gender: "Rock",
        duration: "4:55" ,
        image: "https://i.scdn.co/image/ab67616d0000b273a2d9ead62b53a0e9fa01182d",
        favorito: false,
    },
    {
        id: 20 ,
        title: "Ji Ji Ji",
        artist: "Patricio Rey y sus Redonditos de Ricota",
        gender: "Rock",
        duration: "5:34" ,
        image: "https://i.scdn.co/image/ab67616d0000b273c7c1ffa44473871a6f004786",
        favorito: false,
    },
    {
        id: 21 ,
        title: "Te Vas a Arrepentir",
        artist: "La Nueva Luna",
        gender: "Cumbia",
        duration: "3:24" ,
        image: "https://i.scdn.co/image/ab67616d00001e0226e4d1680cacd81ac0ebe194",
        favorito: false,
    },
    {
        id: 22 ,
        title: "Olvídala",
        artist: "Los Palmeras",
        gender: "Cumbia",
        duration: "4:50" ,
        image: "https://i.scdn.co/image/ab67616d0000b2736665b7cb7ed27000d3d9cf1a",
        favorito: false,
    },
    {
        id: 23 ,
        title: "Yo Me Enamoré",
        artist: "Amar Azul",
        gender: "Cumbia",
        duration: "3:12" ,
        image: "https://i.scdn.co/image/ab67616d0000b273387b7088236062cd0b1a1527",
        favorito: false,
    },
    {
        id: 24 ,
        title: "Mentirosa",
        artist: "Rafaga",
        gender: "Cumbia",
        duration: "3:15" ,
        image: "https://i.scdn.co/image/ab67616d0000b2733e79988a4e5af63f2a239450",
        favorito: false,
    },
    {
        id: 25 ,
        title: "Fuiste",
        artist: "Gilda",
        gender: "Cumbia",
        duration: "3:03" ,
        image: "https://i.scdn.co/image/ab67616d0000b2733540dd039ad4a425cf2522f4",
        favorito: false,
    },
    {
        id: 26 ,
        title: "Lo Que Pasó, Pasó",
        artist: "Daddy Yankee",
        gender: "Reggaeton",
        duration: "3:31" ,
        image: "https://i.scdn.co/image/ab67616d0000b2736bdcdf82ecce36bff808a40c",
        favorito: false,
    },
    {
        id: 27 ,
        title: "Es un Secreto",
        artist: "Plan B",
        gender: "Reggaeton",
        duration: "3:12" ,
        image: "https://i.scdn.co/image/ab67616d0000b2734787a6dc1c2b9b3bedec9f7d",
        favorito: false,
    },
    {
        id: 28 ,
        title: "Ella y Yo",
        artist: "Aventura, Don Omar",
        gender: "Reggaeton",
        duration: "4:28" ,
        image: "https://i.scdn.co/image/ab67616d0000b2736bb920cebbe9cd79eccaf0e6",
        favorito: false,
    },
    {
        id: 29 ,
        title: "Efecto",
        artist: "Bad Bunny",
        gender: "Reggaeton",
        duration: "3:33" ,
        image: "https://i.scdn.co/image/ab67616d0000b27349d694203245f241a1bcaa72",
        favorito: false,
    },
    {
        id: 30 ,
        title: "Yandel 150",
        artist: "Yandel, Feid",
        gender: "Reggaeton",
        duration: "3:36" ,
        image: "https://i.scdn.co/image/ab67616d0000b273444bab1a00d7bdb978bd8d70",
        favorito: false,
    },
];

const openModal = document.querySelector ('.open-modal')
const modal= document.querySelector('.modal')


openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal-show');
})

function Mostrarobjetos (id){
    const canciones= data.find (item=> item.id===id);

    if(canciones){
    const modal=document.getElementById("modal")
    const imagen=document.getElementById("imagen")
    const cancion=document.getElementById("cancion")
    const artista=document.getElementById("artista")
    const genero=document.getElementById("genero")
    const duracion=document.getElementById("duracion")

    imagen.textContent=canciones.image
    cancion.textContent=canciones.title
    artista.textContent=canciones.artist
    genero.textContent=canciones.gender
    duracion.textContent=canciones.duration

    openModal()

}

}
