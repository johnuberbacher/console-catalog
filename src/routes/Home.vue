<template>
  <div
    class="
      container
      w-full
      grid grid-cols-1
      md:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
      md:gap-4
      xl:gap-8
    "
  >
    <!-- Col 1-->
    <div>
      <div
        class="
          game-category-card-type
          w-full
          font-bold
          text-lg
          py-4
          md:py-5
          overflow
          flex flex-row
          items-center
          justify-between
        "
      >
        <div>
          Popular
          <span class="font-light text-gray-500 dark:text-gray-300">Games</span>
        </div>
        <span
          class="
            inline
            md:hidden
            cursor-pointer
            dark:bg-gray-700 dark:hover:bg-gray-600
            w-8
            h-8
            flex
            items-center
            justify-center
            rounded-full
            pb-1
          "
          >🞃</span
        >
      </div>
      <GameCard
        v-for="(game, index) in globalGameList"
        v-bind:key="index"
        v-bind:id="game.id"
        v-bind:slug="game.slug"
        v-bind:title="game.name"
        v-bind:released="game.released"
        v-bind:rating="game.rating"
        v-bind:platforms="game.platforms"
        v-bind:background_image="game.background_image"
      />
    </div>
    <!-- Col w-->
    <div>
      <div
        class="game-category-card-type font-bold text-lg py-4 md:py-5 overflow"
      >
        Explore
        <span class="font-light text-gray-500 dark:text-gray-300"
          >Consoles</span
        >
      </div>
      <div
        v-for="(platform, platformIndex) in randomList(globalPlatformList)"
        v-bind:key="platformIndex"
      >
        <PlatformCard
          v-for="(console, consoleIndex) in platform"
          v-bind:key="consoleIndex"
          v-bind:image_background="console.image_background"
          v-bind:name="console.name"
          v-bind:year_start="console.year_start"
          v-bind:year_end="console.year_end"
          v-bind:games_count="formatNumbers(console.games_count)"
        />
      </div>
    </div>
    <!-- Col 4-->
    <div class="hidden lg:block">
      <div
        class="
          game-category-card-type
          w-full
          font-bold
          text-lg
          py-4
          md:py-5
          overflow
          flex flex-row
          items-center
          justify-between
        "
      >
        <div>
          Discover
          <span class="font-light text-gray-500 dark:text-gray-300">Games</span>
        </div>
        <span
          class="
            inline
            md:hidden
            cursor-pointer
            dark:bg-gray-700 dark:hover:bg-gray-600
            w-8
            h-8
            flex
            items-center
            justify-center
            rounded-full
            pb-1
          "
          >🞃</span
        >
      </div>
    </div>
    <!-- Col 3-->
    <div class="hidden xl:block">
      <div
        class="game-category-card-type font-bold text-lg py-4 md:py-5 overflow"
      >
        Explore
        <span class="font-light text-gray-500 dark:text-gray-300">Genres</span>
      </div>
      <GenreCard
        v-for="(genre, index) in globalGenresList"
        v-bind:key="index"
        v-bind:name="genre.name"
        v-bind:games_count="formatNumbers(genre.games_count)"
        v-bind:image_background="genre.image_background"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GameCard from "../components/cards/GameCard.vue";
import GenreCard from "../components/cards/GenreCard.vue";
import PlatformCard from "../components/cards/PlatformCard.vue";

export default {
  name: "Home",
  meta: {
    keepAlive: true, // Need to be cached
  },
  data() {
    return {
      themeMode: "dark",
      globalGameList: [],
      globalPlatformList: [],
      globalGenresList: [],
      selectedGame: [],
      sortedAmiiboSeries: "",
      showGames: true,
      showPlatforms: true,
    };
  },
  components: {
    GameCard,
    GenreCard,
    PlatformCard,
  },
  props: {
    msg: String,
  },
  methods: {
    loadData() {
      // Load Games
      axios
        .get("https://api.rawg.io/api/games?key=" + process.env.VUE_APP_KEY, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.VUE_APP_KEY,
          },
        })
        .then((response) => {
          this.globalGameList = response.data["results"];
        })
        .catch((error) => {
          console.log("error", error.response);
        });

      // Load Platforms
      axios
        .get(
          "https://api.rawg.io/api/platforms/lists/parents?key=" +
            process.env.VUE_APP_KEY,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + process.env.VUE_APP_KEY,
            },
          }
        )
        .then((response) => {
          const sortArray = response.data["results"];
          for (var i = 0; i < sortArray.length; i++) {
            var platforms = sortArray[i]["platforms"];
            this.globalPlatformList.push(platforms);
          }
        })
        .catch((error) => {
          console.log("error", error.response);
        });

      // Load Genres
      axios
        .get("https://api.rawg.io/api/genres?key=" + process.env.VUE_APP_KEY, {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + process.env.VUE_APP_KEY,
          },
        })
        .then((response) => {
          this.globalGenresList = response.data["results"];
        })
        .catch((error) => {
          console.log("error", error.response);
        });
      // console.log('----cheers---------',data)
    },
    toggle() {
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        this.themeMode = "light";
        document.documentElement.classList.remove("dark");
      } else {
        localStorage.theme = "dark";
        this.themeMode = "dark";
        document.documentElement.classList.add("dark");
      }
    },
    formatNumbers(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    randomList: function (rand) {
      return rand.sort(function () {
        return 0.5 - Math.random();
      });
    },
  },
  computed: {
    extractImageURL: function () {
      return this.loadData();
    },
  },
  mounted() {
    this.loadData();
    if (localStorage.theme === "dark") {
      this.themeMode = "dark";
      document.documentElement.classList.add("dark");
    } else {
      this.themeMode = "light";
      document.documentElement.classList.remove("dark");
    }
  },
};
</script>
<style lang="scss" scoped>
</style>