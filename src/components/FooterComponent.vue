<template>
  <div class="footer">
    <div class="footer-left">
      <div class="footer-left-one">
        <h3>Promo</h3>
        <ul>
          <li>VIP Club</li>
          <li>Promotions</li>
          <li>Refer and Earn</li>
          <li>Bonus</li>
        </ul>
      </div>
      <div class="footer-left-two">
        <h3>Promo</h3>
        <ul>
          <li>marketing@21.com</li>
          <li>support@2l.com</li>
        </ul>
      </div>
    </div>
    <div class="footer-right">
      <div class="footer-right-one">
        <h3>join our community</h3>
        <div class="footer-right-one-main">
          <div class="list-icon">
            <tele-icon />
            <what-app-icon />
            <instagam-icon />
          </div>
          <div class="list-icon">
            <technology-icon />
            <face-icon />
            <twitter-icon />
          </div>
        </div>
      </div>
      <div class="footer-right-two">
        <h3>join our community123</h3>
        <div class="footer-right-two-main">
          <div class="list-icon">
            <div class="bg-cer">
              <cer1-icon />
            </div>
            <div class="bg-cer">
              <cer2-icon />
            </div>
            <div class="bg-cer">
              <cer3-icon />
            </div>
          </div>
          <div class="list-icon">
            <div class="bg-cer">
              <cer1-icon />
            </div>
            <div class="bg-cer">
              <cer2-icon />
            </div>
            <div class="bg-cer">
              <cer3-icon />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TeleIcon from "@/icons/TeleIcon.vue";
import WhatAppIcon from "@/icons/WhatAppIcon.vue";
import InstagamIcon from "@/icons/InstagamIcon.vue";
import TechnologyIcon from "@/icons/TechnologyIcon.vue";
import FaceIcon from "@/icons/FaceIcon.vue";
import TwitterIcon from "@/icons/TwitterIcon.vue";
import Cer1Icon from "@/icons/Cer1Icon.vue";
import Cer2Icon from "@/icons/Cer2Icon.vue";
import Cer3Icon from "@/icons/Cer3Icon.vue";

export default {
  name: "FooterComponent",
  components: {
    TeleIcon,
    WhatAppIcon,
    InstagamIcon,
    TechnologyIcon,
    FaceIcon,
    TwitterIcon,
    Cer1Icon,
    Cer2Icon,
    Cer3Icon,
  },
};
</script>
<style scoped>
.footer {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  color: #fff;
  background-color: #141414;
  padding: 50px 30px;
  margin-top: 50px;
}
.footer-left {
  display: flex;
  gap: 60px;
}

.footer h3 {
  font-size: 18.53px;
  font-weight: 600;
  line-height: 22.42px;
  text-align: left;
  text-transform: uppercase;
}
.footer-left-one ul li {
  font-size: 16.21px;
  font-weight: 400;
  line-height: 19.62px;
  text-align: left;
  margin-bottom: 10px;
}
.footer-right-one .footer-right-one-main,
.footer-right-two .footer-right-two-main {
  width: 200px;
  margin: 0 auto;
}
.footer-right-one .footer-right-one-main .list-icon,
.footer-right-two .footer-right-two-main .list-icon {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}
.footer-right {
  display: flex;
  gap: 30px;
}

.bg-cer {
  background-color: #fcf9e8;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 6px;
}
@media only screen and (max-width: 1000px) {
  .footer,
  .footer-right {
    flex-direction: column;
  }
  .footer-right-one .footer-right-one-main {
    order: 2;
    margin: 0;
  }
  .footer-right-two .footer-right-two-main {
    order: 1;
    margin: 0;
  }
  .footer-right-two-main {
    flex-direction: column;
  }
}
</style>
