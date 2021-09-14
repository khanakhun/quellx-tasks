const { Router } = require('express')
const router = Router()
const jwt = require('jsonwebtoken')
const secret = process.env.JWT_SECRET
router.get('/', async (req, res, next) => {
	const token = jwt.sign({}, secret, {
		expiresIn: '1d',
	})
	console.log(token)
	res.status(200).json({
		message: 'Welcome to Weather API, Use This Bearer Token to Use API: ',
		token,
	})
})
module.exports = router
