import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Register from '@/components/Register';
import Calender from '@/components/Calender';
import Meetings from '@/components/Meetings';
import PageNotFound from '@/components/PageNotFound';
import foo from '@/components/foo';
import Skills from '@/components/Skills';
import store from '@/store';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Calender',
      component: Calender,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/meetings',
      name: 'Meetings',
      component: Meetings,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/foo',
      name: 'foo',
      component: foo,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '*',
      name: 'PageNotFound',
      component: PageNotFound
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ['/login', '/register'];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem('user');

//   // trying to access a restricted page + not logged in
//   // redirect to login page
//   if (authRequired && !loggedIn) {
//     next('/login');
//   } else {
//     next();
//   }
// });

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth.status.loggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})
