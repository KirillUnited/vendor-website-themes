<template>
  <section class="vw-section vw-post has-bg" id="post">
    <div class="vw-container-fluid">
      <div class="vw-post-bg has-img-fit">
        <img src="" alt="" />
      </div>
    </div>
    <div class="vw-section-content vw-post-content">
      <div class="vw-container vw-container-sm">
        <h1>Live Stream My Event</h1>

        <SocialLinkList
          :className="[
            'vw-social-square',
            'is-colored',
            'is-aside',
            'hidden-xs',
          ]"
        ></SocialLinkList>

        <p class="vw-post-card-metadata">
          <span>3 minute read</span>
          <span class="date">January 25, 2018</span>
        </p>

        <p>
          I remember the exact moment I decided to start shooting wedding
          photos. I photographed a friend’s wedding as a favor and discovered I
          loved the challenge. I also loved the interaction with the bridal
          party and their guests and being a part of the day’s proceedings. In a
          nutshell, the whole experience enthralled and excited me. By the day’s
          end, I knew that the wedding photos were my calling.
        </p>

        <p>
          We left special and honored to filmed Romeo and Tami’s wedding. That’s
          how we feel when to people, who are in love, decide to hire us to film
          their special event. The bride and groom are involved in helping
          athletes. One is a girls’ basketball coach and the other helps coach
          softball. As a person that love basketball, it was clearly that we had
          to implement both sports in the wedding. Furthermore, I brought up the
          idea of a first look to Romeo, and he instantly agreed to the idea. We
          thought it would be a very cool video with slow motion.
        </p>

        <img class="has-img-fit" src="" alt="" width="100%" height="399px" />

        <h3>Reasons to live stream events</h3>

        <p>
          We wanted to capture Tami walking towards Romeo and tap him on the
          shoulder for the first look while Romeo dribbles the basketball. Romeo
          and his wife completely made it easy for us to capture this special
          moment. We only needed one take to capture that beautiful part of the
          wedding. As a result, that part of the video was amazing, and it was
          one of the main highlights in the video. The couple also took wedding
          photos with the basketball and baseball.
        </p>

        <SocialLinkList
          :className="['vw-social-square', 'is-colored']"
          :itemClassName="{ '0': ['is-fluid'], '1': ['is-fluid'] }"
        ></SocialLinkList>
      </div>
      <div class="vw-container">
        <h2>up next</h2>
      </div>
      <div class="vw-container">
        <ul class="vw-posts-list list-style">
          <li class="vw-posts-list-item">
            <article class="vw-post-card">
              <div class="vw-post-card-img has-img-fit">
                <img src="" alt="" />
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
                  Ahmed and Amina was full of excitement and a joy to film. The
                  wedding was a two day celebration. The couple decided to make
                  the first day of their wedding an America tradition; the
                  second...
                </p>
                <a href="#" class="vw-button">read</a>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import SocialLinkList from "../../components/SocialLinkList.vue";
export default {
  components: { SocialLinkList },
};
</script>

<style>
</style>