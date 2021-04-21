import express from "express";

import "./database" //se for um arquivo index, ele reconhece mesmo sem referenciar
import { routes } from "./routes"

const app = express();

app.use(express.json())

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */
app.use(routes)


app.listen(3333, ()=> console.log("Server is running on port 3333"))
