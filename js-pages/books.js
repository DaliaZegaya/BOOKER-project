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
//     // gifDiv.innerHTML= '<img style= "width:7vw" src= /images/loading.gif> </img>'
//     getBooks()
//         .then((result) => {
//             for (let i = 0; i < 20; i++) {
//                 mainBooks.innerHTML +=
//                     `<div class="col-md-3 col-sm-12 m6 w3-margin-bottom">
//                      <div class="w3-card">
//                        <img src="${imagesArray[i] ? imagesArray[i] : imagesArray[0]}" alt="John"
//                        style="width:100%; height:55vh ;">
//                        <div class="w3-container">
//                        <p class="text-center">${result[i].TITLE}</p>
//                        <p>AUTHOR:${result[i].AUTHOR}</p>
//                        <p>release Day:${result[i].YEAR}</p>
//                        <p><button onclick=allBooks(${result[i].id}) class="btn bg-warning  w3-button w3-light-grey w3-block">READ</button></p>
//                      </div>
//                      </div>
//                      </div>`

//             }
//         })
//         .catch(() => { })
//         .finally(() => {
//             //   gifDiv.innerHTML= ""
//         });

// }
// printBooksToScreen();


function allBooks(id) {
    getBooks().then(data => {
        document.getElementById("mainBooks").innerHTML =
            ` <div class="row description ">
              <div class="col-xl-6 col-lg-6 col-md-6 text-center" style="border:1px solid #ddd">
              <h2> ${data[id - 1].TITLE} </h2>
              <p>
              <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
            </ul>
              </p>
              <p>${data[id].AUTHOR}</p>
              <br/>
              <p>${data[id]['PUBLISHER_CITY']}</p>
              <p>
              dolor sit amet, consectetur adipisicing elit. A
              aliquam amet animi blanditiis consequatur debitis dicta
              distinctio, enim error eum iste libero modi nam natus
              perferendis possimus quasi sint sit tempora voluptatem. Est,
              exercitationem id ipsa ipsum laboriosam perferendis.
              <p>
              <br/>
              <button class="btn bg-warning"> <b> READ NOW </b> </button>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center" style="border:1px solid #ddd">
              <img src="${imagesArray[id - 1]}" alt="responsive webite"
              class="img-fluid mini-harry"  style="width:30vw ;">
              </div>
              </div>`
    })
}




let harryPotterArray = [
    'https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/91HHqVTAJQL.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/91t5-Juqt9L.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/81EbEWM54ML.jpg',
    'https://images-na.ssl-images-amazon.com/images/I/61fC7BtuI4L.jpgg',
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
                            <p>AUTHOR:${obj.authorc}</p>
                            <p>release Day:${obj.releaseDay}</p>
                            <button class="btn bg-warning w3-button w3-light-grey w3-block" onclick="harryPotterFunc(${obj.id})"> <b> READ </b> </button>
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


function harryPotterFunc(id) {
    getHarryPotterBooks().then(data => {
        document.getElementById("harryPotter").innerHTML =
            ` <div class="row description ">
              <div class="col-xl-6 col-lg-6 col-md-6 text-center" style="border:1px solid #ddd">
              <h2> ${data[id - 1].title} </h2>
              <p>
              <ul class="list-unstyled d-flex justify-content-center mb-0">
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
              <li>
                <i class="bi bi-star-fill text-warning"></i>
              </li>
            </ul>
              </p>
              <p>${data[id].author}</p>
              <br/>
              <p>${data[id]['description']}</p>
              <br/>
              <button class="btn bg-warning"> <b> READ NOW </b> </button>
              </div>

              <div class="col-xl-6 col-lg-6 col-md-6 d-flex justify-content-center">
              <img src="${harryPotterArray[id - 1]}" alt="responsive webite"
              class="img-fluid mini-harry"  style="width:30vw ;">
              </div>
              </div>`
    })
}








