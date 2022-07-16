import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from './axios'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).use(router).use(ElementPlus).mount('#app')
App.use(axios)
