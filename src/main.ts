import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'


// to use ElementPlus on-demand import see : https://element-plus.org/en-US/guide/quickstart.html#full-import

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
