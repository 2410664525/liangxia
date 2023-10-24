import { createApp } from 'vue'
import router from './router'
import VueAxios from 'vue-axios'
import axios from "axios";

import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

axios.defaults.baseURL = 'http://localhost:8082/ssm2_war/'


createApp(App).use(store).use(router).use(ElementPlus).use(VueAxios, axios).mount('#app')
