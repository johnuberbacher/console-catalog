<template>
  <div class="game-category-card-type font-bold text-lg py-4 md:py-5 overflow">
    {{title}}
    <span class="font-light text-gray-500 dark:text-gray-300">{{subtitle}}</span>
  </div>
</template>

<script>
export default {
  name: "Title",
  components: {},
  props: {
    title: String,
    subtitle: String,
  },
};
</script>

<style lang="scss" scoped>
</style>
      