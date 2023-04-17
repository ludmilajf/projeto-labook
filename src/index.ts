import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { userRouter } from './router/userRouter'

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.listen(Number(process.env.PORT), () => {
    console.log(`Servidor rodando na porta ${Number(process.env.PORT)}`)
})

//TESTE
app.get("/ping", (req: Request, res: Response) => {
        res.status(200).send("Pong!")
})

//createUser (signup)
app.post("/users", async (req: Request, res: Response) => {
    try{

    } catch {

    }
})

app.use("/users", userRouter)

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