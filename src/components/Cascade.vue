<template>
	<div class="page has-navbar" v-nav="{title: '级联',showBackButton: true}">
		<div class="page-content padding-top">
			<div class="item item-divider">
				请选择你的地址
			</div>
			<cascade :fields="fields" :data="cities" :value="value" :on-change="onChange"></cascade>

		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				fields:[
          			"省", "市", "区"
				],
				cities: [
		          ['北京市', '市辖区', '东城区'],
		          ['北京市', '市辖区', '东asd区'],
		          ['北京市', 'aa区', 'bb'],
		          // ...
		        ],
		        value: []
			}
		},
		methods: {
			onChange(value){
				this.value = value;
				console.log(this.value);
			}
		}
	}
</script>