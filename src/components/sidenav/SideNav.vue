<template>
  <div
    class="
      game-side
      w-full
      h-full
      border-b
      md:border-r md:border-b-0
      bg-gray-50
      dark:bg-gray-800
      border-gray-200
      dark:border-gray-700
      md:fixed
      md:left-0
      md:top-0
      md:bottom-0
      md:right-auto
    "
  >
    <div
      class="
        flex flex-row
        md:flex-col
        justify-evenly
        md:justify-start
        p-3
        p-lg-4
        h-full
        text-center
      "
    >
      <div class="px-4 hidden lg:inline">
        <img
          src="@/assets/temp-logo.png"
          class="w-full h-auto mt-3 mb-3"
        />
      </div>
      <Button title="Home" link=""/>
      <Button title="My Catalog" link="game" />
      <Button title="Games" link="game" />
      <Button title="Platforms" link="platform" />
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "SideNav",
  components: {
    Button,
  },
};
</script>
<style lang="scss" scoped>
.game-side {
  @media (min-width: 768px) {
    width: 135px;
  }
}
</style>
      