<template>
  <Form action="submit" @submit="checkForm" v-slot="{ errors }">
    <Field name="firstname" placeholder="First Name *" rules="required" />
    <span>{{ errors.firstname }}</span>
    <Field name="lastname" placeholder="Last Name *" rules="required" />
    <span>{{ errors.lastname }}</span>
    <Field name="company" placeholder="Company" rules="required" />
    <span>{{ errors.company }}</span>
    <Field
      name="email"
      type="email"
      placeholder="Business E-mail*"
      rules="required|email"
    />
    <span>{{ errors.email }}</span>
    <Field type="number" name="phone" placeholder="Phone" rules="required" />
    <span>{{ errors.phone }}</span>
    <Field
      name="password"
      placeholder="Password *"
      type="password"
      rules="required"
    />
    <span>{{ errors.password }}</span>
    <Field
      name="confirmation"
      placeholder="Re-enter Password *"
      type="password"
      rules="required|confirmed:@password"
    />
    <span>{{ errors.confirmation }}</span>
    <div class="check-box">
      <input required id="checkbox" type="checkbox" />
      <label for="read"
        >I have read and accept the privacy policy. I would like to receive
        emails from Medianova. I reserve the right to opt-out at anytime.</label
      >
    </div>
    <button>START TRIAL</button>
  </Form>
</template>

<script>
import { Field, Form, defineRule } from "vee-validate";
import rules from "@vee-validate/rules";
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule]);
});
export default {
  components: {
    Field,
    Form,
  },
  methods: {
    checkForm(e) {
      this.getForm(e);
    },
  },
  props: {
    getForm: Function,
  },
};
</script>

<style scoped>
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
</style>
