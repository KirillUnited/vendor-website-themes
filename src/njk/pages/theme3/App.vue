<template>
  <div class="vw-wrapper">
    <Header></Header>
    <main class="vw-content">
      <section class="vw-section vw-gallery" id="galleryModal">
        <div class="vw-section-header">
          <div class="vw-container">
            <h1>{{ message }}</h1>
          </div>
        </div>
        <div class="vw-section-content">
          <div class="vw-container">
            <ul class="vw-gallery-list list-style" data-prop="lightgallery">
              <li
                v-for="item in items"
                :key="item"
                class="vw-gallery-list-item has-img-fit"
              >
                <img :src="item" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
export default {
  components: { Header, Footer },
  name: "App",
  data() {
    return {
      message: "Gallery",
      items: [
        "https://assets.codepen.io/12005/windmill.jpg",
        "https://assets.codepen.io/12005/suspension-bridge.jpg",
        "https://assets.codepen.io/12005/sunset.jpg",
      ],
    };
  },
};
</script>

<style>
</style>