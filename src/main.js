import Vue from 'vue'
import App from './App.vue'

// plugin
import feather from 'vue-icon'
import VueFormulate from '@braid/vue-formulate'
Vue.use(feather, 'v-icon')
Vue.use(VueFormulate, {
  classes: {
    input: 'servion-input-element'
  }
})

// css file
import '@/assets/css/tailwind.css'
import '@/assets/css/global.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
