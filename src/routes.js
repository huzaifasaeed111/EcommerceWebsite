import { createWebHashHistory,createRouter } from "vue-router";
import HomePage from './HomePage';
import ShopPage from './ShopPage';
import productCategoriesPage from './productCategoriesPage';
import aboutComp from './components/aboutComp';
import contactComp from './components/contactComp';
const routes = [
    {
      name: 'HomePage',
      path: '/',
      component:HomePage
    },
    {
        name:'ShopPage',
        path:'/ShopPage',
        component: ShopPage
    },
    {
      name: 'productCategoriesPage',
      path: '/productCategoriesPage/:categ',
      component: productCategoriesPage
    },
    {
      name: 'aboutComp',
      path:'/aboutComp',
      component:aboutComp,
    },
    {
      name: 'contactComp',
      path: '/contactComp',
      component:contactComp
    }
];

const router = createRouter({
     history: createWebHashHistory(),
     routes,
});
export default router;