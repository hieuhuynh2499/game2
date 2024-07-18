<!-- @format -->

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
    <div class="mobile-controls">
      <div class="mobile-controls-main">
        <div class="mobile-controls-item">
          <home-icon />
          <span>Home</span>
        </div>
        <div class="mobile-controls-item">
          <home-icon />
          <span>Home</span>
        </div>
        <div class="mobile-controls-center">
          <div class="mobile-controls-center-round"><home-icon /></div>
          <span>Home</span>
        </div>
        <div class="mobile-controls-item">
          <home-icon />
          <span>Home</span>
        </div>
        <div class="mobile-controls-item">
          <home-icon />
          <span>Home</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SideBar from "@/components/SideBar.vue";
import HomeIcon from "@/icons/HomeIcon.vue";

export default {
  // Options...
  name: "LayoutComponent",
  components: {
    HeaderComponent,
    FooterComponent,
    SideBar,
    HomeIcon,
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

.mobile-controls {
  height: 64px;
  background-color: rgba(0, 0, 0, 1);
  position: sticky;
  bottom: 0;
}

.mobile-controls-main {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.mobile-controls-center {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 19%;
  position: relative;
  top: -30%;
}

.mobile-controls-center-round {
  height: 43px;
  width: 43px;
  background: rgba(128, 128, 128, 1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-controls-item {
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  line-height: 12.1px;
  text-align: left;
  width: 19%;
}
</style>
