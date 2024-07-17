<template>
  <div>
    <HeaderComponent
      @toggle-menu="toggleMenu"
      @toggle-menu-mobile="toggleMenuMobile"
      :is-show-menu="isShowMenu"
      :is-show-menu-mobile="isShowMenuMobile"
    />
    <main class="main">
      <SideBar
        @toggle-menu-mobile="toggleMenuMobile"
        :is-show-menu="isShowMenu"
        :is-show-menu-mobile="isShowMenuMobile"
      />
      <div class="main-container">
        <slot />
        <FooterComponent />
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  // Options...
  name: "LayoutComponent",
  components: {
    HeaderComponent,
    FooterComponent,
    SideBar,
  },
  data() {
    return {
      isShowMenu: false,
      isShowMenuMobile: false,
    };
  },
  computed: {
    showMenuDesktop() {
      return this.isShowMenu;
    },
  },
  methods: {
    toggleMenu(value) {
      this.isShowMenu = !value;
    },
    toggleMenuMobile(value) {
      this.isShowMenuMobile = !value;
    },
  },
};
</script>

<style>
/* Styles... */
body {
  margin: 0;
  padding: 0;
  background-color: #161616;
  font-family: Inter;
}

.main {
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.main-container {
  flex-grow: 1;
  width: 100%;
}
</style>
