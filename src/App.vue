<template>
  <div id="app">
    <img v-matthew:[arg].mod="shit" alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-matthew:[arg].mod="'poop'" msg="Welcome to Your Vue.js + TypeScript App"/>
    <button @click="changeShit">change shit</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  public mod: string = "mod1";
  public arg: string = "the arg and a bunch of @#$";
  public shit: string = "hello";
  public changeShit() {
    this.shit = new Date().toLocaleString();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
