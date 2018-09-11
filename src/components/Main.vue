<template>
	<div class="page-content" v-tabbar="{'menus': menus,menuColor: '#B5B5B5',activeMenuColor: '#484746',onMenuClock: menuClicked }">
		<router-view></router-view>
	</div>
</template>


<script>
	export default{
		data() {
			return {
				menus: [
					{
						iconOn: 'ion-ios-home',
						iconOff: 'ion-ios-home-outline',
						text: '首页',
						path: '/'
					},
					{
									iconOn: 'ion-android-apps',
									iconOff: 'ion-android-apps',
									text: '产品',
									path: '/product'
							},
					{
									iconOn: 'ion-ios-person',
									iconOff: 'ion-ios-person-outline',
									text: '我的',
									path: '/user'
							},


				]
			}
		},

		methods: {
			menuClicked(menuIndex) {
				console.log(menuIndex)
			},
			beforeDestory(){
				$tabbar.$emit('hideTabbar')
			}
		}
	}
</script>
