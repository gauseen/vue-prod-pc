<template>
	<Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
		<Menu :active-name="$route.name" theme="dark" width="auto" :open-names="[openSubMenu]" @on-select="changeMenu">
			<template v-for="item in layoutRoutes">

				<Submenu v-if="item.children.length > 1" :name="item.name">
					<template slot="title">
						<Icon type="ios-navigate"></Icon>
						{{item.name}}
					</template>
					<template v-for="child in item.children">
						<MenuItem :name="child.name">
							{{child.name}}
						</MenuItem>
					</template>
				</Submenu>

				<template v-if="item.children.length <= 1" v-for="child in item.children">
					<MenuItem :name="child.name">
						<Icon type="ios-navigate"></Icon>
						<span>{{child.name}}</span>
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
			
		},
		methods: {
			changeMenu (sideMenuName) {
				this.$router.push({
					name: sideMenuName
				})
			}
		}
	}
</script>

<style lang="stylus" scoped>

</style>