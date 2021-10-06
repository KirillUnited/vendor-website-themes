<template>
  <section class="vw-section vw-about" id="about">
    <div class="vw-section-content">
      <div class="vw-container">
        <div class="vw-about-content">
          <div class="vw-about-img has-img-fit">
            <img
              src="../../assets/images/theme3/foto-pettine-10rbsNVwzx8-unsplash (2).jpg"
              alt=""
              loading="lazy"
              decoding="async"
              width="500"
              height="733"
            />
          </div>
          <div class="vw-about-info">
            <div class="vw-about-header">
              <h1 class="vw-about-title">{{ messages.title }}</h1>

              <SocialLinkList
                :className="{ 'vw-social-square': true, 'is-colored': true }"
              ></SocialLinkList>
            </div>

            <p class="vw-post-card-metadata">
              <span>Seattle, wa</span>
              <span>Wedding photographer</span>
              <span>in business since 2008</span>
            </p>

            <div
              v-if="messages.description"
              v-html="messages.description"
            ></div>

            <h3>additional info</h3>

            <div v-for="info in infoList" :key="info.id" class="vw-info">
              <h4 class="vw-info-title">{{ info.title }}</h4>
              <ul class="vw-info-list list-style">
                <li
                  v-for="item in info.list"
                  :key="item.id"
                  class="vw-info-item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinkList from "../../components/SocialLinkList.vue";
export default {
  components: { SocialLinkList },
  name: "About",
  data() {
    return {
      messages: {
        title: `About`,
        description: `<p>I remember the exact moment I decided to start shooting wedding photos. I photographed a friend’s wedding as a favor and discovered I loved the challenge. I also loved the interaction with the bridal party and their guests and being a part of the day’s proceedings. In a nutshell, the whole experience enthralled and excited me. By the day’s end, I knew that the wedding photos were my calling.</p>

        <p>While that friend’s wedding was the catalyst for my professional aspirations, I wasn’t exactly a “kid with a camera and a dream” when I first started. My educational background is in graphic design. I studied graphic design at the University of Nevada, Las Vegas and was taking photography classes in College of Southern Nevada.</p>`,
      },
      infoList: [
        {
          title: "Catering options:",
          list: ["Additional shooters", "Travel", "Engagement shoot"],
        },
        {
          title: "Services:",
          list: ["Digital files", "Albums", "Slide shows", "Prints"],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "../../../../src/scss/mixins/_mixins";
.vw-about {
  &-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &-title {
    line-height: 1;
  }
  &-content {
    display: grid;
    grid-gap: Max(15px, Min(100px, #{getvw(30px)}));
  }
  .vw-info {
    display: grid;
    grid-template-columns: Min(130px, 40%) 1fr;
    grid-gap: Max(15px, Min(30px, #{getvw(15px)}));
    align-items: baseline;
    &-item {
      font-size: 14px;
      background-color: var(--colorPrimary);
    }
    &-title {
      font-size: 11px;
      font-family: "Lato", sans-serif;
      font-weight: 700;
      color: #1a1a1a;
    }
  }
  @include more-sm() {
    &-content {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
    &-info {
      grid-column: 1;
      grid-row: 1;
    }
  }
}
</style>