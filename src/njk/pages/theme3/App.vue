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
            src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
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
              <li class="vw-posts-list-item">
                <ArticleCard></ArticleCard>
              </li>
              <li class="vw-posts-list-item">
                <ArticleCard></ArticleCard>
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
import Footer from "./layout/Footer.vue";
import Header from "./layout/Header.vue";
export default {
  components: { Header, Footer, ArticleCard },
  name: "App",
  data() {
    return {
      messages: {
        title: `Wedding photographer<br/>
                Based in seattle, WA`,
        blog: `Blog`,
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