import express from 'express'

const app = express()

app.get("/", (req, res) => {
    return res.json({
        "message": "Oi"
    })
})

app.post("/users", (req, res) => {
    return res.json({"message": "oi"})
})

app.listen(3333, () => console.log("Server rodando na portinha 3333"))