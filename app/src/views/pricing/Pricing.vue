<template>
  <section class="vw-section vw-pricing" id="pricing">
    <div class="vw-section-header">
      <div class="vw-container">
        <h2>{{ messages.title }}</h2>
      </div>
    </div>
    <div v-if="items.length > 0" class="vw-section-content vw-pricing-content">
      <div class="vw-container">
        <ul class="vw-pricing-list list-style">
          <li v-for="item in items" :key="item.id" class="vw-pricing-list-item">
            <article class="vw-price-card">
              <div class="vw-price-card-content">
                <h3 class="vw-price-card-title">{{ item.title }}</h3>
                <p class="vw-price-card-value">
                  <span class="value">{{ item.price }}</span>
                </p>
                <p class="vw-price-card-desc">
                  {{ item.desc }}
                </p>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Pricing",
  data() {
    return {
      messages: {
        title: `Pricing`,
      },
      items: [
        {
          title: "Elope",
          desc: "Flash Pic. specializes in City Hall weddings, elopements, and post-wedding photos. Wedding photoshoots are $250 for the initial first hour (all-inclusive). ",
          price: "$250-530",
        },
        {
          title: "Budget package Wedding Photography Package",
          desc: "Our bronze package includes one photographer for six hours, an engagement session, color correction and retouching, an online gallery with high-res JPGs, and an 8x10 album with 30 pages specializes in City Hall weddings, elopements, and post-wedding photos.",
          price: "$2750",
        },
        {
          title: "silver",
          desc: "Our silver package includes two photographers for eight hours, an engagement session, color correction and retouching, an online gallery with high-res JPGs, and a 9x12 album with 40 pages.",
          price: "$3000",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../../src/scss/mixins/_mixins";
.vw-pricing {
  &-list {
    &-item {
      &:nth-child(2) {
        grid-row: 1/4;
        grid-column: 2/3;
      }
    }
  }
}
.vw-price-card {
  background-color: var(--colorPrimary);
  &-title {
    font-family: "SourceSansPro", sans-serif;
    font-weight: 600;
  }
  &-content {
    & > *:last-child {
      margin-bottom: 0;
    }
  }
}
</style>