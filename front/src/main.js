import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import VueZoomer from 'vue-zoomer';
import  "../node_modules/vue-zoomer/dist/vue-zoomer";
import ZoomOnHover from "vue-zoom-on-hover";
Vue.use(ZoomOnHover);
Vue.use(VueZoomer)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
