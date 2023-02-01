import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//TESTE
app.get("/ping", async (req: Request, res: Response) => {
    try{
        res.status(200).send("Pong")
    } catch {

    }
})

//createUser (signup)
app.post("/users", async (req: Request, res: Response) => {
    try{

    } catch {

    }
})

//getUser (login)
app.get("/user", async (req: Request, res: Response) => {
    try{

    } catch {

    }
})

//getPosts
app.get("/posts", async (req: Request, res: Response) => {
    try{

    } catch {

    }
})

//createPost
app.post("/posts", async (req: Request, res: Response) => {
    try{

    } catch {

    }
})

//editPost
app.put("/posts/:id", async (req: Request, res: Response) => {
    try{

    } catch {

    }
})

//deletePost
app.delete("/posts/:id", async (req: Request, res: Response) => {
    try{

    } catch {

    }
})

//likeDislikePost
app.get("/posts/:id/likes", async (req: Request, res: Response) => {
    try{

    } catch {

    }
})