<template lang="pug">
header.vw-header
  .vw-container
    input#menu-active(type="checkbox", name="menu-active", hidden="hidden")
    .vw-header-navbar
      label.vw-header-burger.hidden-gt-xs(for="menu-active")
        .lines
          .line-1
          .line-2
          .line-3
      .vw-header-logo.vw-header-item.has-img-fit
        img(src="../assets/images/vw-logo.png", alt="logo")
        img.logo-invert(src="../assets/images/vw-logo-invert.png", alt="logo")
      nav.vw-header-item.has-menu
        ul.vw-header-menu.list-style
          li.vw-header-menu-item(v-for="link in links", :key="link.id")
            a.vw-header-menu-link.vw-button.vw-button-invert(
              :href="'#' + link.id"
            )
              | {{ link.title }}
              svg.icon.hidden-gt-xs(
                version="1.1",
                xmlns="http://www.w3.org/2000/svg",
                xmlns:xlink="http://www.w3.org/1999/xlink",
                x="0px",
                y="0px",
                viewBox="0 0 492.004 492.004",
                style="enable-background: new 0 0 492.004 492.004",
                xml:space="preserve"
              )
                g
                  g
                    path(
                      d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\
                                                                                      c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\
                                                                                      c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\
                                                                                      c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
                    )
          li.vw-header-menu-item
            button.vw-header-menu-link.vw-button(
              data-toggle="modal",
              data-target="#contactModal",
              @click="showModal"
            )
              | contact
              svg.icon.hidden-gt-xs(
                version="1.1",
                xmlns="http://www.w3.org/2000/svg",
                xmlns:xlink="http://www.w3.org/1999/xlink",
                x="0px",
                y="0px",
                viewBox="0 0 492.004 492.004",
                style="enable-background: new 0 0 492.004 492.004",
                xml:space="preserve"
              )
                g
                  g
                    path(
                      d='M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12\
                                                                                      c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028\
                                                                                      c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265\
                                                                                      c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z'
                    )
            modal(v-show="isModalVisible", @close="closeModal")
      .vw-header-item.has-social
        //- // {{ social.socialList("is-colored") }}
        SocialLinkList(:isColored="false")
  //- <header class="vw-header">
  //-   <div class="vw-container">
  //-     <input
  //-       type="checkbox"
  //-       name="menu-active"
  //-       id="menu-active"
  //-       hidden="hidden"
  //-     />

  //-     <div class="vw-header-navbar">
  //-       <label class="vw-header-burger hidden-gt-xs" for="menu-active">
  //-         <div class="lines">
  //-           <div class="line-1"></div>
  //-           <div class="line-2"></div>
  //-           <div class="line-3"></div>
  //-         </div>
  //-       </label>

  //-       <div class="vw-header-logo vw-header-item has-img-fit">
  //-         <img src="../assets/images/vw-logo.png" alt="logo" />
  //-         <img
  //-           class="logo-invert"
  //-           src="../assets/images/vw-logo-invert.png"
  //-           alt="logo"
  //-         />
  //-       </div>
  //-       <nav class="vw-header-item has-menu">
  //-         <ul class="vw-header-menu list-style">
  //-           <li
  //-             v-for="link in links"
  //-             :key="link.id"
  //-             class="vw-header-menu-item"
  //-           >
  //-             <a
  //-               class="vw-header-menu-link vw-button vw-button-invert"
  //-               :href="'#' + link.id"
  //-             >
  //-               {{ link.title }}
  //-             </a>
  //-           </li>

  //-           <li class="vw-header-menu-item">
  //-             <button
  //-               class="vw-header-menu-link vw-button"
  //-               data-toggle="modal"
  //-               data-target="#contactModal"
  //-               @click="showModal"
  //-             >
  //-               contact
  //-             </button>
  //-             <Modal v-show="isModalVisible" @close="closeModal" />
  //-           </li>
  //-         </ul>
  //-       </nav>
  //-       <div class="vw-header-item has-social">
  //-         <!-- {{ social.socialList("is-colored") }} -->
  //-         <SocialLinkList :isColored="false" />
  //-       </div>
  //-     </div>
  //-   </div>
  //- </header>
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
  &-navbar {
    overflow: auto;
  }
  @include less-sm() {
    &-logo {
      .scroll-up & {
        img {
          display: none;

          &.logo-invert {
            display: block;
          }
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
          font-size: Max(11px, Min(15px, #{getvw(11px)}));
          width: 100%;
          color: var(--themeColor);
          justify-content: space-between;
          text-align: left;
          padding-left: getvw(42px);
          padding-right: getvw(42px);
          .icon {
            width: 1em;
            height: 1em;
            fill: rgba(255, 255, 255, 0.8);
          }
        }
      }
    }
    #menu-active:checked ~ .vw-header-navbar {
      background-color: var(--themeColorInvert);
      .lines [class^="line-"] {
        background-color: var(--themeColor);
      }

      img {
        display: none;

        &.logo-invert {
          display: block;
        }
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