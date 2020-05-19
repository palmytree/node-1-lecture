const users = require('../data.json')

let id = users[users.length - 1].id + 1

module.exports = {
	getAllUsers: (req, res) => {
		const { email, first_name, last_name, id } = req.query
		if (email) {
			res.status(200).send(users.filter(e => e.email.includes(email)))
		} else if (first_name) {
			res.status(200).send(users.filter(e => e.first_name.includes(first_name)))
		} else {
			res.status(200).send(users)
		}
	},
	getUserById: (req, res) => {
		const { user_id } = req.params
		console.log(user_id)
		const user = users.find(e => e.id === +user_id)
		if (user) {
			res.status(200).send(user)
		} else {
			res.status(404).send('User not found')
		}
	},
	getUserFirstName: (req, res) => {
		const { user_id } = req.params
		const first_name = users.find(e => e.id === +user_id).first_name
		if (first_name) {
			res.status(200).send(first_name)
		} else {
			res.status(404).send('User not found')
		}
	},
	createUser: (req, res) => {
		const { first_name, last_name, email } = req.body

		const newUser = { id, first_name, last_name, email }

		if (first_name && last_name && email) {
			users.push(newUser)
			id++
			res.status(200).send(users)
		} else {
			res.send(406).send('Must include first_name, last_name, and email properties in body')
		}
	},
	editUser: (req, res) => {
		const { user_id } = req.params
		const { first_name, last_name, email } = req.body

		const index = users.findIndex(e => e.id === +user_id)

		if (index === -1) {
			return res.status(404).send('User not found')
		}

		const updatedUser = {
			id: +user_id,
			first_name: first_name || users[index].first_name,
			last_name: last_name || users[index].last_name,
			email: email || users[index].email
		}
		users[index] = updatedUser
		res.status(200).send(users)
	},
	deleteUser: (req, res) => {
		const { user_id } = req.params

		const index = users.findIndex(e => e.id === +user_id)

		if (index === -1) {
			return res.status(404).send('User not found')
		}

		users.splice(index, 1)

		res.status(200).send(users)
	}
}
