<template lang="pug">
article.vw-post-card
  .vw-post-card-img.has-img-fit
    img(:src="image", :alt="title")
  .vw-post-card-content
    h3.vw-post-card-title
      | {{ title }}
    p.vw-post-card-metadata
      span 3 minute read
      span.date January 25, 2018
    p.vw-post-card-desc.hidden-xs
      | {{ body }}
    a.vw-button(href="#") read
  //- <article class="vw-post-card">
  //-   <div class="vw-post-card-img has-img-fit">
  //-     <img :src="image" alt="" />
  //-   </div>
  //-   <div class="vw-post-card-content">
  //-     <h3 class="vw-post-card-title">
  //-       {{ title }}
  //-     </h3>
  //-     <p class="vw-post-card-metadata">
  //-       <span>3 minute read</span>
  //-       <span class="date">January 25, 2018</span>
  //-     </p>
  //-     <p class="vw-post-card-desc hidden-xs">
  //-       {{ body }}
  //-     </p>
  //-     <a href="#" class="vw-button">read</a>
  //-   </div>
  //- </article>
</template>

<script>
export default {
  props: ["article"],
  data() {
    return {
      image: this.article.image,
      title: this.article.title,
      body: this.article.body,
    };
  },
};
</script>

<style lang="scss">
@import "../../../src/scss/mixins/_mixins";
.vw-post {
  &-card {
    gap: 0;

    &-content {
      flex: 1 1 100%;
      max-width: 100%;
      text-align: left;
      background-color: var(--colorPrimary);
    }

    &-metadata {
      justify-content: flex-start;
      font-family: "Lato", sans-serif;
      font-size: Max(10px, Min(12px, #{getvw(12px)}));
      font-weight: 700;
      letter-spacing: .1em;
    }
    .vw-button {
      margin-top: 65px;
    }
    &-img {
      height: auto;
    }
  }
  @include less-sm() {
    &-card {
      .vw-button {
        margin-top: 0;
      }
    }
  }
}
</style>