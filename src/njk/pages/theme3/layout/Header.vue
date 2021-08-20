<template>
  <header class="vw-header">
    <div class="vw-container">
      <input
        type="checkbox"
        name="menu-active"
        id="menu-active"
        hidden="hidden"
      />

      <div class="vw-header-navbar">
        <label class="vw-header-burger hidden-gt-xs" for="menu-active">
          <div class="lines">
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
          </div>
        </label>

        <div class="vw-header-logo vw-header-item has-img-fit">
          <img src="../../../../img/vw-logo.png" alt="logo" />
          <img
            class="logo-invert"
            src="../../../../img/vw-logo-invert.png"
            alt="logo"
          />
        </div>
        <nav class="vw-header-item has-menu">
          <ul class="vw-header-menu list-style">
            <li
              v-for="link in links"
              :key="link.id"
              class="vw-header-menu-item"
            >
              <a
                class="vw-header-menu-link vw-button vw-button-invert"
                :href="'#' + link.id"
              >
                {{ link.title }}
              </a>
            </li>

            <li class="vw-header-menu-item">
              <button
                class="vw-header-menu-link vw-button"
                data-toggle="modal"
                data-target="#contactModal"
              >
                contact
              </button>
              <!-- {% include "../components/_modal.njk" %} -->
            </li>
          </ul>
        </nav>
        <div class="vw-header-item has-social">
          <!-- {{ social.socialList("is-colored") }} -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: "about me", id: "about" },
        { title: "gallery", id: "gallery" },
        { title: "pricing", id: "pricing" },
        { title: "testimonials", id: "reviews" },
        { title: "blog", id: "posts" },
      ],
    };
  },
};
</script>

<style>
</style>