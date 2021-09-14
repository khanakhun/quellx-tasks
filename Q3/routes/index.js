const { Router } = require('express')
const router = Router()
const axios = require('axios')

router.get('/:query', async (req, res) => {
	try {
		const q = req.params.query

		const weather = await axios.get(
			'http://api.weatherapi.com/v1/current.json',
			{
				params: {
					q,
				},
				headers: {
					key: process.env.API_KEY,
				},
			},
		)
		return res.status(200).json({ weather: weather.data })
	} catch (err) {
		return res.status(404).json(err)
	}
})
module.exports = router
