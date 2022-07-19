export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce4e67fceamsh23cb1f32bb2de63p1f36a6jsn72a76580cecd',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
	},
}

export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo'

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', geoApiOptions)
	.then((response) => response.json())
	.then((response) => console.log(response))
	.catch((err) => console.error(err))

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'

export const WEATHER_API_KEY = '540edfe722d32626742d46fb5d3f42c5'
