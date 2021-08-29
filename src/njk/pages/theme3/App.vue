<template>
  <div class="vw-wrapper">
    <Header></Header>
    <main class="vw-content">
      <section class="vw-section vw-hero">
        <div class="vw-section-header">
          <div class="vw-container">
            <h1 v-html="messages.title"></h1>
          </div>
        </div>
        <div class="vw-hero-img vw-container-fluid has-img-fit">
          <img
            :src="heroImage"
            alt=""
          />
        </div>
      </section>
      <section class="vw-section vw-posts" id="posts">
        <div class="vw-section-header">
          <div class="vw-container">
            <h2 v-html="messages.blog">Recent posts</h2>
          </div>
        </div>
        <div class="vw-section-content">
          <div class="vw-container">
            <ul class="vw-posts-list list-style">
              <li
                v-for="article in articles"
                :key="article.id"
                class="vw-posts-list-item"
              >
                <ArticleCard v-bind:article="article"></ArticleCard>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section class="vw-section vw-reviews" id="reviews">
        <div class="vw-section-header">
          <div class="vw-container">
            <h2 v-html="messages.reviews">Reviews</h2>
          </div>
        </div>
        <div class="vw-section-content">
          <div class="vw-container">
            <ul class="vw-reviews-list list-style">
              <li class="vw-reviews-list-item">
                <ReviewCard></ReviewCard>
              </li>
              <li class="vw-reviews-list-item">
                <ReviewCard></ReviewCard>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import ArticleCard from "./components/ArticleCard.vue";
import ReviewCard from "./components/ReviewCard.vue";
import Footer from "./layout/Footer.vue";
import Header from "./layout/Header.vue";
import heroImage from "../../../img/theme3/foto-pettine-PVMw6stOVo0-unsplash (3).jpg";
import articleImage1 from "../../../img/theme3/foto-pettine-7kfulL-IQgU-unsplash.jpg";
import articleImage2 from "../../../img/theme3/foto-pettine-7iC9GVU_I00-unsplash (1).jpg";
export default {
  components: { Header, Footer, ArticleCard, ReviewCard },
  name: "App",
  data() {
    return {
      heroImage: heroImage,
      messages: {
        title: `Wedding photographer<br/>
                Based in seattle, WA`,
        blog: `Recent posts`,
        reviews: `Recent reviews`,
      },
      articles: [
        {
          image: articleImage1,
          title: "Wedding Videography Packages",
          body: `You are planning for one of the most memorable days of your life. You have everything in place in your mind regarding how your wedding day will flow. As you use your imagination to configure your wedding day, you are thinking about what wedding songs you will walk down the aisle to while...`,
        },
        {
          image: articleImage2,
          title: "Wedding Videography: Romeo and Tami’s Wedding Reel",
          body: `You are planning for one of the most memorable days of your life. You have everything in place in your mind regarding how your wedding day will flow...`,
        },
      ],
      items: [
        "https://assets.codepen.io/12005/windmill.jpg",
        "https://assets.codepen.io/12005/suspension-bridge.jpg",
        "https://assets.codepen.io/12005/sunset.jpg",
      ],
    };
  },
  created() {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => this.articles = json);
  },
};
</script>

<style lang="scss">
h1,
.vw-h1,
h2,
.vw-h2,
h3,
.vw-h3,
h4,
.vw-h4 {
  position: relative;
  text-align: left;
  font-family: "SourceSansPro";
  font-weight: 300;
  text-transform: uppercase;

  .vw-section-header & {
    padding-bottom: 40px;
    &::after {
      display: block;
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 47px;
      height: 2px;
      background-color: #000000;
    }
  }
}
.vw-hero {
  background-color: transparent;
}
.vw-section-header {
  padding-bottom: 40px;
}
.vw-button,
a.vw-button,
button.vw-button {
  font-family: "Lato";
  font-weight: 400;
  text-transform: uppercase;
}
.vw-posts-list-item:nth-child(2n) .vw-post-card {
  flex-direction: row;
}
</style>