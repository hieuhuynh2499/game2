<template>
  <button>{{ text }}</button>
</template>
<script>
export default {
  name: "ButtonComponent",
  props: {
    text: {
      type: String,
      default: "Sign in",
    },
  },
};
</script>
<style scoped>
button {
  background-color: #ff4848;
  border: none;
  color: white;
  padding: 15px 32px;
  height: 46px;
  text-align: center;
  text-decoration: none;
  white-space: nowrap;
  display: inline-block;
  text-transform: uppercase;
  border-radius: 12px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
}
</style>
