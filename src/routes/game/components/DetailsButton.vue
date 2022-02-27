<template>
  <a class="py-1 px-3 border rounded-2xl" v-bind:href="link">{{ title }}</a>
</template>

<script>
export default {
  name: "DetailsButton",
  components: {},
  props: {
    title: String,
    link: String,
  },
};
</script>

<style lang="scss" scoped>
</style>
      