<template>
  <section class="vw-section vw-gallery" id="galleryModal">
    <div class="vw-section-header">
      <div class="vw-container">
        <h1>{{ messages.title }}</h1>
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
</template>

<script>
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
};
</script>

<style>
</style>