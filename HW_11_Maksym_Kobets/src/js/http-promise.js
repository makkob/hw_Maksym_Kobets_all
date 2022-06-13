console.log("http");

// axios.post();
// axios.get();
// axios.put();
// axios.patch();
// axios.delete();

class HTTP {
    get(url, options = {}) {
        return new Promise((resolve, reject) => {
            return fetch(url, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    post(url, data) {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };

        return new Promise((resolve, reject) => {
            return fetch(url, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    patch(url, data, ID) {
        const options = {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };

        return new Promise((resolve, reject) => {
            return fetch(url + "/" + ID, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }

    delete(url, ID) {
        const options = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };

        return new Promise((resolve, reject) => {
            return fetch(url + "/" + ID, options)
                .then((res) => res.json())
                .then((data) => resolve(data))
                .catch((err) => reject(err));
        });
    }
}

const http = new HTTP();
//====================================================
// GET
http.get("http://localhost:3000/books")
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
//     rating: 9.5,
// };

// http.post("http://localhost:3000/books", book);
// =========================================

// PATCH
// let book = {
//     rating: 10.0,
// };

// http.patch("http://localhost:3000/books", book, 3);
// ============================================
// DELETE

// http.delete("http://localhost:3000/books", 2);
