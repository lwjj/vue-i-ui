import Vue from 'vue'
import App from './App.vue'
import IButton from './components/button.vue'
import './assets/fonts/iconfont.css'
import IDialog from './components/dialog.vue'

Vue.component(IButton.name, IButton)
Vue.component(IDialog.name, IDialog)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App)
}).$mount('#app')
