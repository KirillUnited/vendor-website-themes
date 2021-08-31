<template>
  <div
    class="vw-modal"
    id="contactModal"
    tabindex="-1"
    data-modal
    role="dialog"
    @click.self="close"
  >
    <div class="vw-modal-content" role="document">
      <button
        type="button"
        class="vw-modal-close"
        data-close="true"
        aria-label="Close"
        @click="close"
      >
        <span aria-hidden="true">&#10761;</span>
      </button>
      <h2 class="vw-modal-title">Contact</h2>
      <p class="text-truncate">
        <a href="tel:+425-638-3836" class="text-truncate">425-638-3836</a>
      </p>
      <p class="text-truncate">
        <a href="mailto:kastlehphotography@gmail.com" class="text-truncate"
          >kastlehphotography@gmail.com</a
        >
      </p>
      <p class="text-truncate">
        <a href="#" class="text-truncate">www.kastlehphotography.com</a>
      </p>
      <!-- {% include "./_form.njk" %} -->
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style>
</style>