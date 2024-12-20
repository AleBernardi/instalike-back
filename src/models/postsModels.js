import 'dotenv/config';
import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js'; // Importa a função para conectar ao banco de dados, definida em dbConfig.js

const conexao = await conectarAoBanco(process.env.MONGO_DB); // Conecta ao banco de dados MongoDB usando a string de conexão obtida da variável de ambiente MONGO_DB

export async function getTodosPosts() { // Função assíncrona para obter todos os posts do banco de dados
    const db = conexao.db("imersao-instalike"); // Obtém o banco de dados "imersao-instalike" da conexão
    const colecao = db.collection("posts"); // Obtém a coleção "posts" do banco de dados
    return colecao.find().toArray(); // Executa uma consulta para encontrar todos os documentos na coleção e retorna os resultados como um array
}

export async function criarPost(novoPost){
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, post){
    const db = conexao.db("imersao-instalike");
    const colecao = db.collection("posts");
    const objectId = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objectId)}, {$set:post});
}