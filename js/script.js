const imagesList = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];
//console.log(imagesList);

// INSERIMENTO DINAMICO DELLE IMMAGINI

// Trovare elemento "items" nella pagina
const imageElem = document.querySelector(".items");
//console.log(imageElem);

// Scorrere array
// Creare il div con immagine e aggiungere ad una stringa
let myInnerString = "";

//Ciclo forEach per inserimento dinamico delle immagini
imagesList.forEach((curImage) => {
    return myInnerString += 
        `
        <div class="item ">
            <img src= ${curImage.image} alt="">
            <h3 class = "img-title">${curImage.title}</h3>
            <p class = "img-text">${curImage.text}</p>
        </div>
        `
})
console.log(myInnerString);

// Aggiungere la stringa contenente tutti i div con le immagini all'interno dell'elemento "items"
imageElem.innerHTML += myInnerString

// MANIPOLAZIONE ELEMENTI: MOSTRARE IMMAGINI

// Impostare stato iniziale dello slide
// Dobbiamo prendere TUTTI gli elementi in pg che hanno classe item
const itemElem = document.querySelectorAll(".item")
console.log(itemElem)

let curImageIndex = 0; //indica indice elemento visibile in questo momento
itemElem[curImageIndex].classList.add("active");
console.log(itemElem);

// Creare event listener - gestione dello slider al click next
document.querySelector(".next").addEventListener("click", function () {
    // Se indice corrente è < di ultimo indice dell'array, togliere la classe "active" da elemento corrente, incrementare l'indice corrente e aggiungere classe "active" al nuovo elemento corrente; se indice corrente è === all'ultimo indice dell'array, rimuovere la classe "active" da elemento corrente, riportare l'indice corrente a 0, e aggiungere classe "active" al nuovo elemento corrente per ottenere ciclo infinito
    if (curImageIndex < itemElem.length - 1) {
        itemElem[curImageIndex].classList.remove("active");
        curImageIndex++;
        itemElem[curImageIndex].classList.add("active");
    } else if (curImageIndex === itemElem.length - 1) {
        itemElem[curImageIndex].classList.remove("active");
        curImageIndex = 0;
        itemElem[curImageIndex].classList.add("active");
    }
})

document.querySelector(".prev").addEventListener("click", function () {
    if (curImageIndex > 0) {
        itemElem[curImageIndex].classList.remove("active");
        curImageIndex--;
        itemElem[curImageIndex].classList.add("active");
    } else if (curImageIndex === 0) {
        itemElem[curImageIndex].classList.remove("active");
        curImageIndex = itemElem.length - 1;
        itemElem[curImageIndex].classList.add("active");
    }
})



