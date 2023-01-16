import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import router from './routes';
import store from './store/index';
createApp(App).use(router).use(store).mount('#app');
