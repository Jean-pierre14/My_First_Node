import exp from 'express'

const app = exp()

app.get("/", (request, response) => {
    response.json("Cool")
})
app.listen(7000, (err) => {
    if (err) throw err.message
    console.log(`Server run on port: 7000`)
})