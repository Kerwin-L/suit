import Vue from 'vue'
import Vonic from 'vonic'

// Page Components
import Index from './components/Index.vue'
import About from './components/About.vue'
import VonRadio from './components/VonRadio.vue'
import Cells from './components/Cells.vue'
import Swiper from './components/Swiper.vue'
import Cascade from './components/Cascade.vue'
import popup from './components/popup.vue'
import modal from './components/modal.vue'
import Main from './components/Main.vue'
import Home from './components/Home.vue'
import Machine_register from './components/Machine_register.vue'
import axios from 'axios'
import Machine_control from './components/Machine_control'
import changeMoney from './components/changeMoney'
import identified from './components/identified'


//suit page
import select_variety from './components/select_variety'
import suit_home from './components/suit_home'
import select_product from './components/select_product'
import suit_product from './components/suit_product'
import select_collar from './components/select_collar'
import select_cuff from './components/select_cuff'
import book_info from './components/book_info'
import user_home from './components/user_home'


Vue.prototype.$http = axios

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

// const routes = [
//   { path: '/', component: Index },
//   { path: '/about', component: About },
//   { path: '/VonRadio',component: VonRadio },
//   { path: '/Cells',component: Cells },
//   { path: '/Swiper',component: Swiper },
//   { path: '/Cascade',component: Cascade },
//   { path: '/popup',component: popup },
//   { path: '/modal',component: modal}

// ];

const routes = [
	{
		path: '/',
		component: Main,
		children: [
			{ path: 'user', component: user_home },
			{ path: '', component: suit_home },
			{
				path: 'product',
				component: select_variety,
			}

		]
	},
	{ path: '/popup',component: popup },
	{ path: '/about', component: About},
	{ path: '/Cells', component: Cells},
	{ path: '/VonRadio', component: VonRadio},
	{ path: '/modal', component: modal},
	{ path: '/popup',component: popup },
	{ path: '/Cascade',component: Cascade },
	{ path: '/Swiper',component: Swiper },
	{ path: '/Machine_register', component: Machine_register},
	{ path: '/Machine_control', component: Machine_control},
	{ path: '/changeMoney', component: changeMoney},
	{ path: '/identified', component: identified},
	{ path: '/select_product',component: select_product},
	{ path: '/suit_product',component: suit_product},
	{ path: '/select_collar',component: select_collar},
	{ path: '/select_cuff',component: select_cuff},
	{ path: '/book_info',component: book_info},

]

Vue.use(Vonic.app, {
  routes: routes
})
