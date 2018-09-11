<template>
	<div class="page has-navbar" v-nav="{title: '单选框',showBackButton: true }">
		<div class="page-content text-accenter">
			<div class="item item-divider">
			</div>
		<von-radio :options="genderOptions" v-model="gender"></von-radio>

		<p class="padding">
			option index: {{ gender }}<br>
			option text: {{ genderOptions[gender] }}
		</p>

				<list class="list-ios">
		  <item>
		    Item - 1
		  </item>
		  <item>
		    Item - 2
		  </item>
		  <item>
		    Item - 3
		  </item>
		</list>
		</div>

	</div>

</template>
<script>
	export default{
		data() {
			return{
				gender: 0,
				genderOptions: ["男","女"]
			}
		},
		methods: {
		      back() {
		        $router.back('/')
		      }
   		}
	}
</script>