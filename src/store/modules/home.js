const home = {
	state: {
		name: 'home...',
		sigin: 'home-sigin',
		count: 0,
	},
	mutations: {
		submit (state, msg) {
			state.count++
			console.log('state: ', state)
			console.log('store: ', msg)
		},
	},
}

export default home
