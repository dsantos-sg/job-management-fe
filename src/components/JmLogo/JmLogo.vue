<template>
  <div>
    <v-img
      v-if="logoStyle === 'dark'"
      src="@/assets/img/logoWhite.png"
      :width="parseInt(logoSize)"
      contain
    />
    <v-img
      v-if="logoStyle === 'light'"
      src="@/assets/img/logoBlack.png"
      :height="parseInt(logoSize)"
      contain
    />
    <!--    <h1 class="font-weight-bold w text-uppercase app-title mt-1">-->
    <!--      Job Management-->
    <!--    </h1>-->
  </div>
</template>

<script>
export default {
  name: "JmLogo",
  props: {
    logoStyle: {
      type: String,
      required: true,
      default: "dark",
    },
    logoSize: {
      type: String,
      required: true,
      default: "32",
    },
  },
};
</script>
