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
          <img src="../assets/images/vw-logo.png" alt="logo" />
          <img
            class="logo-invert"
            src="../assets/images/vw-logo-invert.png"
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
                @click="showModal"
              >
                contact
              </button>
              <Modal v-show="isModalVisible" @close="closeModal" />
            </li>
          </ul>
        </nav>
        <div class="vw-header-item has-social">
          <!-- {{ social.socialList("is-colored") }} -->
          <SocialLinkList :isColored="false" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Modal from "../components/Modal.vue";
import SocialLinkList from "../components/SocialLinkList.vue";
export default {
  components: { Modal, SocialLinkList },
  data() {
    return {
      model: {
        $nav: null,
        $navContent: null,
        scrollTimeOut: true,
        lastYPos: 0,
        yPos: 0,
        yPosDelta: 5,
      },
      links: [
        { title: "about me", id: "about" },
        { title: "gallery", id: "gallery" },
        { title: "pricing", id: "pricing" },
        { title: "testimonials", id: "reviews" },
        { title: "blog", id: "posts" },
      ],
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      document.documentElement.classList.add("modal-is-active");
      this.isModalVisible = true;
    },
    closeModal() {
      document.documentElement.classList.remove("modal-is-active");
      this.isModalVisible = false;
    },
    onScroll() {
      // Hide Header on scroll down and show on scroll up
      var scrollTimeOut = this.model.scrollTimeOut,
        lastYPos = this.model.lastYPos,
        yPos = this.model.yPos,
        yPosDelta = this.model.yPosDelta,
        nav = this.model.$nav,
        navContent = this.model.$navContent,
        navHeight = nav.offsetHeight,
        setNavClass = function () {
          scrollTimeOut = false;
          yPos = document.documentElement.scrollTop;

          if (Math.abs(lastYPos - yPos) >= yPosDelta) {
            if (yPos > lastYPos && yPos > navHeight && !navContent.checked) {
              nav.classList.add("nav-up");
              nav.classList.remove("scroll-up");
            } else {
              nav.classList.remove("nav-up");
              nav.classList.add("scroll-up");
            }
            lastYPos = yPos;
          }
          if (yPos === 0) {
            nav.classList.remove("scroll-up");
          }
        };
      window.addEventListener("scroll", () => {
        scrollTimeOut = true;
      });
      setInterval(() => {
        if (scrollTimeOut) {
          setNavClass();
        }
      }, 25);
    },
  },
  mounted() {
    this.model.$nav = document.querySelector(".vw-header");
    this.model.$navContent = document.querySelector("#menu-active");
    this.onScroll();
  },
};
</script>

<style lang="scss">
@import "../../../src/scss/mixins/_mixins";
.vw-header {
  background-color: var(--themeColor);
  &.scroll-up {
    background-color: var(--themeColorInvert);
  }
  @include less-sm() {
    &-logo {
      img {
        display: none;

        &.logo-invert {
          display: block;
        }
      }
    }
    &-menu {
      align-items: flex-start;
      &-item {
        width: 100%;
        & + * {
          margin-top: 1em;
        }
      }
      &-link {
        &.vw-button {
          color: var(--themeColor);
          padding-left: getvw(42px);
          padding-right: getvw(42px);
        }
      }
    }
    #menu-active:checked ~ .vw-header-navbar {
      background-color: var(--themeColorInvert);
      .lines [class^="line-"] {
        background-color: var(--themeColor);
      }
    }
    .vw-social {
      &-list {
        justify-content: flex-start;
        padding-left: getvw(42px);
        padding-right: getvw(42px);
      }
      &-link {
        svg {
          fill: var(--themeColor);
        }
      }
    }
  }
}
</style>