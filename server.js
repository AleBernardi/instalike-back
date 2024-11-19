import express from 'express';
import { MongoClient } from 'mongodb';

const posts = [
    {
        id: 1,
        descricao: "Paisagem deslumbrante ao pôr do sol",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Cachorro fofo fazendo uma careta",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 3,
        descricao: "Comida deliciosa e colorida",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 4,
        descricao: "Cidade vibrante à noite",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 5,
        descricao: "Natureza exuberante em uma floresta",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 6,
        descricao: "Arte abstrata e colorida",
        imagem: "https://placecats.com/millie/300/150",
    }
];

const uri = "mongodb+srv://alexandrerafaelbernardi:kyHCcT02mPXkskmj@cluster0.r50au.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(express.json());

async function run() {
    try {
        const client = new MongoClient(uri);
  
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db("Cluster0");
  
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
}

app.listen(3000, () => {
    console.log('Servidor escutando!');
    run().catch(console.dir);
});

function buscarPostPorID(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/post/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});