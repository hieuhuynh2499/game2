<template>
  <header class="header">
    <div class="header-container">
      <div class="header-left">
        <div class="header-left-main" v-on:click="toggleMenu">
          <menu-icon />
        </div>
        <div class="bar-mobile" v-on:click="toggleMenuMobile">
          <bar-icon />
        </div>
      </div>
      <div class="header-main">
        <div class="header-center">
          <div class="header-center-main">
            <div class="header-center-btn header-center-btn-active">
              <square-icon />
              <span>Salão</span>
            </div>
            <div class="header-center-btn">
              <square-icon />
              <span>Salão</span>
            </div>
          </div>
          <div class="header-center-right">
            <search-icon />
          </div>
        </div>
        <div class="header-right">
          <div v-if="false">
            <button-component />
            <button-component />
            <earth-icon />
          </div>
          <div class="header-right-select">
            <SelectMoney />
          </div>
          <div>
            <sun-icon />
            <bell-icon />
            <div class="avatar"><img src="@/assets/image.png" alt="" /></div>
            <earth-icon />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import ButtonComponent from "@/components/ButtonComponent.vue";
import SelectMoney from "@/components/SelectMoney.vue";
import SearchIcon from "@/icons/SearchIcon.vue";
import SquareIcon from "@/icons/SquareIcon.vue";
import EarthIcon from "@/icons/EarthIcon.vue";
import MenuIcon from "@/icons/MenuIcon.vue";
import SunIcon from "@/icons/SunIcon.vue";
import BellIcon from "@/icons/BellIcon.vue";
import BarIcon from "@/icons/BarIcon.vue";
export default {
  name: "HeaderComponent",
  components: {
    ButtonComponent,
    SelectMoney,
    SearchIcon,
    SquareIcon,
    EarthIcon,
    MenuIcon,
    SunIcon,
    BellIcon,
    BarIcon,
  },
  props: {
    isShowMenu: Boolean,
    isShowMenuMobile: Boolean,
  },
  methods: {
    toggleMenu() {
      this.$emit("toggle-menu", this.isShowMenu);
    },
    toggleMenuMobile() {
      this.$emit("toggle-menu-mobile", this.isShowMenuMobile);
    },
  },
};
</script>
<style>
.header-center-btn-active {
  background-color: #ff4848;
}

.header {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 79px;
  padding: 0 30px;
  border-bottom: 0.4px solid #a6a6a6;
}

.header-container {
  width: 1440px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
  padding-left: 30px;
  box-sizing: border-box;
  flex-basis: 260px;
}

.header-left-main {
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
}
.header-main {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-grow: 1;
  box-sizing: border-box;
  justify-content: space-between;
}
.header-center {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-basis: 71%;
}

.header-center-right {
  height: 44px;
  width: 44px;
  background-color: #32373f;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 12px;
}

.header-center .header-center-main {
  background-color: #32373f;
  display: flex;
  padding: 5px;
  align-items: center;
  box-sizing: border-box;
  margin: 30px 0;
  height: 46px;
  border-radius: 12px;
}

.header-center .header-center-btn {
  display: flex;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  height: 36px;
  box-sizing: border-box;
  padding: 0 15px;
  gap: 10px;
  margin-right: 10px;
  color: #fff;
}
.header-right {
  display: flex;
  align-items: center;
  gap: 40px;
}
.header-right div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.header-right .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}
.header-right .avatar img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 1000px) {
  .header-left-main {
    display: none;
  }
  .header-main {
    justify-content: flex-end;
  }
  .header-center {
    display: none;
  }
}

@media only screen and (max-width: 1200px) {
  .menu-search {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .header-right-select {
    display: none !important;
  }
}
</style>
