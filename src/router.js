import Vue from "vue";
import Router from "vue-router";
import HomeComponent from "@/pages/HomePage.vue";
import SignIn from "@/pages/SignIn.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn,
    },
    {
      path: "/",
      name: "home",
      component: HomeComponent,
    },
    // Add more routes as needed
  ],
});
