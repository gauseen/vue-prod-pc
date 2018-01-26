<template>
	<section class="layout">
		<sidebar class="layout_sidebar" :layoutRoutes="layoutRoutes"></sidebar>
		<Layout :style="{marginLeft: '200px', textAlign: 'left'}">
			<Content :style="{padding: '0 16px 16px'}">
				<navbar :currentPath="currentPath"></navbar>
				<transition mode="out-in">
					<app-main></app-main>
				</transition>
			</Content>
		</Layout>
	</section>
</template>

<script>
import { Sidebar, Navbar, AppMain } from 'src/layout/components'
import { layoutRoutes } from 'src/router'

export default {
	name: 'layout',
	components: {
		Sidebar,
		Navbar,
		AppMain,
	},
	data () {
		return {
			layoutRoutes,
			// 获取当前所处完整路径
			currentPath: [],
		}
	},
	mounted () {
		// 初始化 layoutRoutes 路由中所有路径组合情况
		this.$store.commit('initRoutes2Paths')
		// 获取初始化面包屑路径
		this.$store.commit('setCurrentPath', this.$route.name)
		this.currentPath = this.$store.state.getCurrentPaths
	},

	watch: {
		$route () {
			this.currentPath = this.$store.state.getCurrentPaths
		},
	},

}
</script>

<style lang="stylus">
.layout
	border: 1px solid #d7dde4
	background: #f5f7f9
	position: relative
	border-radius: 4px
	overflow: hidden

</style>
