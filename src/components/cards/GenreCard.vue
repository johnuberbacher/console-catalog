<template>
  <div
    class="
      platform-card
      rounded-2xl
      shadow-xs
      hover:shadow-lg
      overflow-hidden
      bg-white
      dark:bg-gray-800
      border border-gray-200
      dark:border-gray-700
      hover:border-blue-400
      dark:hover:bg-gray-700 dark:hover:border-gray-600
      mb-4
      xl:mb-8
    "
  >
    <div
      class="
        w-full
        bg-cover bg-center bg-no-repeat
        h-40
        bg-gray-200
        dark:bg-gray-700
      "
      :style="{ backgroundImage: 'url(' + encodeURI(image_background) + ')' }"
    ></div>
    <div class="p-4 lg:p-5 flex flex-row items-center justify-between">
      <div class="game-card-title font-bold text-xl mr-4">
        {{ name }}
      </div>
      <div
        class="
          inline-block
          game-card-subtitle
          bg-blue-400
          dark:bg-gray-900
          text-white
          rounded-md
          px-3
          py-2
          text-xs
          font-semibold
        "
      >
        {{ games_count }}&nbsp;Games
      </div>
      <!--
      <div class="flex flex-row justify-between mt-3">
        <div class="flex flex-row">
          <img
            src="http://via.placeholder.com/640x360"
            style="width: 30px; height: 30px"
            class="w-full rounded-full mr-3"
          />
          <img
            src="http://via.placeholder.com/640x360"
            style="width: 30px; height: 30px"
            class="w-full rounded-full mr-3"
          />
          <img
            src="http://via.placeholder.com/640x360"
            style="width: 30px; height: 30px"
            class="w-full rounded-full mr-3"
          />
        </div>
        <div
          class="
            bg-gray-300
            dark:bg-gray-900
            text-white
            rounded-md
            px-3
            py-2
            text-xs
            font-semibold
          "
        >
          +&nbsp;1,361
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "GenreCard",
  props: ["name", "image_background", "games_count"],
  components: {},
};
</script>
<style lang="scss" scoped>
.platform-card {
  * {
    cursor: pointer;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
  }
}
</style>