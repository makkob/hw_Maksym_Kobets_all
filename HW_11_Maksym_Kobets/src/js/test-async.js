let url = "http://localhost:3000/books";

async function getBooks(url) {
    let res = await fetch(url);
    console.log(res);
}

getBooks(url);
