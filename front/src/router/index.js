import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Product from "../views/Product.vue";
import Products from "../views/Products.vue";
import Nav from "../views/Nav.vue";
import Wish from "../views/Wish.vue";
import Rent from "../views/Rent.vue";
import Add from "../views/Add.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Home",
  //   component: Home,
  // },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/product/:id",
    name: "Product",
    component: Product,
  },
  {
    path: "/",
    name: "Products",
    component: Products,
  },
  {
    path: "/nav",
    name: "Nav",
    component: Nav,
  },
  {
    path: "/wish",
    name: "Wish",
    component: Wish,
  },
  {
    path: "/rent",
    name: "Rent",
    component: Rent,
  },
  {
    path: "/",
    name: "Add",
    component: Add,
  }
 
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
