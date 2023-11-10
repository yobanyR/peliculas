import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Youtube from 'vue3-youtube';

const app = createApp(App);
app.use(store);
app.use(router);

app.component('youtube', Youtube); 

app.mount('#app');

