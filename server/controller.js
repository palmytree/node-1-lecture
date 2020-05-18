const users = require('../data.json')

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
	}
}
