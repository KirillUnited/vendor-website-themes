<template lang="pug">
article.vw-review
  .vw-review-content
    p.vw-review-metadata
      span.rating.has-stars
        span.rating-stars(:style="{ '--rating': rating }")
        span.rating-value {{ rating }}
      span.date January 25, 2018
    p.vw-review-desc
      | {{ body }}
    a.more(href="#") Read more
    .vw-review-author
      .vw-review-img.has-img-fit
        img(src="", :alt="author")
      h3.vw-review-title {{ author }}
  .vw-review-stats.rating.hidden-xs
    ul.rating-list.list-style
      li(v-for="rate in ratingList", :key="rate.id")
        span.rate.rating-value 5.0
        span {{ rate }}

  //- <article class="vw-review">
  //-   <div class="vw-review-content">
  //-     <p class="vw-review-metadata">
  //-       <span class="rating has-stars">
  //-         <span class="rating-stars" :style="{ '--rating': rating }"></span>
  //-         <span class="rating-value">{{ rating }}</span>
  //-       </span>
  //-       <span class="date">January 25, 2018</span>
  //-     </p>
  //-     <p class="vw-review-desc">
  //-       {{ body }}
  //-     </p>
  //-     <a href="#" class="more">Read more</a>
  //-     <div class="vw-review-author">
  //-       <div class="vw-review-img has-img-fit"><img src="" alt="" /></div>
  //-       <h3 class="vw-review-title">{{ author }}</h3>
  //-     </div>
  //-   </div>
  //-   <div class="vw-review-stats rating hidden-xs">
  //-     <ul class="rating-list list-style">
  //-       <li v-for="rate in ratingList" :key="rate.id">
  //-         <span class="rate rating-value">5.0</span><span>{{ rate }}</span>
  //-       </li>
  //-     </ul>
  //-   </div>
  //- </article>
</template>

<script>
export default {
  props: ["review"],
  data() {
    return {
      author: this.review.author,
      body: this.review.body,
      rating: this.review.rating,
      ratingList: [
        "Responsiveness",
        "Value",
        "Professionalism",
        "Reccomendation possibility",
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../src/scss/mixins/_mixins";
@import "../../../src/scss/components/_rating";
.vw-review {
  padding-left: 0;

  &-img {
    position: relative;
    background-color: #bababa;
  }
  &-content {
    background-color: var(--colorPrimary);
  }
  &-stats {
    width: Max(0px, Min(getrem(480px), #{percentage(480 / 1100)}));
    padding-top: 4rem;
  }
  &-author {
    display: flex;
    align-items: center;
    margin-top: getrem(30px);

    .vw-review-img {
      width: getrem(40px);
      height: getrem(40px);
      margin-right: 10px;
    }

    .vw-review-title {
      font-family: "Lato";
      font-size: getrem(11px);
    }
  }
  .more {
    opacity: 0.5;
    color: #333;
  }
  @include less-sm() {
    &-img {
      top: auto;
      left: auto;
      transform: none;
    }
    &-title {
      margin-left: 0;
    }
    &-content {
      display: block;
      padding-top: getvw(25px);
    }
  }
}
</style>