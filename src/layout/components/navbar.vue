<template>
	<section>
		<Breadcrumb :currentPath="currentPath" :style="{margin: '16px 0'}">
			<BreadcrumbItem v-for="(item, $index) in currentPath" :key="$index">{{item.title}}</BreadcrumbItem>
		</Breadcrumb>
	</section>
</template>

<script>
export default {
	name: 'navbar',
	props: {
		currentPath: {
			type: Array,
		},
	},
	mounted () {

	},
}
</script>

<style lang="stylus" scoped>

</style>

