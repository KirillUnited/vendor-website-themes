<template>
  <form class="vw-form" id="contactform" method="POST" action="">
    <fieldset class="vw-form-fieldset">
      <legend class="vw-h3 vw-form-title">Additional info</legend>
      <label class="vw-form-group" for="contactname">
        <input
          type="text"
          class="vw-form-input"
          id="contactname"
          name="contactname"
          placeholder="Name"
          required
          autocomplete="off"
        />
        <span class="error-msg">Enter your name</span>
      </label>
      <label class="vw-form-group" for="contactemail">
        <input
          type="email"
          class="vw-form-input"
          id="contactemail"
          name="contactemail"
          placeholder="E-mail"
          required
          autocomplete="off"
        />
        <span class="error-msg">Enter your e-mail</span>
      </label>
      <label class="vw-form-group" for="contactweddingdate">
        <input
          type="text"
          class="vw-form-input"
          id="contactweddingdate"
          name="contactweddingdate"
          placeholder="Your wedding date"
          autocomplete="off"
          data-prop="datapicker"
        />
        <span class="error-msg"></span>
      </label>
      <label class="vw-form-group" for="contactcomment">
        <textarea
          type="text"
          class="vw-form-input"
          id="contactcomment"
          name="contactcomment"
          rows="5"
        ></textarea>
      </label>
      <div class="vw-form-group text-right">
        <button class="vw-button" type="submit">send</button>
      </div>
    </fieldset>
  </form>
</template>

<script>
import datepicker from "js-datepicker";
export default {
  data() {
    return {};
  },
  mounted() {
    const picker = datepicker('[data-prop="datapicker"]');
  },
};
</script>

<style lang="scss" scoped>
.vw-form {
  &-title {
    font-family: "SourceSansPro";
    font-weight: 400;
  }
  &-input,
  input[type="name"],
  input[type="tel"],
  input[type="email"],
  input[type="password"],
  input[type="text"] {
    background-color: var(--colorPrimary);
  }
}
</style>