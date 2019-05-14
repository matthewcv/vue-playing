import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.directive("matthew", {
  bind() {
    console.info("bind", this, arguments);
  },
  componentUpdated() {
    console.info("componentUpdated", this, arguments);
  },
  inserted() {
    console.info("inserted", this, arguments);
  },
  unbind() {
    console.info("unbind", this, arguments);
  },
  update() {
    console.info("update", this, arguments);
  },
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
