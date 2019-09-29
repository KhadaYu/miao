import Vue from 'vue';
import Router from 'vue-router';
/* import Home from 'pages/home/Home';
import Category from 'pages/category/Category';
import Cart from 'pages/cart/Cart';
import Personal from 'pages/personal/Personal';
import Search from 'pages/search/Search';
import Product from 'pages/product/Product'; */

Vue.use(Router);

const routes = [
  {
    name: 'home',
    path: '/home',
    component: () => import('pages/home/Home'),
    children: [
      {
        name: 'home-product',
        path: 'product/:id',
        component: () => import('pages/product/Product')
      }
    ]
  },
  {
    name: 'category',
    path: '/category',
    component: () => import('pages/category/Category')
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('pages/cart/Cart')
  },
  {
    name: 'personal',
    path: '/personal',
    component: () => import('pages/personal/Personal')
  },
  {
    name: 'search',
    path: '/search',
    component: () => import('pages/search/Search')
  },
  {
    path: '*',
    redirect: '/home'
  }
];
export default new Router({
  routes
});
