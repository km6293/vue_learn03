import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'
let emitter = mitt();
let app = createApp(App)
// 글로벌한 변수보관함임
app.config.globalProperties.emitter = emitter;
// axios를 글로벌 변수로 보관할때는
// app.config.globalProperties.axios = axios;
// 그러면 이제 vue 파일에서 import axios 해올 필요 없이 this.axios로 사용가능

// vuex
import store from './store.js'

// use -> 모든 컴포넌트들이 store 공유
app.use(store).mount('#app')
