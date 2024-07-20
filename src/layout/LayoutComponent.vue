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
      <div class="mobile-controls-container">
        <div class="mobile-controls-item">
          <home-icon />
          <span>Home</span>
        </div>
        <div class="mobile-controls-item">
          <flower-icon />
          <span>Promotions</span>
        </div>
        <div class="mobile-controls-item">
          <div class="mobile-controls-center">
            <users-icon />
          </div>
          <span>Affiliate</span>
        </div>
        <div class="mobile-controls-item">
          <wallet-icon />
          <span>Wallet</span>
        </div>
        <div class="mobile-controls-item">
          <div class="mobile-controls-avatar">
            <img src="../assets/image.png" alt="" />
          </div>
          <span>Profile</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import SideBar from "@/components/SideBar.vue";
import FlowerIcon from "@/icons/FlowerIcon.vue";
import HomeIcon from "@/icons/HomeIcon.vue";
import UsersIcon from "@/icons/UsersIcon.vue";
import WalletIcon from "@/icons/WalletIcon.vue";

export default {
  // Options...
  name: "LayoutComponent",
  components: {
    HeaderComponent,
    FooterComponent,
    SideBar,
    FlowerIcon,
    HomeIcon,
    UsersIcon,
    WalletIcon,
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
  position: sticky;
  bottom: 0;
  height: 64px;
  background-color: #000;
  display: none;
}

.mobile-controls-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
}

.mobile-controls-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: Inter;
  font-size: 10px;
  font-weight: 500;
  line-height: 12.1px;
  height: 60px;
  text-align: left;
  color: #ffffff80;
}
.mobile-controls-item:nth-child(3) {
  position: relative;
  top: -8px;
}
.mobile-controls-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: #808080;
  position: relative;
  top: -20%;
  z-index: 100000;
}
.mobile-controls-item:nth-child(3)::after {
  position: absolute;
  content: "";
  height: 60px;
  width: 55px;
  background-color: #000;
  border-radius: 50%;
  top: -25%;
  z-index: 1000;
}
.mobile-controls-avatar {
  height: 22px;
  width: 22px;
  border-radius: 50%;
}
.mobile-controls-avatar img {
  height: 100%;
  width: 100%;
  border-radius: 50%;
}

@media only screen and (max-width: 500px) {
  .mobile-controls {
    display: block;
  }

  .swiper-wrapper,
  .swiper-container {
    z-index: 0 !important;
  }
}
</style>
