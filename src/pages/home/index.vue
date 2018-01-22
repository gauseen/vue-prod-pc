<template>
	<section>
		<p>{{home.sigin}}</p>
		<p>{{sigin}}</p>
		<p>点击次数：{{count}}</p>
		<Button @click="submit">按钮</Button>
	</section>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'home',
	mounted () {
		console.log('home-page', this.home)
	},
	methods: {
		submit () {
			this.$store.commit('submit', 'from home component')
			// console.log(this.$store)
		},
	},
	computed: {
		// Vuex home 模块
		home () {
			return this.$store.state.home
		},
		...mapState({
			count: state => state.home.count,	// home 模块
			sigin: state => state.sigin,		// 根级 state
		})
	},
}
</script>

<style lang="stylus" scoped>
	p
		font-size 30px
</style>
