<template>
  <div class="container">
    <div class="mobile-search">
      <div class="input-mobile-search">
        <search-icon />
        <input type="text" placeholder="Search" />
      </div>
      <button class="mobile-btn-search"><square-icon />Salão</button>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide><ItemBanner /></swiper-slide>
      <swiper-slide><ItemBanner /></swiper-slide>
      <swiper-slide><ItemBanner /></swiper-slide>
    </swiper>
    <div class="menu-search">
      <div
        v-for="(item, index) in menuSearch"
        :key="index"
        class="btn-menu-search"
        :class="{ 'btn-menu-search-active': item.isActive }"
      >
        <square-icon />
        <span>{{ item.text }}</span>
      </div>
      <div class="search-menu-search">
        <search-icon />
        <input type="text" placeholder="Game or Providers" />
      </div>
    </div>
    <ListItemGame :class-swiper-next="'next1'" :class-swiper-prev="'prev1'" />
    <ListItemGame :class-swiper-next="'next2'" :class-swiper-prev="'prev2'" />
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import ListItemGame from "@/components/ListItemGame.vue";
import SearchIcon from "../icons/SearchIcon.vue";
import SquareIcon from "../icons/SquareIcon.vue";
import ItemBanner from "@/components/ItemBanner.vue";
export default {
  name: "AboutPage",
  props: {
    msg: String,
  },
  components: {
    Swiper,
    SwiperSlide,
    ListItemGame,
    SearchIcon,
    SquareIcon,
    ItemBanner,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        variableWidth: true,
        breakpoints: {
          100: {
            slidesPerView: 1,
          },
          // when window width is >= 320px
          510: {
            slidesPerView: 1,
          },
          // when window width is >= 480px
          700: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
      },
      menuSearch: [
        {
          text: "Salão",
          isActive: true,
        },
        {
          text: "Original",
          isActive: false,
        },
        {
          text: "Casual",
          isActive: false,
        },
        {
          text: "Slots",
          isActive: false,
        },
        {
          text: "Live",
          isActive: false,
        },
        {
          text: "Sports",
          isActive: false,
        },
        {
          text: "Shows",
          isActive: false,
        },
      ],
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.swiper {
  height: 164px;
  width: 100%;
  display: block;
}
.swiper-slide {
  width: 33% !important;
}
.container {
  padding: 20px 15px 0;
}
.menu-search {
  background-color: #32373f;
  height: 56px;
  display: flex;
  border-radius: 12px;
  padding: 5px;
  align-items: center;
  margin: 30px 0;
}
.menu-search .btn-menu-search,
.mobile-btn-search {
  display: flex;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  height: 46px;
  padding: 0 15px;
  gap: 5px;
  margin-right: 10px;
  color: #fff;
}

.menu-search .btn-menu-search:hover {
  background-color: #ff4848;
}

.menu-search .btn-menu-search-active {
  background-color: #ff4848;
}
.menu-search .search-menu-search {
  border: 1px solid #fff;
  background-color: #161616;
  flex-grow: 1;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
}

.menu-search .search-menu-search input {
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  width: 100%;
}
.menu-search .search-menu-search input:focus {
  outline: none;
}

.mobile-search {
  display: none;
  justify-content: space-between;
  gap: 20px;
  margin: 10px 0;
}

.mobile-btn-search {
  background-color: #ff4848;
  margin: 0;
  border: none;
}
.mobile-search .input-mobile-search {
  border: none;
  background: #a1b9e533;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  gap: 10px;
  flex-grow: 1;
  height: 44px;
}

.mobile-search .input-mobile-search input {
  background-color: transparent;
  outline: none;
  border: none;
  color: #fff;
}
.mode-light .menu-search {
  background: linear-gradient(180deg, #f2f6ff 0%, #e6eeff 100%);
}
.mode-light .menu-search .btn-menu-search {
  color: #8399c1;
}

.mode-light .menu-search .btn-menu-search-active {
  color: #fff;
}

.mode-light .menu-search .search-menu-search {
  background-color: #fff;
}

.mode-light .menu-search .search-menu-search input {
  color: #8399c1;
}

@media only screen and (max-width: 1000px) {
  .swiper-slide {
    width: 50% !important;
  }
  .menu-search {
    display: none;
  }
}

@media only screen and (max-width: 600px) {
  .swiper-slide {
    width: 100% !important;
  }

  .mobile-search {
    display: flex;
  }
}
</style>
