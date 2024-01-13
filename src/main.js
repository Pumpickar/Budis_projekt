// main.js or main.ts
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'vuetify/styles';
import 'vuetify/dist/vuetify.min.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();


app.use(router).use(pinia).use(createVuetify({
  components,
  directives,
})).mount('#app');