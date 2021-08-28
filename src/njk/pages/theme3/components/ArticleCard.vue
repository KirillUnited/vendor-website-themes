<template>
  <article class="vw-post-card">
    <div class="vw-post-card-img has-img-fit">
      <img src="https://assets.codepen.io/12005/windmill.jpg" alt="" />
    </div>
    <div class="vw-post-card-content">
      <h3 class="vw-post-card-title">
        Wedding Videography Packages with Love Story
      </h3>
      <p class="vw-post-card-metadata">
        <span>3 minute read</span>
        <span class="date">January 25, 2018</span>
      </p>
      <p class="vw-post-card-desc hidden-xs">
        Ahmed and Amina was full of excitement and a joy to film. The wedding
        was a two day celebration. The couple decided to make the first day of
        their wedding an America tradition; the second...
      </p>
      <a href="#" class="vw-button">read</a>
    </div>
  </article>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.vw-post {
  &-card {
    gap: 0;

    &-content {
      flex: 1 1 100%;
      max-width: 100%;
      text-align: left;
      background-color: #f8f9fa;
    }

    &-metadata {
      justify-content: flex-start;
    }
    .vw-button {
      margin-top: 65px;
    }
    &-img {
      height: auto;
    }
  }
}
</style>