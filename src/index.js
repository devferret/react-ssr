import express from 'express'
import renderer from './helpers/renderer'

const app = express()

app.use(express.static('public'))

app.get('/about', (req, res) => {
    res.send({ 
        Hi: "Hello !",
        Users: [
            {
                id: 1,
                name: "John"
            },
            {
                id: 2,
                name: "Manie"
            }
        ]
    })  
})

app.get('*', (req, res) => {
    res.send(renderer(req))  
})

app.listen(3000, () => {
    console.log('Listening on PORT 3000')
})