<template>
  <div class="container-item-game">
    <div class="item-game">
      <span v-if="isHot" class="hot">HOT</span>
      <b-icon v-if="isB" class="b" />
      <img v-bind:src="srcImg" alt="asdasd" />
    </div>
    <span class="sub-title">{{ des }}</span>
  </div>
</template>

<script>
import BIcon from "../icons/BIcon.vue";
export default {
  name: "ItemGame",
  components: {
    BIcon,
  },
  props: {
    isHot: {
      type: Boolean, // replace with the type of your prop
      default: false, // replace with your default value
    },
    isB: {
      type: Boolean, // replace with the type of your prop
      default: false, // replace with your default value
    },
    srcImg: Object,
    des: {
      type: String, // replace with the type of your prop
      default: "hello", // replace with your default value
    },
  },
  data() {
    return {
      imgSrc: "../assets/logo.png", // replace with your image path
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-game {
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  height: 146.56px;
  position: relative;
}
.item-game .hot {
  position: absolute;
  top: 0;
  left: 0;
  background-color: red;
  color: white;
  padding: 5px;
  width: 40px;
  height: 20px;
  padding: 4.5px 10.69px 4.5px 11px;
  border-radius: 10px 0px 10px 0px;
  font-weight: 700;
  font-family: Inter;
}

.item-game .b {
  position: absolute;
  top: 5px;
  right: 5px;
}

.item-game img {
  width: 100%;
  height: 100%;
}

.container-item-game {
  width: 100%;
}
.container-item-game .sub-title {
  margin-top: 5px;
  display: inline-block;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  width: 100%;
  color: #ffffff;
}
</style>
