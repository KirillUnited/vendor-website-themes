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
  data() {
    return {
      messages: {
        title: `Gallery`,
      },
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