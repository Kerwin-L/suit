<template>
	<div class="page has-navbar" v-nav="{title:'模拟窗',showBackButton: true}">
		<div class="page-content padding padding-top">
			<button class="button button-assertive button-block" @click="showModal()">默认</button>
		</div>
	</div>
</template>

<script>
	import MyModal from './MyModal.vue';

	export default {
		data() {
			return {
				modal: undefined
			}
		},

		mounted() {
			$modal.fromComponent(MyModal,{
				title: '模拟窗标题',
				theme: 'Energized',
			}).then((modal)=>{
				this.modal = modal
			})
		},

		destroyed() {
			if(this.modal)
				$modal.destroy(this.modal)
		},
		methods: {
			showModal(){
				this.modal.show()
			}
		}
	}

</script>