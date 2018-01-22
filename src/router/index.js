import Router from 'vue-router'
import Layout from '../layout/layout'
const serverDir = process.env.SERVER_DIR

// 不需要再layout组件显示路由配置，也不在侧边导航显示
const config = [
	{ path: '/login', name: 'login' },	
]

// layout组件中要显示的路由，并在侧边导航栏显示
export const layoutRoutes = [
	{
		path: '/one',
		name: 'item-01',
		icon: 'key',
		title: '第一组',
		component: Layout,
		children: [
			{ path: 'home', name: 'home', icon: 'compose', title: '第一子', },
		],
	},
	{
		path: '/two',
		name: 'item-02',
		icon: 'earth',
		title: '第二组',
		component: Layout,
		children: [
			{ path: 'goods', name: 'goods', icon: 'crop', title: '第一子', },
			{ path: 'modal', name: 'modal', icon: 'ios-more', title: '第二子', },
		],
	},
]

export const routes = [
	...parseRouter(layoutRoutes),
	...parseRouter(config),
	{
		path: '*',
		name: '404',
		component: resolve => require(['../pages/not-found/index.vue'], resolve),
	},
]

// 路由解析（包括多层路由）
function parseRouter (items) {
	return items.map((item) => {
		const result = {
			path: item.path,
			name: item.name,
			component: requireComponent(item),
			children: item.children,
		}
		if (result.children) result.children = parseRouter(result.children)
		return result
	})
}

// 获取相应的组件
function requireComponent(item) {
	if (item.component) {
		return item.component
	} else {
		return /^\/.+$/g.test(item.path) ? resolve => require([`../pages${item.path}/index.vue`], resolve)
										 : resolve => require([`../pages/${item.path}/index.vue`], resolve)
	}
}

export default new Router({
	mode: 'history',
	// base: process.env.NODE_ENV === 'development' ? '' : `${serverDir}/`,
	base: 'prod-pc',
	routes,
})
