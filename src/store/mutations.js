const mutations = {

	submitRoot (state, msg) {
		console.log('root-submit: ', msg)
	},

	initRoutes2Paths (state) {
		var layoutRoutes = state.layoutRoutes
		// 列出 layoutRoutes 路由组合路径的所有情况
		var resultList = [];
		parseTree([], layoutRoutes);
		function parseTree(source, children){
			if(!children){
				resultList.push(source)
				return
			}
			children.forEach(e => {
				// 返回一维数组
				// var flag = source ? '||' : '';
				// var strPath = source + flag + e.name;
				// parseTree(strPath, e.children);
				// 返回二维数组
				var nameArr = source.concat([{
					name: e.name,
					title: e.title,
				}])
				parseTree(nameArr, e.children);
			})
		}
		state.layoutAllPaths = resultList
	},

	// 设置当前选中路径
	setCurrentPath (state, toName) {
		// console.log('state.layoutAllPaths: ', state.layoutAllPaths)
		state.layoutAllPaths.forEach(item => {
			item.forEach(o => {
				if (o.name === toName) {
					state.getCurrentPaths = item
				}
			})
		})
	},
}

export default mutations
