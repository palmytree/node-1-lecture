const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 4000

app.use(express.json())

app.get('/', (req, res) => {
	res.send(`Hello! Your IP is: ${req.ip}`)
})

app.get('/api/jeff', (req, res) => {
	res.status(200).send(`Hello! You requested API`)
	console.log(`Request # ${++count}`)
})

app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id', ctrl.getUserById)
app.get( '/api/users/:user_id/firstname', ctrl.getUserFirstName )

app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
