var location = {
	seville: {
		name: 'Seville',
		next: 'canary-islands'
	},
	'canary-islands': {
		name: 'The Canary Islands',
		next: 'cape-verde'
	},
	'cape-verde': {
		name: 'Cape Verde',
		next: 'straight-of-magellan'
	},
	'straight-of-magellan': {
		name: 'The Straight of Magellan',
		next: 'guam'
	},
	guam: {
		name: 'Guam',
		next: 'philippines'
	},
	philippines: {
		name: 'The Philippines',
		next: 'done'
	}
}

module.exports = location;