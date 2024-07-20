<template>
  <div>
    <div class="menu" :class="{ 'show-menu': isShowMenu }">
      <ul>
        <li class="item-menu" :class="{ 'item-menu-hide': !isShowMenu }">
          <time-icon />
          <div>
            <span>Bonus</span>
          </div>
        </li>
        <li class="item-menu-2" :class="{ 'item-menu-hide-2': !isShowMenu }">
          <div class="item-money-menu">
            <money-icon />
            <span
              >Cashback <br />
              25%</span
            >
          </div>
          <div class="item-friend-menu">
            <friend-icon />
            <span>Invite Friends R$200</span>
          </div>
        </li>
        <li v-if="isShowMenu" class="item-menu-3">
          <div>
            <like-icon />
          </div>
          <div>
            <heart-icon />
          </div>
          <div>
            <time-icon />
          </div>
        </li>
        <li
          v-for="(item, index) in menuTop"
          :key="index"
          class="item-menu"
          :class="{ 'item-menu-hide': !isShowMenu }"
        >
          <component :is="item.icon"></component>
          <div>
            <span>{{ item.text }}</span>
          </div>
        </li>
      </ul>
      <div class="menu-bottom">
        <li class="item-menu" :class="{ 'item-menu-hide': !isShowMenu }">
          <king-icon />
          <div>
            <span>Bonus</span>
          </div>
        </li>
        <div class="menu-bottom-two">
          <li
            v-for="(item, index) in menuBottom"
            :key="index"
            class="item-menu border-radius-none"
            :class="{ 'item-menu-hide': !isShowMenu }"
          >
            <component :is="item.icon"></component>
            <div>
              <span>{{ item.text }}</span>
            </div>
          </li>
        </div>
      </div>
    </div>

    <div class="menu-mobile" :class="{ 'show-menu-mobile': isShowMenuMobile }">
      <div class="menu-mobile-top">
        <SelectMoney />
        <div v-on:click="toggleMenuMobile" class="menu-mobile-top-right">
          <close-icon />
        </div>
      </div>
      <ul>
        <li class="item-menu">
          <time-icon />
          <div>
            <span>Bonus</span>
          </div>
        </li>
        <li class="item-menu-2">
          <div class="item-money-menu">
            <money-icon />
            <span
              >Cashback <br />
              25%</span
            >
          </div>
          <div class="item-friend-menu">
            <friend-icon />
            <span>Invite Friends R$200</span>
          </div>
        </li>
        <li class="item-menu-3">
          <div>
            <like-icon />
          </div>
          <div>
            <heart-icon />
          </div>
          <div>
            <time-icon />
          </div>
        </li>
        <li v-for="(item, index) in menuTop" :key="index" class="item-menu">
          <component :is="item.icon"></component>
          <div>
            <span>{{ item.text }}</span>
          </div>
        </li>
      </ul>
      <div class="menu-bottom">
        <li class="item-menu">
          <king-icon />
          <div>
            <span>Bonus</span>
          </div>
        </li>
        <div class="menu-bottom-two">
          <li
            v-for="(item, index) in menuBottom"
            :key="index"
            class="item-menu border-radius-none"
          >
            <component :is="item.icon"></component>
            <div>
              <span>{{ item.text }}</span>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SelectMoney from "./SelectMoney.vue";
import TimeIcon from "@/icons/TimeIcon.vue";
import MoneyIcon from "@/icons/MoneyIcon.vue";
import FriendIcon from "@/icons/FriendIcon.vue";
import LikeIcon from "@/icons/LikeIcon.vue";
import HeartIcon from "@/icons/HeartIcon.vue";
import CloseIcon from "@/icons/CloseIcon.vue";
import BIcon from "@/icons/BIcon.vue";
import FlashIcon from "@/icons/FlashIcon.vue";
import FruitIcon from "@/icons/FruitIcon.vue";
import FootballIcon from "@/icons/FootballIcon.vue";
import CardIcon from "@/icons/CardIcon.vue";
import GoatIcon from "@/icons/GoatIcon.vue";
import MovieIcon from "@/icons/MovieIcon.vue";
import KingIcon from "@/icons/KingIcon.vue";
import AffiliateIcon from "@/icons/AffiliateIcon.vue";
import FlowerIcon from "@/icons/FlowerIcon.vue";
import TiviIcon from "@/icons/TiviIcon.vue";
import PhoneIcon from "@/icons/PhoneIcon.vue";

