<template>
  <div
    class="
      w-full
      grid grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      md:gap-4
      xl:gap-8
    "
  >
    <!-- Col 1-->
    <div>
      <div
        class="
          block
          p-4
          lg:p-5
          rounded-2xl
          shadow-xs
          overflow-hidden
          bg-white
          dark:bg-gray-800
          border border-gray-200
          dark:border-gray-700
          mb-4
          xl:mb-8
        "
      >
        <div>
          <img
            v-bind:src="gameDetails['background_image']"
            class="rounded-2xl w-full"
          />
        </div>
      </div>
    </div>
    <div class="lg:col-span-2">
      <div
        class="
          block
          p-4
          lg:p-5
          rounded-2xl
          shadow-xs
          overflow-hidden
          bg-white
          dark:bg-gray-800
          border border-gray-200
          dark:border-gray-700
          mb-4
          xl:mb-8
        "
      >
        <div class="game-card-title font-bold text-xl lg:text-3xl mr-4">
          {{ gameDetails["name"] }}
        </div>
        <div v-html="gameDetails['description']"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Game",
  data() {
    return {
      gameDetails: {
        name: "",
        description: "",
      },
    };
  },
  props: [],
  components: {},
  methods: {
    loadData() {
      // Load Game Details
      axios
        .get("https://api.rawg.io/api/games/137?key=" + process.env.VUE_APP_KEY, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.VUE_APP_KEY,
          },
        })
        .then((response) => {
          this.gameDetails = response.data;
          console.log(this.gameDetails);
        })
        .catch((error) => {
          console.log("error", error.response);
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style lang="scss" scoped>
</style>