class HTTP {
    async get(url, options = {}) {
        try {
            let response = await fetch(url, options);
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    }

    async post(url, data) {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };

        try {
            let response = await fetch(url, options);
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    }

    async patch(url, data, ID) {
        const options = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };

        try {
            let response = await fetch(url + "/" + ID, options);
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    }

    async delete(url, ID) {
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };

        try {
            let response = await fetch(url + "/" + ID, options);
            let data = await response.json();
            return data;
        } catch (err) {
            return err;
        }
    }
}

const http = new HTTP();
//====================================================
// GET
// http.get("http://localhost:3000/books")
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

http.get("https://jsonplaceholder.typicode.com/posts")
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    });

// ===========================================
// POST
// let book = {
//     title: "Филосовский камень",
//     author: "Дж. Роулинг",
//     genres: ["Фентези"],
//     rating: 10.0,
// };

// http.post("http://localhost:3000/books", book);
// =========================================

// PATCH
// let book = {
//     rating: 9.0,
// };

// http.patch("http://localhost:3000/books", book, 3);
// ============================================
// DELETE

// http.delete("http://localhost:3000/books", 7);
