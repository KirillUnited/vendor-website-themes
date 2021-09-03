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
          <img :src="heroImage" alt="" />
        </div>
      </section>
      <section v-if="articles.length" class="vw-section vw-posts" id="posts">
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
      <section v-if="reviews.length" class="vw-section vw-reviews" id="reviews">
        <div class="vw-section-header">
          <div class="vw-container">
            <h2 v-html="messages.reviews">Reviews</h2>
          </div>
        </div>
        <div class="vw-section-content">
          <div class="vw-container">
            <ul class="vw-reviews-list list-style">
              <li
                v-for="review in reviews"
                :key="review.id"
                class="vw-reviews-list-item"
              >
                <ReviewCard v-bind:review="review"></ReviewCard>
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
export default {
  components: { Header, Footer, ArticleCard, ReviewCard },
  name: "App",
  data() {
    return {
      heroImage: require("./assets/images/theme3/foto-pettine-PVMw6stOVo0-unsplash (3).jpg"),
      messages: {
        title: `Wedding photographer<br/>
                Based in seattle, WA`,
        blog: `Recent posts`,
        reviews: `Recent reviews`,
      },
      articles: [
        {
          image: require("./assets/images/theme3/foto-pettine-7kfulL-IQgU-unsplash.jpg"),
          title: "Wedding Videography Packages",
          body: `You are planning for one of the most memorable days of your life. You have everything in place in your mind regarding how your wedding day will flow. As you use your imagination to configure your wedding day, you are thinking about what wedding songs you will walk down the aisle to while...`,
        },
        {
          image: require("./assets/images/theme3/foto-pettine-7iC9GVU_I00-unsplash (1).jpg"),
          title: "Wedding Videography: Romeo and Tami’s Wedding Reel",
          body: `You are planning for one of the most memorable days of your life. You have everything in place in your mind regarding how your wedding day will flow...`,
        },
      ],
      reviews: [
        {
          rating: 5.0,
          author: "Josh C",
          body: `Working with Daryl for the last year of wedding planning was great from beginning to end. He truly made my wedding very personal making sure he captured every special moment.`,
        },
        {
          rating: 5.0,
          author: "Josh C",
          body: `My fiancé and I had an absolutely wonderful time having our engagement photos taken with Mr. Hawk. He was kind, generous with his time and knew exactly how to pose us to get the most flattering shots. We were able to examine many of the shots after he took them during the session and given the option to retake any particular shot if we didn’t like positioning. Photos came back in a timely manner and are absolutely beautiful. The editing was done so well the images almost floated off the page. I would recommend Hawk Photography to anyone looking for a professional, knowledgeable and generous`,
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
</style>