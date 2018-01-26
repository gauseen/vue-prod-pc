import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import app from './modules/app.js'
import home from './modules/home.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state,			// 根级别的 state
	mutations,		// 根级别的 mutations
	actions,		// 根级别的 action
	modules: {
		app,		// app 模块
		home,		// home 模块
	},
})

export default store
