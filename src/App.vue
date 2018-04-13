<template>
  <div id="app">
    <app-header></app-header>
    <img src="./assets/logo.png">

    <router-view/>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from "@/components/core/Header.vue";
import Footer from "@/components/core/Footer.vue";

export default {
  name: "App",
  components: {

    'app-header': Header,
    'app-footer': Footer
  }
};
</script>

<style lang="scss" rel="stylesheet/scss">
#app {
  .ciao {
    .vabene {
      color: green;
      font-size: 2.2rem;
      font-weight: bolder;
    }
  }
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
