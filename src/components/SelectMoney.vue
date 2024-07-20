<template>
  <div class="select-money">
    <div class="text">
      R$ {{ selectedOption.text }}
      <div @click="showOptions = !showOptions">
        <dropdown-icon />
      </div>
      <ul class="list-money" v-show="showOptions">
        <li
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
        >
          {{ option.text }}
        </li>
      </ul>
    </div>
    <button class="btn">Deposit</button>
  </div>
</template>
<script>
import DropdownIcon from "@/icons/DropdownIcon.vue";
export default {
  name: "SelectMoney",
  components: {
    DropdownIcon,
  },
  data() {
    return {
      showOptions: false,
      selectedOption: { value: "1", text: "100" },
      options: [
        { value: "1", text: "100" },
        { value: "2", text: "200" },
        { value: "3", text: "300" },
        // More options...
      ],
    };
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option;
      this.showOptions = false;
    },
  },
};
</script>
<style scoped>
.select-money {
  display: flex;
  background-color: #fff;
  border-radius: 12px;
  height: 46px;
}
.text {
  position: relative;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 10px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 11.37px;
  text-align: center;
  cursor: pointer;
}

.btn {
  background-color: #ff4848;
  color: #fff;
  height: 100%;
  padding: 0 15px;
  border: none;
  border-radius: 12px;
}
.list-money {
  list-style-type: none;
  padding: 10px 0;
  position: absolute;
  top: 33px;
  left: 0;
  width: 185px;
  background-color: #fff;
  color: black;
  border-radius: 4px;
  z-index: 1000000;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.list-money li {
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .select-money {
    height: 33px;
  }
  .text {
    width: 70px;
    font-size: 12px;
    font-weight: 500;
    padding: 0 5px 0 10px;
  }
  .list-money {
    top: 34px;
  }
}
</style>
