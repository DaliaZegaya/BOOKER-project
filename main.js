// async function getBooks() {

//     return await fetch('https://www.abibliadigital.com.br/api/books')
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));

// }
// getBooks()

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '03944f82f9msh052ffba7b5edfbap1dc7aajsn6312c1fc7ecf',
		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
	}
};

fetch('https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));