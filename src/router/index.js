import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Master from '@/views/Master.vue'
import store from '@/store'


const routes = [
  {
    meta: {
      title: 'Dashboard'
    },
    path: '/',
    name: 'home',
    component: Master,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Home
      },
    ]
  },


  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Login'),
    meta: {
      public: true,
      disableIfLoggedIn: true
    }

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})


router.beforeEach((to, from, next) => {
  // if the route is not public
  if (!to.meta['public']) {
    // if the user authenticated
    if (store.getters['auth/authenticated']) {
      // continue to the route
      return next();
    } else {
      // set redirect to path after login
      let redirect = {};
      if (to.name !== 'Dashboard') {
        redirect = { redirect: to.path };
      }
      // redirect to login
      return next({ name: 'login', query: redirect });
    }
  }
  // if the user is authenticated and the route is disabled for authenticated window
  if (store.getters['auth/authenticated'] && to.meta['disableIfLoggedIn']) {
    return next({ name: 'Dashboard' });
  }

  next();
});

export default router
