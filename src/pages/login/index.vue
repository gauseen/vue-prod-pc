<template>
  <div class="login__content">
		<h3>全局stylus变量测试</h3>
		<h4>外部引用stylus变量测试</h4>
		<!-- <img :src="skinImg" alt=""> -->
		<Input v-model="phone" placeholder="phone..." style="width: 350px"></Input>
		<p></p>
		<Input v-model="code" placeholder="code..." style="width: 350px"></Input>
		<p></p>
		<Button @click="fetchCode" type="success"  style="width: 175px">get code</Button>
		<Button @click="submitLogin" type="success"  style="width: 175px">login</Button>
	</div>
</template>

<script>

export default {
	name: 'login',
	data () {
		return {
			skinImg: require('Image/card_skin_2.jpg'),
			phone: '',
			code: '',
		}
	},

	mounted () {

	},

	methods: {
		submitLogin () {
			const params = {
				phone: this.phone,
				code: this.code,
				langType: 'cn',
			}
			this.$post('doAddMember.do', params)
			.then(res => {
				this.$router.push({
					name: 'home',
				})
			})
		},

		fetchCode () {
			const params = {
				phone: this.phone,
			}
			this.$post(`toFindSmsCode.do`, params)
			.then(res => {
			})
		},
	},
}
</script>

<style lang="stylus" scoped>
	@import 'src/stylus/test'
	.login__content
		text-align center
		padding-top 100px
		font-size 28px
		color $color-main
		img
			width 100%
			height auto
		h4
			color $test
</style>
