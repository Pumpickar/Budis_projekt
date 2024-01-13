import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/DomovView.vue';
import FotkyView from '../views/FotkyView.vue';
import CartView from '../views/CartView.vue';
import SluzbyView from '../views/SluzbyView.vue';
import KontaktView from '../views/KontaktView.vue';

const routes = [
  {
    path: '/',
    name: 'domov',
    component: HomeView,
  },
  {
    path: '/fotky',
    name: 'fotky',
    component: FotkyView,
  },

  {
    path: '/sluzby',
    name: 'služby',
    component: SluzbyView,
  },
  {
    path: '/kontakt',
    name: 'kontakt',
    component: KontaktView,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
