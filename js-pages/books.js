// AUTHOR: "Burg, David F."
// ISBN: "9780415924986"
// LANG: "eng"
// PHYSICAL_DESCRIPTION: "XXXIV, 502 p."
// PUBLISHER: "Routledge"
// PUBLISHER_CITY: "New York"
// TITLE: "A world history of tax rebellions"
// YEAR: "2003"
// id: 1

let imagesArray = [
    'https://images-na.ssl-images-amazon.com/images/I/51AoMlOVUiL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/71FXfPs-iyL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81a1hKsCKbL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/71ZDoj3jYrL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/71jte84ADvL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81Z8o7F5bRL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81PdOsc95OL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81qz88X-X2L.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/71YFUXP8stL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81hOjmfmNCL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61DNaq5k7JL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/41owgrUS7XL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61H8Qhm0vsL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81RzfKsSv0L.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/71YEXRcbHOL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81ESXUYskDL.jpg'
]


// async function getBooks() {
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '03944f82f9msh052ffba7b5edfbap1dc7aajsn6312c1fc7ecf',
//             'X-RapidAPI-Host': 'books39.p.rapidapi.com'
//         }
//     };

//     return await fetch('https://books39.p.rapidapi.com/CZFA4F/books', options)
//         .then(response => response.json())
//         // .then(response => console.log(response))
//         .catch(err => console.error(err));
// }

// function printBooksToScreen() {
//         // gifDiv.innerHTML= '<img style= "width:7vw" src= /images/loading.gif> </img>'
//         getBooks()
//             .then((result) => {
//                 for(let i =0; i<16;i++){
//                     mainBooks.innerHTML +=
//                         `<div class="card col-md-3 col-sm-6 books-card">
//                            <img src="${imagesArray[i] ? imagesArray[i] : imagesArray[0]}" class="card-img-top books-img"/>
//                             <div class="card-body card-page">
//                             <p class="">${result[i].TITLE}</p>
//                             <p>AUTHOR:${result[i].AUTHOR}</p>
//                             <p>LANG:${result[i].LANG}</p>
//                              <p>YEAR:${result[i].YEAR}</p>
//                            </div>
//                         </div>`;
//                 }
//             })
//             .catch(() => { })
//             .finally(() => {
//                 //   gifDiv.innerHTML= ""
//             });

//     }
//      printBooksToScreen();




let harryPotterArray = [
    'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/91t5-Juqt9L.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81EbEWM54ML.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61fC7BtuI4L.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/915i0eI3J8L.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81TxOqW-jaL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81YOuOGFCJL.jpg'

]

async function getHarryPotterBooks() {
    return await fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/books')
        .then(response => response.json())
        // .then(response =>{ console.log(response)})
        .catch(err => console.error(err));

}

function printHarryPotterToScreen() {
    getHarryPotterBooks()
        .then((result) => {
            result.forEach((obj, i) => {
                harryPotter.innerHTML +=
                    `<div id="${obj.id}" class="card col-md-3 col-sm-6 books-card">
                          <img src="${harryPotterArray[i] ? harryPotterArray[i] : harryPotterArray[0]}" class="card-img-top harry-img"/>
                            <div class="card-body card-page">
                            <p class="text-center">${obj.title}</p>
                            <p>AUTHOR:${obj.author}</p>
                            <p>release Day:${obj.releaseDay}</p>
                            <button onclick="someFunc(${i})">hhh</button>
                           </div>
                        </div>`;

            });

        })
}
printHarryPotterToScreen()
// <p>DESCRIPTION:${obj.description}</p>
// author: "J. K. Rowling"
// description: "On his birthday, Harry Potter discovers that he is the son of two well-known wizards, from whom he has inherited magical powers. He must attend a famous school of magic and sorcery, where he establishes a friendship with two young men who will become his companions on his adventure. During his first year at Hogwarts, he discovers that a malevolent and powerful wizard named Voldemort is in search of a philosopher's stone that prolongs the life of its owner."
// id: 1
// releaseDay: "June 26, 1997"
// title: "Harry Potter and the Sorcerer's Stone"


// function someFunc (text){
//     console.log(text);
    
//     // document.querySelector('#harryPotter').innerHTML= ` <img src="${harryPotterArray[id]}" class="card-img-top harry-img"/>`

// }