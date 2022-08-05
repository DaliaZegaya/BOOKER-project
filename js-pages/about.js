
async function getSomeBooks() {
    return await fetch("https://www.poemist.com/api/v1/randompoems")
        .then(response => response.json())
        .then(response =>{ console.log(response)})
        .catch(err => console.error(err));

}
getSomeBooks()