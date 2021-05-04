import express from 'express'

import './database'
import { routes } from './routes'

const app = express()

app.use(express.json())

app.use(routes)

/*app.get("/", (req, res) => {
    return res.json({
        "message": "Oi"
    })
})

app.post("/users", (req, res) => {
    return res.json({"message": "oi"})
})*/

app.listen(3333, () => console.log("Server rodando na portinha 3333"))