import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import LayoutComponent from "@/layout/LayoutComponent.vue";
// import style
import "swiper/css/swiper.css";

Vue.config.productionTip = false;
Vue.component("app-layout", LayoutComponent);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
