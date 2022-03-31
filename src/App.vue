<script>
import FormComponent from "./components/FormComponent.vue";
import { postUser } from "./core/axios.js";
export default {
  components: {
    FormComponent,
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    getFormData(formData) {
      this.formData = formData;
      this.sendUserData();
    },
    async sendUserData() {
      await postUser(this.formData);
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="info">
      <div class="info-logo">
        <img src="./assets/images/logo.png" alt="logo" />
      </div>
      <div class="info-robot">
        <img src="./assets/images/robot.png" alt="robot" />
      </div>
      <div class="info-list">
        <div class="info-item">
          <div class="info-item-image">
            <img src="./assets/images/network-icon.png" alt="network" />
          </div>
          <div class="info-item-text">Powerful and reliable global network</div>
        </div>
        <div class="info-item">
          <div class="info-item-image">
            <img src="./assets/images/cdn-icon.png" alt="network" />
          </div>
          <div class="info-item-text">Modern & Agile CDN infrastructure</div>
        </div>
        <div class="info-item">
          <div class="info-item-image">
            <img src="./assets/images/experience-icon.png" alt="network" />
          </div>
          <div class="info-item-text">15 years of CDN experience</div>
        </div>
        <div class="info-item">
          <div class="info-item-image">
            <img src="./assets/images/slack-icon.png" alt="network" />
          </div>
          <div class="info-item-text">
            Direct access to engineers with Slack
          </div>
        </div>
      </div>
      <div class="info-cloud">
        <img src="./assets/images/cloud.png" alt="" />
      </div>
      <div class="info-red-line">
        <img src="./assets/images/red-line.png" alt="" />
      </div>
    </div>
    <div class="trial">
      <div class="trial-container">
        <div class="trial-title">Start a 14-day instant free trial</div>
        <div class="form-group">
          <div class="form-group-title">
            Give your website the speed it deserves. With the fastest,
            next-generation CDN.
          </div>
          <FormComponent :getForm="getFormData" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  height: 100vh;
  display: grid;
  grid-template-columns: 0.45fr 0.55fr;
}
.info {
  background: #002133;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding-top: 60px;
  position: relative;
}
.info-logo {
  margin-bottom: 40px;
}
.info-robot {
  margin-bottom: 64px;
}
.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 33px;
}
.info-item-image {
  margin-right: 24px;
}
.info-item-text {
  max-width: 205px;
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #ffffff;
}

.info-cloud {
  position: absolute;
  left: 0;
  bottom: 9%;
}

.info-red-line {
  position: absolute;
  left: 4%;
  bottom: 2%;
}

.trial {
  padding-top: 80px;
}

.trial-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.trial-title {
  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
  /* identical to box height */

  text-align: center;
  letter-spacing: -0.02em;

  color: #434d59;
}

.form-group {
  max-width: 450px;
}

.form-group-title {
  font-family: "Archivo";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  line-height: 132.8%;
  /* or 32px */

  text-align: center;
  letter-spacing: -0.02em;

  color: #444d59;

  margin-top: 16px;
  margin-bottom: 40px;
}

form {
  display: flex;
  flex-direction: column;
}

input {
  background: #ffffff;
  border: 1px solid #d4dee8;
  box-sizing: border-box;
  border-radius: 3px;
  padding: 10px 16px;
  margin-bottom: 12px;

  font-family: "Archivo";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;

  color: #9f9696;
}
.check-box {
  margin-top: 21px;
  margin-bottom: 15px;
  align-items: center;
}
#checkbox {
  margin-right: 10px;
  margin-bottom: 0;
  background: #ffffff;
  border: 0.772563px solid #d4dee8;
  box-sizing: border-box;
  border-radius: 2.31769px;
}
label {
  font-family: "Archivo";
  font-style: normal;
  font-weight: 300;
  font-size: 13px;
  line-height: 132.8%;
  color: #000000;
}
button {
  font-family: "Archivo";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  color: #ffffff;
  background: #e9272b;
  border-radius: 4.63538px;
  outline: none;
  border: none;
  padding: 20px;
}

@media screen and (max-width: 910px) {
  .container {
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }
  .info-cloud {
    display: none;
  }

  .info-red-line {
    display: none;
  }
  .trial {
    padding: 80px 10px;
  }
}
@media screen and (max-height: 820px) {
  .info-cloud {
    display: none;
  }

  .info-red-line {
    display: none;
  }
}
</style>
