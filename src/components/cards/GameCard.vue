<template>
  <div
    v-on:click="loadData()"
    class="
      block
      cursor-pointer
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
        sm:h-60
        bg-gray-200
        dark:bg-gray-700
      "
      :style="{ backgroundImage: 'url(' + encodeURI(background_image) + ')' }"
    ></div>
    <div class="p-4 lg:p-5">
      <div class="flex flex-row justify-between">
        <div
          class="
            game-card-subtitle
            font-bold
            text-sm text-gray-500
            dark:text-gray-400
            flex
            flex-row
            items-center
            justify-start
          "
        >
          <v-icon name="star" class="fill-current text-gray-400 mr-2 mb-1"></v-icon>{{ rating }}
        </div>
        <div
          class="
            game-card-subtitle
            font-semibold
            text-sm text-gray-500
            dark:text-gray-500
          "
        >
          {{ released }}
        </div>
      </div>
      <div class="game-card-title font-bold text-xl my-1">
        {{ title }}
      </div>

      <div class="flex flex-row flex-wrap justify-start mt-4">
        <div
          v-for="(platform, index) in platforms"
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
      <div class="flex flex-row justify-between items-center mt-3">
        <div class="flex flex-row items-center">
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
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Icon from "vue-awesome/components/Icon";
export default {
  name: "GameCard",
  props: {
    id: Number,
    slug: String,
    title: String,
    background_image: String,
    suggestions_count: String,
    released: String,
    rating: Number,
    platforms: Array,
  },
  components: {
    "v-icon": Icon,
  },
  data: function () {
    return {
      gameDetails: [],
      gameScreenshots: [],
      gamePlatforms: [],
    };
  },
  methods: {
    async loadData() {
      await axios
        .get(
          "https://api.rawg.io/api/games/" +
            this.slug +
            "?key=" +
            process.env.VUE_APP_KEY
        )
        .then((response) => {
          console.log(response.data);
          this.gameDetails = response.data;
          this.$router.push({
            name: "Game",
            params: {
              slug: this.gameDetails.slug,
            },
          });
        });
    },
  },
};
</script>