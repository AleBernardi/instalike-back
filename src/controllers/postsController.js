import { getTodosPosts } from "../models/postsModels.js";

export async function listarPosts(req, res) { // Define uma rota GET para a URL "/posts"
    const posts = await getTodosPosts(); // Chama a função para obter todos os posts
    res.status(200).json(posts); // Envia os posts como resposta em formato JSON com o status 200 (OK)
}