export default {
  name: "SideBar",
  components: {
    TimeIcon,
    MoneyIcon,
    FriendIcon,
    LikeIcon,
    HeartIcon,
    CloseIcon,
    KingIcon,
    BIcon,
    FlashIcon,
    FruitIcon,
    FootballIcon,
    CardIcon,
    GoatIcon,
    MovieIcon,
    AffiliateIcon,
    FlowerIcon,
    TiviIcon,
    PhoneIcon,
    SelectMoney,
  },
  props: {
    isShowMenu: Boolean,
    isShowMenuMobile: Boolean,
  },
  data() {
    return {
      menuTop: [
        {
          icon: "BIcon",
          text: "Bonus Games",
        },
        {
          icon: "FlashIcon",
          text: "Original",
        },
        {
          icon: "FruitIcon",
          text: "Slots",
        },
        {
          icon: "FootballIcon",
          text: "Sports",
        },
        {
          icon: "CardIcon",
          text: "Live",
        },
        {
          icon: "GoatIcon",
          text: "Casual",
        },
        {
          icon: "MovieIcon",
          text: "Shows",
        },
      ],
      menuBottom: [
        {
          icon: "AffiliateIcon",
          text: "Affiliate",
        },
        {
          icon: "FlowerIcon",
          text: "Promotion",
        },
        {
          icon: "TiviIcon",
          text: "Install",
        },
        {
          icon: "PhoneIcon",
          text: "Live Chat",
        },
      ],
    };
  },
  methods: {
    toggleMenuMobile() {
      console.log(123123);
      this.$emit("toggle-menu-mobile", this.isShowMenuMobile);
    },
  },
};
</script>
<style>
.menu {
  width: 97px;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  background-color: #111111;
  padding-top: 30px;
  padding: 30px 10px 0;
  box-sizing: border-box;
  transition: all 0.2s;
}
.menu ul,
.menu-mobile ul {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.show-menu {
  width: 260px;
}

.menu-collapsed {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.item-menu {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  list-style: none;
  color: #fff;
  background: #32373f;
  border-radius: 12px;
  height: 46px;
  width: 100%;
  padding-left: 15px;
  box-sizing: border-box;
  margin: 0 auto;
}

.item-menu span {
  font-family: Inter;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.94px;
}

.item-menu-hide {
  background: transparent;
  width: 46px;
  justify-content: center;
}
.item-menu-hide:hover {
  background: #32373f;
}
.item-menu-2 {
  display: flex;
  justify-content: space-between;
}
.item-menu-2 .item-money-menu,
.item-menu-2 .item-friend-menu {
  display: flex;
  align-items: center;
  font-family: Inter;
  gap: 5px;
  font-size: 10px;
  font-weight: 600;
  line-height: 13px;
  color: #262932;
  width: 118px;
  height: 46px;
  border-radius: 12px;
  background: linear-gradient(38.11deg, #eb5e5e 0%, #fcbe91 77.62%);
}
.item-menu-2 .item-friend-menu {
  background: linear-gradient(38.11deg, #427ef3 0%, #7ce0ff 77.62%);
}

.item-menu-hide span,
.item-menu-hide-2 span {
  display: none;
}
.item-menu-hide-2 {
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.item-menu-hide-2 .item-money-menu,
.item-menu-hide-2 .item-friend-menu {
  width: 46px;
  justify-content: center;
}
.border-radius-none {
  border-radius: 0px;
}
.item-menu-3 {
  display: flex;
  justify-content: space-between;
}

.item-menu-3 div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 77.5px;
  height: 46px;
  border-radius: 12px;
  background: #32373f;
  cursor: pointer;
}
.menu-bottom {
  margin-top: 25px;
}

.menu-bottom-two {
  margin-top: 5px;
  border-radius: 6px;
  overflow: hidden;
}

.menu-mobile {
  background-color: #111111;
  position: fixed;
  top: 0;
  left: -280px;
  height: 100vh;
  padding: 15px;
  box-sizing: border-box;
  overflow-y: scroll;
  width: 280px;
  transition: all 0.2s;
  display: none;
  z-index: 999;
  padding-bottom: 50px;
}

.menu-mobile::-webkit-scrollbar {
  width: 4px;
}

.menu-mobile::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.menu-mobile::-webkit-scrollbar-thumb {
  background: #888;
}

.menu-mobile::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.show-menu-mobile {
  left: 0;
}

.bar-mobile {
  display: none;
}

.menu-mobile-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.item-banner {
  border-radius: 12px;
  overflow: hidden;
  flex-basis: 33%;
  height: auto;
  position: relative;
}

.item-banner img {
  width: 100%;
  height: 100%;
}

.mode-light .menu {
  background-color: #eaf1ff;
  box-shadow: 4px 0px 12px 0px #2b2c2e1a;
}

.mode-light .menu .item-menu:hover {
  background-color: #161616;
}

.mode-light .menu .menu-bottom .menu-bottom-two .item-menu:hover {
  border-radius: 12px;
}

.mode-light .menu .item-menu:hover svg path {
  fill: #fff;
}

.mode-light .show-menu {
  background-color: #fff;
  box-shadow: 4px 0px 12px 0px #2b2c2e1a;
}
.mode-light .show-menu .item-menu {
  background-color: #eaf1ff;
  color: #6e7f9f;
}

.mode-light .show-menu .item-menu-3 div {
  background-color: #eaf1ff;
}

.mode-light .show-menu .item-menu:hover,
.mode-light .show-menu .item-menu-2:hover {
  background-color: #161616;
  color: #fff;
}

.mode-light .show-menu .item-menu-3 div:hover {
  background-color: #161616;
}

.mode-light .show-menu .item-menu:hover svg path,
.mode-light .show-menu .item-menu-2:hover svg path {
  fill: #fff;
}

.mode-light .show-menu .item-menu-3 div:hover svg path {
  fill: #fff;
}

@media only screen and (max-width: 1000px) {
  .header-left-main {
    display: none;
  }
  .bar-mobile {
    display: block;
  }
  .header-main {
    justify-content: flex-end;
  }
  .header-center {
    display: none;
  }
  .menu {
    display: none;
  }
  .menu-mobile {
    display: block;
  }
}

@media only screen and (max-width: 1200px) {
  .menu-search {
    display: none;
  }
}
</style>
