<template>
	<section class="layout">
		<sidebar class="layout_sidebar" :layoutRoutes="layoutRoutes"></sidebar>
		<Layout :style="{marginLeft: '200px', textAlign: 'left'}">
			<Content :style="{padding: '0 16px 16px'}">
				<navbar></navbar>
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
		}
	},
	mounted () {
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
