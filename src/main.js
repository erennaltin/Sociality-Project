import {createApp} from 'vue';
import store from './store';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import './styles.css';
import LottieAnimation from 'lottie-vuejs/src/LottieAnimation.vue';

createApp(App).use(store).use(router).use(LottieAnimation).mount('#app');
