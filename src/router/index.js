import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Index from '@/views/index'
import AsiaMsg from '@/components/AsiaMsg'
import EuropeMsg from '@/components/EuropeMsg'
import AmericaMsg from '@/components/AmericaMsg'
import AfricaMsg from '@/components/AfricaMsg'
import OceaniaMsg from '@/components/OceaniaMsg'

import Family from '@/views/family'
import Food from '@/views/food'
import Map from '@/views/map'
import About from '@/views/about'

Vue.use(Router);
Vue.use(iView);

const IndexRoutes = {
  path: '/',
  name: 'Index',
  component: Index,
  children: [
    {
      path: '/asia',
      component: AsiaMsg
    },
    {
      path: '/europe',
      component: EuropeMsg
    },
    {
      path: '/america',
      component: AmericaMsg
    },
    {
      path: '/africa',
      component: AfricaMsg
    },
    {
      path: '/oceania',
      component: OceaniaMsg
    }
  ]
};

const FamilyRoutes = {
  path: '/family',
  name: 'family',
  component: Family
};

const FoodRoutes = {
  path: '/food',
  name: 'food',
  component: Food
};

const MapRouters = {
  path: '/map',
  name: 'map',
  component: Map
};

const AboutRouters = {
  path: '/about',
  name: 'about',
  component: About
};

const router = new Router({
  routes: [IndexRoutes, FamilyRoutes, FoodRoutes, MapRouters, AboutRouters]
})

// 添加路由守卫
// router.beforeEach((to, from, next) => {
//     const isLogin = false;
//     if (to.path === '/frs') {
//         next();
//     } else {
//         isLogin ? next() : next('/frs');
//     }
// })

export default router;


