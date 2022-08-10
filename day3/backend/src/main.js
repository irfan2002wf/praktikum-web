import express from "express";
const app = express();
app.use(express.json());
const port = 7000;

    app.get("/", (req, res) => {
    res.send({
        nama: "Muhammad Irfan F",
    });
    });
    app.get("/makanan", (req, res) => {
    res.send([
        {
        id: 1,
        nama: "Indomie",
        rasa: "Soto",
        },
        {
        id: 2,
        nama: "Nasi Goreng",
        rasa: "Ayam",
        },
        {
        id: 3,
        nama: "Ayam",
        rasa: "pedas",
        },
        
    ]);
    });
    app.get("/minuman", (req, res) => {
    res.send([
        {
        id: 1,
        nama: "Nutrisari",
        rasa: "Jeruk nipis",
        },
        {
        id: 2,
        nama: "marimas",
        rasa: "jueruk",
        },
        {
        id: 3,
        nama: "Aqua",
        rasa: "galon",
        },
        {
        id: 4,
        nama: "teh",
        rasa: "manis",
        },
    ]);
    });
    app.po;
    app.post("/create", (req, res) => {
    res.send({
        nama: req.body,
    });
    });

    app.listen(port, () => {
    console.log(`Aplikasi Berjalan di port ${port}`);
    });