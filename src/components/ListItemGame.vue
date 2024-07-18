<template>
  <div class="list-game">
    <div class="list-game-top">
      <div class="list-game-top-left">
        <component :is="iconComponent"></component>
        <h3>{{ title }}</h3>
      </div>
      <div class="list-game-top-right">
        <button class="more">More</button>
        <button class="slide" :class="`${classSwiperPrev}`">
          <prev-icon />
        </button>
        <button class="slide" :class="`${classSwiperNext}`">
          <next-icon />
        </button>
      </div>
    </div>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item, index) in itemsGame" :key="index">
        <ItemGame :is-hot="item.isHot" :src-img="item.srcImg" :des="item.des" />
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import FireIcon from "../icons/FireIcon.vue";
import PrevIcon from "../icons/PrevIcon.vue";
import NextIcon from "../icons/NextIcon.vue";
import ItemGame from "./ItemGame.vue";
export default {
  name: "ListItemGame",
  props: {
    classSwiperPrev: {
      type: String,
      required: true,
    },
    classSwiperNext: {
      type: String,
      required: true,
    },
    iconComponent: {
      type: Object,
      required: true,
      default: () => FireIcon,
    },
    title: {
      type: String,
      default: "Recommendations",
    },
    itemsGame: {
      type: Array,
      default: () => [
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
        {
          isHot: true,
          srcImg: require("../assets/image.png"),
          des: "game123",
        },
      ],
    },
  },
  components: {
    FireIcon,
    ItemGame,
    PrevIcon,
    NextIcon,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        variableWidth: true,
        navigation: {
          nextEl: `.${this.classSwiperNext}`,
          prevEl: `.${this.classSwiperPrev}`,
        },
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
            slidesPerView: 5,
            spaceBetween: 10,
          },
          // when window width is >= 640px
          1000: {
            slidesPerView: 7,
            spaceBetween: 16,
          },
        },
      },
    };
  },
};
</script>
<style scoped>
.list-game {
  padding: 10px 0;
  position: relative;
}
.list-game-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 20px;
}
.list-game-top h3 {
  font-family: Inter;
  font-size: clamp(12px, 0.7rem * 1vw, 18px);
  font-weight: 700;
  text-align: left;
  margin: 0;
  color: #ffffff;
}
.list-game-bottom {
  display: flex;
  justify-content: space-between;
}

.list-game-top-left {
  display: flex;
  gap: 10px;
}
.list-game-top-right {
  display: flex;
  gap: 10px;
}
.list-game-top-right .more {
  background-color: #ff4848;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  color: #ffffff;
  font-family: Inter;
  font-size: 12px;
  font-weight: 700;
  line-height: 14.52px;
  text-align: center;
  text-transform: uppercase;
  padding: 0 10px;
}
.list-game-top-right .slide {
  background-color: #e4eaf2;
  border: none;
  border-radius: 12px;
  padding: 10px;
  cursor: pointer;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: 36px;
}
.swiper {
  width: 100%;
  display: block;
}
.swiper-slide {
  width: 11.3% !important;
}

@media only screen and (max-width: 1000px) {
  .swiper-slide {
    width: 19% !important;
  }
}

@media only screen and (max-width: 600px) {
  .swiper-slide {
    width: 30% !important;
  }
}
</style>
