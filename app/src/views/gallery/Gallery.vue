<template>
  <section class="vw-section vw-gallery" id="galleryModal">
    <div class="vw-section-header">
      <div class="vw-container">
        <h1>{{ messages.title }}</h1>
      </div>
    </div>
    <div v-if="items.length > 0" class="vw-section-content">
      <div class="vw-container">
        <ul class="vw-gallery-list list-style" data-prop="lightgallery">
          <li
            v-for="item in items"
            :key="item"
            class="vw-gallery-list-item has-img-fit"
          >
            <a class="img-bg has-img-fit" :href="item">
              <img :src="item" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import "lightgallery.js";
import "lightgallery.js/dist/css/lightgallery.css";
export default {
  name: "Gallery",
  data() {
    return {
      messages: {
        title: `Gallery`,
      },
      items: [
        require("../../assets/images/theme3/foto-pettine-3IA9da9Ohx0-unsplash (3).jpg"),
        require("../../assets/images/theme3/foto-pettine-IfjHaIoAoqE-unsplash (3).jpg"),
        require("../../assets/images/theme3/foto-pettine-nkeeRGy_CrI-unsplash (1).jpg"),
      ],
    };
  },
  mounted() {
    lightGallery(document.querySelector('[data-prop="lightgallery"]'), {
      selector: "a",
      download: false,
    });
  },
};
</script>

<style>
</style>