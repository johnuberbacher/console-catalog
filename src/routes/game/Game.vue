<template>
  <div
    class="container w-full grid grid-cols-1 lg:grid-cols-3 md:gap-4 xl:gap-8"
  >
    <!-- Col 1-->
    <div class="order-2 lg:order-1">
      <Title title="Screenshots" subtitle="& Media"/>
      <div
        class="
          block
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
                class="carousel-item relative float-left w-full"
                v-bind:class="{ active: index == 1 }"
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
        </div>
      </div>
      <Title title="Publisher" subtitle="Information"/>
      <div
        class="
          game-description
          py-4
          px-6
          lg:py-5
          rounded-2xl
          bg-white
          dark:bg-gray-800
          border border-gray-200
          dark:border-gray-700
          text-sm
          md:text-md
        "
      >
        <div class="font-bold text-xs text-gray-500 uppercase">ESRB Rating</div>
        <p>{{ gameDetails["esrb_rating"]["name"] }}</p>
        <div class="font-bold text-xs text-gray-500 uppercase">ESRB Rating</div>
        <p>{{ gameDetails["esrb_rating"]["name"] }}</p>
        <div class="font-bold text-xs text-gray-500 uppercase">ESRB Rating</div>
        <p>{{ gameDetails["esrb_rating"]["name"] }}</p>
        <div class="mb-3">
          <DetailsButton title="View on Reddit" v-bind:link="gameDetails['website']" />
        </div>
        <div class="mb-0">
          <DetailsButton title="Visit Official Website" v-bind:link="gameDetails['website']" />
        </div>
      </div>
    </div>
    <!-- Col 2-->
    <div class="order-1 lg:order-2 lg:col-span-2">
      <Title title="Game" subtitle="Overview"/>
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
        <div class="game-card-title font-bold text-2xl lg:text-4xl mr-4 mb-1">
          {{ gameDetails["name"] }}
        </div>
        <div class="font-bold text-xs my-1 text-gray-500">PLATFORMS</div>
        <div class="flex flex-row flex-wrap justify-start">
          <div
            v-for="(platform, index) in gameDetails['platforms']"
            v-bind:key="index"
            class="
              text-white
              rounded-2xl
              px-3
              py-1
              text-xxs
              mr-1
              mb-1
              font-bold
              shadow
            "
            v-bind:class="[
              platform['platform']['name'] == 'Steam' ||
              platform['platform']['name'] == 'PC'
                ? 'bg-gray-600'
                : platform['platform']['name'] == '3DS' ||
                  platform['platform']['name'] == 'Nintendo Switch'
                ? 'bg-red-600'
                : platform['platform']['name'] == 'macOS' ||
                  platform['platform']['name'] == 'iOS'
                ? 'bg-gray-400'
                : platform['platform']['name'] == 'Android'
                ? 'bg-pink-800'
                : platform['platform']['name'] == 'Xbox' ||
                  platform['platform']['name'] == 'Xbox 360' ||
                  platform['platform']['name'] == 'Xbox One' ||
                  platform['platform']['name'] == 'Xbox Series S/X'
                ? 'bg-green-600'
                : platform['platform']['name'] == 'PlayStation' ||
                  platform['platform']['name'] == 'PlayStation 2' ||
                  platform['platform']['name'] == 'PlayStation 3' ||
                  platform['platform']['name'] == 'PlayStation 4' ||
                  platform['platform']['name'] == 'PS Vita' ||
                  platform['platform']['name'] == 'PSP' ||
                  platform['platform']['name'] == 'PlayStation 5'
                ? 'bg-blue-800'
                : 'bg-gray-900',
            ]"
          >
            {{ platform["platform"]["name"] }}
          </div>
        </div>
        <div class="font-bold text-xs my-1 text-gray-500">GENRES</div>
        <div
          class="
            inline-block
            text-white
            rounded-md
            px-3
            py-1
            text-xxs
            mr-1
            mB-1
            font-bold
            shadow
            bg-gray-500
          "
        >
          Genre
        </div>
        <div
          class="
            game-description
            mt-4
            pt-4
            px-6
            lg:pt-5
            rounded-2xl
            bg-gray-50
            dark:bg-gray-900
            border border-gray-200
            dark:border-gray-700
            text-sm
            md:text-md
          "
          v-html="gameDetails['description']"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Title from "../../components/ui/Title.vue";
import DetailsButton from "./components/DetailsButton.vue";
export default {
  name: "Game",
  meta: {
    keepAlive: false, // No need to be cached
  },
  data() {
    return {
      gameDetails: [],
      gameScreenshots: [],
      routePath: this.$route.path.replace(/[/]/g, ""),
    };
  },
  components: {
    DetailsButton,
    Title,
  },
  methods: {
    async loadData() {
      await axios
        .get(
          "https://api.rawg.io/api/games/" +
            this.routePath +
            "?key=" +
            process.env.VUE_APP_KEY
        )
        .then((response) => {
          this.gameDetails = response.data;
          axios
            .get(
              "https://api.rawg.io/api/games/" +
                this.routePath +
                "/screenshots?key=" +
                process.env.VUE_APP_KEY
            )
            .then((response) => {
              console.log(response.data["results"]);
              this.gameScreenshots = response.data["results"];
            });
        });
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>
<style lang="scss" >
.game-description {
  p {
    margin: 0 0 16px 0;
    white-space: pre-line;
  }
}
</style>