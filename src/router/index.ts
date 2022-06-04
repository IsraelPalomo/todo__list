import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../views/Dashboard.vue';

const routes = [{ path: '/', component: Dashboard }];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;
