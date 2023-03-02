import { createApp } from 'vue'
import App from './App.vue'
//导入
import './style.css'
import router from './router/index.js'

const app = createApp(App)

//挂载
app.use(router)

app.mount('#app')
