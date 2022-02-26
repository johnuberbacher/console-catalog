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
          <div
            id="carouselExampleCaptions"
            class="carousel slide relative"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner relative w-full overflow-hidden">
              <div
                v-for="(screenshot, index) in this.gameScreenshots"
                v-bind:key="index"
                class="carousel-item relative float-left w-full "
                v-bind:class="{ active: index == 1  }"
              >
                <img
                  v-bind:src="screenshot.image"
                  class="block w-full"
                  alt="..."
                />
              </div>
            </div>
            <button
              class="
                carousel-control-prev
                absolute
                top-0
                bottom-0
                flex
                items-center
                justify-center
                p-0
                text-center
                border-0
                hover:outline-none hover:no-underline
                focus:outline-none focus:no-underline
                left-0
              "
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="
                carousel-control-next
                absolute
                top-0
                bottom-0
                flex
                items-center
                justify-center
                p-0
                text-center
                border-0
                hover:outline-none hover:no-underline
                focus:outline-none focus:no-underline
                right-0
              "
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon inline-block bg-no-repeat"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          <img
            v-bind:src="gameDetails['background_image']"
            class="hidden rounded-2xl w-full"
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
      gameDetails: [],
      gameScreenshots: [],
      gamePlatforms: [],
    };
  },
  props: [],
  components: {},
  methods: {
    async loadData() {
      const response1 = await axios.get(
        "https://api.rawg.io/api/games/137?key=" + process.env.VUE_APP_KEY
      );
      this.gameDetails = response1.data;
      const response2 = await axios.get(
        "https://api.rawg.io/api/games/137/screenshots?key=" + process.env.VUE_APP_KEY
      );
      this.gameScreenshots = response2.data['results'];
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style lang="scss" scoped>
</style>