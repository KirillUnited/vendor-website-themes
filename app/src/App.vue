<template>
  <div class="vw-wrapper">
    <Header></Header>
    <main class="vw-content">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./layout/Footer.vue";
import Header from "./layout/Header.vue";
export default {
  components: { Header, Footer },
  name: "App",
  data() {
    return {
      
    };
  },
  created() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => this.articles = json);
  },
};
</script>

<style lang="scss">
</style>