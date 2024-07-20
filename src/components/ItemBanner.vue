<template>
  <div class="item-banner">
    <img src="../assets/images/145.jpg" alt="Banner" />
  </div>
</template>
<script>
export default {
  name: "ItemBanner",
  data() {
    return {
      imgSrc: "../assets/images/banner-1.png", // replace with your image path
    };
  },
};
</script>
<style scoped>
.item-banner {
  border-radius: 12px;
  overflow: hidden;
  height: 164px;
  position: relative;
  z-index: -1;
}

.item-banner img {
  width: 100%;
  height: 100%;
}
</style>
