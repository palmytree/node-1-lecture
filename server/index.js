const express = require('express')
const app = express()
const ctrl = require('./controller')
const SERVER_PORT = 5000


//#region Middleware
app.use(express.json())

app.use(function (req, res, next) {
	console.log('We got a request!')
	next()
})
//#endregion

//#region  GET Endpoints
app.get('/', (req, res) => {
	res.send(`Hello! Your IP is: ${req.ip}`)
})
app.get('/api/jeff', (req, res) => {
	res.status(200).send(`Hello! You requested API`)
	console.log(`Request # ${++count}`)
})
app.get('/api/users', ctrl.getAllUsers)
app.get('/api/users/:user_id', ctrl.getUserById)
app.get('/api/users/:user_id/firstname', ctrl.getUserFirstName)
//#endregion

// POST Endpoints
app.post('/api/users', ctrl.createUser)

// PUT Endpoints
app.put('/api/users/:user_id', ctrl.editUser)

// DELETE Endpoints
app.delete('/api/users/:user_id', ctrl.deleteUser)

// Listener
app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))
