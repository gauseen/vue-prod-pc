<template>
	<Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
		<Menu :active-name="$route.name" theme="dark" width="auto" :open-names="[openSubMenu]" @on-select="changeMenu">
			<template v-for="item in layoutRoutes">

				<Submenu v-if="item.children.length > 1" :name="item.name">
					<template slot="title">
						<Icon :type="item.icon"></Icon>
						{{item.title}}
					</template>
					<template v-for="child in item.children">
						<MenuItem :name="child.name">
							<Icon :type="child.icon"></Icon>
							{{child.title}}
						</MenuItem>
					</template>
				</Submenu>

				<template v-if="item.children.length <= 1" v-for="child in item.children">
					<MenuItem :name="child.name">
						<Icon :type="item.icon"></Icon>
						<span>{{child.title}}</span>
					</MenuItem>
				</template>

			</template>
		</Menu>
	</Sider>
</template>

<script>
	export default {
		name: 'sidebar',
		props: {
			layoutRoutes: {
				type: Array,
			}
		},
		data () {
			return {
				// 获取当前子路由的父级
				openSubMenu: this.$route.matched[0].name,
			}
		},
		mounted () {
			console.log('this.currentName', this.currentName)
			// this.setCurrentPath(this.currentName)
		},
		methods: {
			changeMenu (sideMenuName) {
				// 设置当前路径（用于面包屑导航显示）
				this.setCurrentPath(sideMenuName)
				// 跳转当前路径
				this.$router.push({
					name: sideMenuName
				})
			},
			setCurrentPath (toName) {
				this.$store.commit('setCurrentPath', toName)
			},
		},
		computed: {
			currentName () {
				return this.$route.name
			},
		},
	}
</script>

<style lang="stylus" scoped>

</style>