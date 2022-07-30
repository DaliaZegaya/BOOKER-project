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
    'book1.webp',
    'book2.webp',
    'book3.webp',
    'book4.webp',
    'book5.webp',
    'book6.webp',
    'book7.webp',
    'book8.webp',
    'book9.webp',
    'book10.webp',
    'book11.webp',
    'book12.jpg',
    'book13.webp',
    'book14.webp',
    'book15.webp',
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
//     // gifDiv.innerHTML= '<img style= "width:7vw" src= /images/loading.gif> </img>'
//         getBooks()
//         .then((result) => {
//             result.forEach((item,index) => {
//                 mainBooks.innerHTML +=
//                     `<div class="card col-md-4 col-sm-12">
//                        <img src="/images/${imagesArray[index] ? imagesArray[index] : imagesArray[0]}" class="card-img-top"/>
//                         <div class="card-body card-page">
//                         <p>TITLE:${item.TITLE}</p>
//                         <p>AUTHOR:${item.AUTHOR}</p>
//                         <p>LANG:${item.LANG}</p>
//                         <p>PHYSICAL_DESCRIPTION:${item.PHYSICAL_DESCRIPTION}</p>
//                          <p>YEAR:${item.YEAR}</p>
//                        </div>
//                     </div>`;
//             });
//         })
//         .catch(() => { })
//         .finally(() => {
//             //   gifDiv.innerHTML= ""
//         });

// }
// printBooksToScreen();